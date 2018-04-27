const MongoClient = require("mongodb").MongoClient;
const keys = require("../config/keys");

const findUser = (db, userID) => {
    const collection = db.collection("users");
    return collection.findOne({_id: userID});
};

module.exports = userID => {
    return MongoClient.connect(keys.mongoURI)
        .then(client => {
            const db = client.db("customer-satisfaction-survey");
            return findUser(db, userID);
        })
        .catch(err => console.log(err));
};