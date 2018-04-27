const passport = require("../oauth/passport");

module.exports = (app) => {
    app.get("/api/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
    }));
    app.get("/api/auth/google/callback", passport.authenticate("google"));
    app.get("/api/auth/current_user", (req, res) => {
        res.send(req.user);
    });
};