const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const keys = require("../config/keys");

const addUser = (db, data, callback) => {
    const collection = db.collection("users");
    collection.insertOne(data)
        .then((result, err) => {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
            callback(result);
        });
};

module.exports = data => {
    MongoClient.connect(keys.mongoURI, (err, client) => {
        if (err) throw err;
        const db = client.db("customer-satisfaction-survey");
        addUser(db, data, result => {
            // console.log(result);
            client.close();
        });
    });
};