const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const async = require("hbs/lib/async");
const { promisify } = require('util');
const { Console } = require("console");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.showTrip = async(req, res, next) => {
    if (req.cookies.jwt) {
        const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
        try {
            //Find the specific trip
            var road_id;
            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if(!result) {
                    return next();
                }
                req.user = result[0];
            })

            db.query('select * from line where id = ?', [req.params.id], (error, result) => {
                req.trips = result[0]; 
                road_id = result[0].road_type;
                
                db.query('select * from Road_Type where type_id = ?', [road_id], (error, result) => {
                    req.road = result[0];  
                    console.log(result)
                    next();
                });
            }); 
        } catch (error) {
            return next();
        }
    } else {
        next();
    }
}

exports.sortSpeedDes = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by avgmph desc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortSpeedAsc = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            db.query('select * from line where created_by = ? order by avgmph asc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortCIRIDes = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by corrected_iri desc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortCIRIAsc = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by corrected_iri asc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortDistanceDes = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by distance desc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortDistanceAsc = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by distance asc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortRoadNameDes = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by trip_name desc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortRoadNameAsc = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by road_name asc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}


exports.sortSegmentsDes = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by segments desc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortSegmentsAsc = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by segments asc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortDateTimeDes = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by created_by desc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.sortDateTimeAsc = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            //Check if the user still exists
            db.query('select * from line where created_by = ? order by created_date asc', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
            })

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.getPersonalTrips = async (req, res, next) => {
    // req.message = "Inside middleware";
    // console.log(req.cookies);
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);     

            var temp;
            //Check if the user still exists
            db.query('select * from line where created_by = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.trips = result;
                temp = JSON.stringify(result);

                for (let i = 0; i < req.trips.length; i++){
                    req.trips[i].test = "THIS IS A TEST"
                }

                console.log(req.trips);
            })
            

            // for (let i = 0; i < temp.length; i++){
            //     temp[i].test = "THIS IS A TEST"
            // }

            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }
                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.changeLastName = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            //verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            
            const updateString = 'update users set last_name="' + req.body.newlname + '" where user_id = ?';
            db.query(updateString, [decoded.id], (error, result) => {
                res.status(200).redirect("/profile");

            });
        } catch (error) {
        }
    }
}

exports.changeFirstName = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            //verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            
            const updateString = 'update users set first_name="' + req.body.newfname + '" where user_id = ?';
            db.query(updateString, [decoded.id], (error, result) => {
                res.status(200).redirect("/profile");
            });
        } catch (error) {
        }
    }
}



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render('login', {
                message: 'Please provide an email and password'
            });
        }

        db.query('select * from users where email = ?', [email], async (error, results) => {
            // console.log("----------------" + results[0]);
            if (!results || !results[0]) {
               res.status(401).render('login', {
                    message: 'The email or password is not incorrect'
                }); 
            } else if (!(await bcrypt.compare(password, results[0].user_pass))) {
                res.status(401).render('login', {
                    message: 'The email or password is not incorrect'
                });
            } else {
                const id = results[0].user_id;

                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is: " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }

                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect('/'); 
            }
        });
    } catch (error) {
        console.log(error);
    }
}


exports.register = (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, state, county, password, passwordConfirm } = req.body;
    const user_id = Math.floor(1000000000000000 + Math.random() * 900000000000000);

    db.query('select email from users where email = ?', [email], async(error, results) => {
        if (error || !(results)) {
            console.log(error);
        }
        console.log(results);

        if (results.length > 0) {
            return res.render('register', {
                message: 'That email is already in use'
            });
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Password do not match'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('insert into users set ?', { user_id: user_id, first_name: firstName, last_name: lastName, email: email, state: state, county: county, user_pass: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                return res.render('login', {
                    message: 'User registered. Please login'
                });
            }
        });
    });
}

exports.isLoggedIn = async (req, res, next) => {
    // req.message = "Inside middleware";
    // console.log(req.cookies);
    if (req.cookies.jwt) {
        try {
            // 1. verify the token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt,
                process.env.JWT_SECRET);           
            console.log(decoded);

            //Check if the user still exists
            db.query('select * from users where user_id = ?', [decoded.id], (error, result) => {
                if (!result) {
                    return next();
                }

                req.user = result[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        } 
    } else {
        next();
    }
}

exports.logout = async (req, res) => {
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });

    res.status(200).redirect('/');
}