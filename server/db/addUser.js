const MongoClient = require("mongodb").MongoClient;
const keys = require("../config/keys");

const addUser = (db, data) => {
    const collection = db.collection("users");
    return collection.insertOne(data);
};

module.exports = data => {
    return MongoClient.connect(keys.mongoURI)
        .then(client => {
            const db = client.db("customer-satisfaction-survey");
            return addUser(db, data);
        })
        .catch(err => console.log(err));
};