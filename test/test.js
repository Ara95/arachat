var assert = require('assert');

// To avoid errors
var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;

var request = require('supertest');
var app = require('../routes/routes.js');
const User = require('../models/user.js');

describe("Testing", function() {
  describe("Testing", function() {
      it("Testing true", function() {
          let username = 'ara';
          let username1 = 'erik';

          assert.notEqual(username, username1);
      })

  });
});
