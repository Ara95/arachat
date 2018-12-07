var LocalStrategy = require('passport-local').Strategy;

// load user model
var User = require('../models/user.js');

module.exports = function(passport){

	// serialize the user for the session
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	// unserialize the user
	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});

	passport.use('local-register', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true // this allows the entire request to be passed to callback
	},
	function(req, username, password, done){

		process.nextTick(function(){

			User.findOne({ 'local.username' : username }, function(err, user){

				// if any errors, return the error
				if(err){
					return done(err);
				}

				if(user){
					return done(null, false, req.flash('registerMessage', 'Sorry, that username already exists')); // check template for register error message!
				}else{

					var newUser = new User();

					newUser.local.username = username;
					newUser.local.password = newUser.generateHash(password);

					// save the user in the database
					newUser.save(function(err){
						if(err){
							throw err;
						}
						return done(null, newUser);
					});
				}
			});
		});

	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, username, password, done){

		User.findOne({'local.username' : username}, function(err, user){
			if(err){
				return done(err);
			}

			// if no user found, return error message
			if(!user){
				// req.flash sets flashdata using connect-flash
				return done(null, false, req.flash('loginMessage', 'Sorry, that user is not registered!'));
			}

			// if user is found but password incorrect
			if(!user.validPassword(password)){
				return done(null, false, req.flash('loginMessage', 'Wrong password!'));
			}

			// success, return user
			return done(null, user);
		});
	}));

}
