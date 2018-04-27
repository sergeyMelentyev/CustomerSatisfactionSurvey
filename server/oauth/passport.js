const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const addUser = require("../db/addUser");
const findUserByGoogId = require("../db/findUserByGoogId");
const findUserByMongoId = require("../db/findUserByMongoId");

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((id, done) => {
    findUserByMongoId(id)
        .then(user => done(null, user));
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    findUserByGoogId(profile.id)
        .then(existingUser => {
            if (existingUser) done(null, existingUser);
            else addUser({googleId: profile.id})
                    .then(user => {
                        if (user.hasOwnProperty("ops") && Array.isArray(user.ops) && user.ops.length)
                            done(null, user.ops[0])
                    });
    }).catch(err => console.log(err));
}));

module.exports = passport;