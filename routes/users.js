
var express = require('express');
var router = express.Router();

let usersController = require('../controllers/user');
let authController = require('../controllers/auth');


router.get('/me', authController.requireAuth, usersController.myprofile);
// router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// router.get('/signout', usersController.signout);

module.exports = router;



