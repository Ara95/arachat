# Badges
[![BCH compliance](https://bettercodehub.com/edge/badge/Ara95/arachat?branch=master)](https://bettercodehub.com/) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Ara95/arachat/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Ara95/arachat/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/Ara95/arachat/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/Ara95/arachat/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/Ara95/arachat/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Ara95/arachat/build-status/master) [![Build Status](https://travis-ci.org/Ara95/arachat.svg?branch=master)](https://travis-ci.org/Ara95/arachat)[![Maintainability](https://api.codeclimate.com/v1/badges/28d79fe4d117ec1a71bb/maintainability)](https://codeclimate.com/github/Ara95/arachat/maintainability)


# Application

As I worked with earlier in the course, I have continued to work with my chat application. I've been thinking between different templates during the course of the course but has landed on using me out. I think that went well. However, the design of the app itself has not been as nice as I hoped for. Was quite messy towards the end. So instead of running with React or PUG, as many did, I chose EJS, which can write JavaScript directly in the files and use simple HTML.

I have also chosen to continue with MongoDB since I found it easy to handle and that there was a lot about it on the web that you could read about. All I have added is a file handler that can send pictures to the chat, which did not work as I wanted earlier.


# Techniques used   
A basic chat application using Node.js, Socket.IO, Express.js, MongoDB/Mongoose, ejs templates, etc.   
* Node.js
* Express.js
* Socket.io
* MongoDB
* EJS
* Docker


# Technique reflections


### Socket.io
Socket.io is a Javascript library for real time webbapplications. Through bi-directional communication between server and clients there can be a real time connection.
It's divided in two parts, one part that handles the client side on the browser and a server side for Node.js. It's similar to Websockets but it uses many more features like broadcasting to multiple sockets and asynchronous I/O.

It's been really helpfull by using this way to connect client and server side with eachother. I have found many cheatsheets out there with the different events to use for the chat to work. It have been really interesting playing around with the different events and see what they can do or if they are really the right thing to use.

### MongoDB

I chose to use MongoDB since I've heard quite a lot about it and thought it would be easier to work with since there is so much about it out on the internet.

For example in this case im creating a new account for the chat. You type in your new account and password. Then you are creating it. The way MongoDB saves this data is in JSON-like documents and maps the data to my objects in the application code which makes it easier to work with. By this way the data is highly available, scaling much better also easier to use.

### Relationell databases

I think I'm going to use this method more in the future even though I thought NoSQL was much more fun to work with. The reason why I think I'm going to use relationell databases more in the future is because it's more structured and you have more controll over the database. It has a strong mathematical basis and declarative syntax. By having more structure and controll of the database which is built from the ground up I think is an important part for many database based applications etc.


### Scrutinizer
By default scrutinizer reviews alls .js files but you can easily configure paths you would like to filter so it won't review it. You can also combine scrutinizer-ci with open-source tools which is a useful feature. In other ways to say it. It is a really customizable CI. It also give a very informative feedback of your code which let's you spot everything you need to change/improve with your code. It also checks if my application builds with errors or not.


### Better Code Hub

I chose this service because I can easily see which one of the 10 guidelines for maintainable software I need to improve by each scan from my repo. I can easily click in to errors and see what specificly I need to improve, change or remove to get rid of that specific error. For me this is a perfect service because I can have a hard time sometimes finding code to improve and with this it make it so much easier. Instead of show errors or violations specificly, better code hub stacks them up by these 10 guidelines and shows how much you have gone over the line of failing instead of each violation. This makes it easier in a way that you don't have to fix every single error but instead make it good enough to pass.

# Install
* git clone https://github.com/Ara95/ramverk2-app.git
* cd ramverk2-app/
* npm install
* npm start

Starts server and mongodb with docker
* npm start-docker

Stops server and mongodb with docker
* npm stop-docker

# Test
´´npm run test´´
´´npm run test-scrutinizer´´
´´npm test-docker1´´
´´npm test-docker2´´
´´npm test-docker3´´


### Steps needed to make this work locally
1. set up database, i.e. MongoDB locally or somewhere else.     
2. don't forget to have the dependencies installed via npm!
