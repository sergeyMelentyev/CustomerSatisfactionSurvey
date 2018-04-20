const passport = require("passport");

module.exports = (app) => {
    // use oauth module if user ask for specific url
    app.get("/api/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
    }));
    // pass url with "code" query from Google for final auth step
    app.get("/api/auth/google/callback", passport.authenticate("google"));
};