const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const addUser = require("../db/addUser");
const findUser = require("../db/findUser");

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    findUser(profile.id).then(found => {
        if (!found) addUser({googleId: profile.id});
    }).catch(err => console.log(err));
}));

module.exports = passport;