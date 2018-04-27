const MongoClient = require("mongodb").MongoClient;
const keys = require("../config/keys");

const findUserByGoogId = (db, userID) => {
    const collection = db.collection("users");
    return collection.findOne({googleId: userID});
};

module.exports = userID => {
    return MongoClient.connect(keys.mongoURI)
        .then(client => {
            const db = client.db("customer-satisfaction-survey");
            return findUserByGoogId(db, userID);
        })
        .catch(err => console.log(err));
};