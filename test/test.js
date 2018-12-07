"use strict";

const assert = require("assert");
//const mocha = require('mocha');
//const describe = mocha.describe;
//const it = mocha.it;
const dsn =  process.env.DB_DSN || "mongodb://localhost:27017/test";
const db = require("../node_modules/aramodule/index.js").mongoInit(dsn, 'test');

describe("Test database", function() {
    describe("Reset", function() {
        it("Should delete all data", async () => {
            await db.reset();
            const data = await db.get();

            assert.equal(data.length, 0);
            await db.close();
        });
    });
    describe("Insert user/pass", function() {
        it("Should insert user/pass", async () => {
            var ob = {
                username: "username",
                password: "password"
            };

            await db.insert(ob);
            const data = await db.get();

            assert.equal(data[0].username, "username");
            assert.equal(data[0].password, "password");
            await db.close();
        });
    });
    describe("Update user/pass", function() {
        it("should update user/pass", async () => {
            const msg = await db.get();
            const old = msg[0];

            var ob = {
                username: "ara",
                password: "hej123"
            };

            await db.update(old._id, ob);
            const data = await db.get();

            assert.equal(data[0].username, "ara");
            assert.equal(data[0].password, "hej123");
            await db.close();
        });
    });
});
