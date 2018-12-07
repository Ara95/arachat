// load user model
var app = require('express')();
var User = require('../models/user.js');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		res.render('login.ejs', { message: "AraChat" });
	});

	// show the login page
	app.get('/login', function(req, res){
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login', {
		failureRedirect: '/login',
		failureFlash: true
	}), function(req, res){

		res.redirect('/mainChat/');
	});

	// show the register page
	app.get('/register', function(req, res){
		res.render('register.ejs', { message: req.flash('registerMessage') });
	});

	app.post('/register', passport.authenticate('local-register', {
		successRedirect: '/mainChat',
		failureRedirect: '/register',
		failureFlash: true
	}));

	// direct to chatroom, with mainChat in the url
	app.get('/mainChat', function(req, res){
		res.render('index.ejs', {
			user: req.user
		});
	});


	// middleware function to make sure user is logged in
	function isLoggedIn(req, res, next){

		// if user is authenticated, then ok
		if(req.isAuthenticated()){
			return next();
		}else {
			// if not authenticated, take them back to the home page
			res.redirect('/');
		}
	}

}
