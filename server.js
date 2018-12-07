'use strict';

var express = 			require('express');
var app = 				express();


const PORT = 				process.env.PORT || 3000;
var http = 				require('http').Server(app);
var io = 				require('socket.io')(http);
var mongoose = 			require('mongoose');
var passport = 			require('passport');
var flash = 			require('connect-flash');

var cookieParser = 		require('cookie-parser');
var bodyParser = 		require('body-parser');
var session = 			require('express-session');
var assert =		    require('assert');
var mongoStore = 		require("connect-mongo");
var myModule = require("aramodule");
var configDB = require('./config/database.js');


	mongoose.connect(configDB.url);

	require('./config/passport.js')(passport);

	app.use(express.static(__dirname + '/public'));
	app.use(cookieParser());
	app.use(bodyParser());
	app.set('view engine', 'ejs');


	var sessionMiddleware = session({
		secret: 'aweawesomeawesomeawesomesome',
		store: new (mongoStore(session))({
			url: configDB.url
		})
	});

	app.use(sessionMiddleware);
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

	require('./routes/routes.js')(app, passport);


	io.use(function(socket, next){
		sessionMiddleware(socket.request, {}, next);
	});

	var users = [];
	io.on('connection', function(socket){


		socket.on('userConnected', function(username){
			if(users.indexOf(username) < 0){
				users.push(username);
			}
			io.emit('getCurrentUsers', users);
		});

		socket.on('chat message', function(msg){

			var timestamp = new Date().toLocaleString();

			io.emit('chat message', msg.user + ": " + msg.msg + "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 " + timestamp);
		});

		socket.on('image', function(img){
			io.emit('image', img);
		});
	});

	http.listen(PORT, function(){
		console.log('listening on *:' + PORT);
	});
