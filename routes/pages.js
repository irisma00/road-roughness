const express = require("express");
const async = require("hbs/lib/async");
const authController = require('../controllers/auth');

const router = express.Router();

router.get("/editTrip/:id", authController.showTrip, (req, res) => {
    // console.log(req.road.type_name);
    if (req.trips) {
        res.render("editTrip", {
            trips: req.trips,
            // road: req.road,
            user: req.user
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

module.exports = router;