"use strict";

const dsn = process.env.DBWEBB_DSN || "mongodb://localhost:27017/test";
const mongo = require("mongodb").MongoClient;

let getAllContentFromDatabase = async (criteria, projection, limit, sort) => {
    const db = await mongo.connect(dsn);
    const col = await db.collection('test');
    const res = await col.find(criteria, projection).limit(limit).sort(sort).toArray();

    await db.close();

    return res;
};

let insertToCollection = async (obj) => {
    const db = await mongo.connect(dsn);
    const col = await db.collection('test');
    let ob = JSON.parse(obj);
    
    await col.insert(ob);
    await db.close();

    return 'inserted';
};

module.exports = {
    getAllContentFromDatabase: getAllContentFromDatabase,
    insertToCollection: insertToCollection
};
