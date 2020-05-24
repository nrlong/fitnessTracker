const express = require("express");
const mongoose = require("mongoose");
// const routes = require("../fitnessTracker/routes/views")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

// app.use("/", routes)
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/views.js"));

app.listen(PORT, () => {
    console.log(`App Listening on port: ${PORT}`)
});