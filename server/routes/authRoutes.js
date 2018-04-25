const passport = require("../oauth/passport");

module.exports = (app) => {
    app.get("/api/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
    }));
    app.get("/api/auth/google/callback", passport.authenticate("google"));
};