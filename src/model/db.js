const { MongoClient, objectID } = require("mongodb");

let singleton;

async function connect() {
    if(singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = cliente.db(process.env.DB_DATABASE);
    return singleton;
}

async function findAll(collection) {
    const db = await connect();
    return db.cfollection(collection).findAll().toArray();
}

module.exports = { findAll }