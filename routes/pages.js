const express = require("express");
const { download } = require("express/lib/response");
const { promisify } = require('util');
const async = require("hbs/lib/async");
const authController = require('../controllers/auth');
const jwt = require('jsonwebtoken');
const { get } = require("express/lib/request");

const router = express.Router();

router.get("/editTrip/:id", authController.showTrip, (req, res) => {
    // console.log(req.road.type_name);
    if (req.trips) {

        res.render("editTrip", {
            trips: req.trips,
            // road: req.road,
            user: req.user,
            csvData: req.csv
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('index', {
        user: req.user
    });
}); 

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/profile', authController.isLoggedIn, (req, res) => {
    // console.log(req.message);
    if (req.user) {
        res.render('profile', {
            user: req.user
        });
    } else {
        res.redirect('/login');
    }
});

router.get('/trip', authController.getPersonalTrips, (req, res) => {    
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/');
    }
    
});

router.get('/sortSpeedDes', authController.sortSpeedDes, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortSpeedAsc', authController.sortSpeedAsc, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortCIRIDes', authController.sortCIRIDes, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortCIRIAsc', authController.sortCIRIAsc, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortDistanceDes', authController.sortDistanceDes, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortDistanceAsc', authController.sortDistanceAsc, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortRoadNameDes', authController.sortRoadNameDes, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortRoadNameAsc', authController.sortRoadNameAsc, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortSegmentsDes', authController.sortSegmentsDes, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortSegmentsAsc', authController.sortSegmentsAsc, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortDateTimeDes', authController.sortDateTimeDes, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/sortDateTimeAsc', authController.sortDateTimeAsc, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    }
});

router.get('/searchByRoadName', authController.searchByRoadName, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    } 
});

router.get('/searchByDate', authController.searchByDate, (req, res) => {
    if (req.trips) {
        res.render('trip', {
            trips: req.trips,
            user: req.user
        });
    } else {
        res.redirect('/trip');
    } 
});

router.get('/downloadTrips', authController.downloadTrips, (req, res) => {
    filePath = req.filePath;
    const time = getCurrentTime();
    filename = "trips-info-" + time;
    res.download(filePath, filename, (err) => {
        if (err) {
            res.status(404)
            res.end();
            console.log('download failed');
            console.error(err);
        }
    });
});


function getCurrentTime() {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // current year
    let year = date_ob.getFullYear();
    
    // current hours
    let hours = date_ob.getHours();
    
    // current minutes
    let minutes = date_ob.getMinutes();
    
    // current seconds
    let seconds = date_ob.getSeconds();

    const time = hours + "-" + minutes + "-" + seconds + ".csv";

    return time;
}




module.exports = router;