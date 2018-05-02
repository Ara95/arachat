// "use strict";
//
// const assert = require("assert");
// const mongodb = require('mongo-mock');
// var should = require('chai').should();
//
// mongodb.max_delay = 0;
//
// const MongoClient = mongodb.MongoClient;
//
// MongoClient.persist = "mongo.js";
//
// const url = 'mongodb://localhost:27017/test';
//
// const db = require('../config/database2');
//
//
// describe("insert object into database and get result", async function() {
//     it("it should insert {'username': 'ara', 'password': '123'} and return same result", async function() {
//         let obj = {
//             "username": "ara",
//             "password": "123"
//         };
//         let strObj = JSON.stringify(obj);
//
//
//         console.log(strObj);
//
//         await db.insertToCollection(strObj);
//
//         let result = await db.getAllContentFromDatabase({}, {
//             _id: 0
//         }, 1, {
//             date: -1
//         });
//
//         result.should.be.an("array");
//     });
// });
