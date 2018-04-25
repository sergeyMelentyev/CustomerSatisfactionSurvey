const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// handle user routes
authRoutes(app);




const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
    if (err) throw err;
    const db = client.db("customer-satisfaction-survey");
    insertDocuments(db, result => {
        console.log(result);
        client.close();
    });
});

const insertDocuments = (db, callback) => {
    const collection = db.collection("users");
    collection.insertOne({a : 1})
        .then((result, err) => {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
            callback(result);
        });
};




const PORT = process.env.PORT || 8080;
app.listen(PORT);