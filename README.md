# Simple chat    
a basic chat application using Node.js, Socket.IO, Express.js, MongoDB/Mongoose, ejs templates, etc.    

## Badges
[![Build Status](https://travis-ci.org/Ara95/ramverk2-app.svg?branch=master)](https://travis-ci.org/Ara95/ramverk2-app) [![BCH compliance](https://bettercodehub.com/edge/badge/Ara95/ramverk2-app?branch=master)](https://bettercodehub.com/) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Ara95/ramverk2-app/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Ara95/ramverk2-app/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/Ara95/ramverk2-app/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/Ara95/ramverk2-app/?branch=master)


### screenshots:    
the login page:      

the register page:    

the chat area:    


### steps needed to make this work locally:    
1. set up database, i.e. MongoDB locally or somewhere else.     
2. don't forget to have the dependencies installed via npm!     
3. startup the database by executing mongod.exe and then mongo.exe on the command line. (be mindful of the database name to access though: see config/database.js where the location is specified)        
4. go to the directory where "server.js" lives and then on the command line: ```node server.js```. this starts up the express server. Then go to ```localhost:3000```.    
