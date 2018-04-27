const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
const keys = require("../config/keys");

const findUserByMongoId = (db, userID) => {
    const collection = db.collection("users");
    return collection.findOne({"_id": ObjectID(userID)});
};

module.exports = userID => {
    return MongoClient.connect(keys.mongoURI)
        .then(client => {
            const db = client.db("customer-satisfaction-survey");
            return findUserByMongoId(db, userID);
        })
        .catch(err => console.log(err));
};