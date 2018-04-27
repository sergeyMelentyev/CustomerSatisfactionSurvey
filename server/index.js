const express = require("express");
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

// handle user routes
authRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT);