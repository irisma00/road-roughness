const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const async = require("hbs/lib/async");

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render('login', {
                message: 'Please provide an email and password'
            });
        }

        db.query('select * from Users where email = ?', [email], async (error, results) => {
            console.log("----------------" + results);
            if (!results || !results[0]) {
               res.status(401).render('login', {
                    message: 'The email or password is not incorrect'
                }); 
            } else if ((await bcrypt.compare(password, results[0].userPass))) {
                res.status(401).render('login', {
                    message: 'The email or password is not incorrect'
                });
            } else {
                const id = results[0].userId;

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

    // const first = req.body.firstName;
    // const last = req.body.lastName;
    // const email = req.bosy.email;
    // const password = req.body.password;
    // const passwordConfirm = req.body.passwordConfirm;

    const { firstName, lastName, email, password, passwordConfirm } = req.body;

    db.query('select email from Users where email = ?', [email], async(error, results) => {
        if (error) {
            console.log(error);
        }

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

        db.query('insert into Users set ?', { firstName: firstName, lastName: lastName, email: email, userPass: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                return res.render('register', {
                    message: 'User registered'
                });
            }
        });


    });

    // res.send("Form submitted");
    // res.json({

    // })
}

