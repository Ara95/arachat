var assert = require('assert');

// To avoid errors
var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;

var request = require('supertest');
var app = require('../routes/routes.js');


describe("Testing", function() {
    it("Testing true", function() {
        let one = 1;
        let five = 1;

        assert.equal(one, five);
    });

    it("Testing false", function() {
        let one = 1;
        let two = 2;

        assert.notEqual(one, two);
    });
});
