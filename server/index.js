const express = require("express");
const authRoutes = require("./routes/authRoutes");
require("./oauth/passport");

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);