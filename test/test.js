var assert = require('assert');

// To avoid errors
var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;

var request = require('supertest');
var app = require('../routes/routes.js');


describe("Testing", function() {
    it("Testing true", function() {
        let username = 'ara';
        let username1 = 'erik';

        assert.notEqual(username, username1);
    })

});

describe("Testing", function() {
    it("Testing true", function(done) {
      request(app).get("/")
      .expect(200)
      .expect(/AraChat/)
      done();
    })

});
