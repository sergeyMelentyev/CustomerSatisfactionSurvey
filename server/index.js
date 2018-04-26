const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// handle user routes
authRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT);