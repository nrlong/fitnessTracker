const express = require("express");
const mongoose = require("mongoose");
// const routes = require("../fitnessTracker/routes/views")
const morgan = require('morgan')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

mongodb+srv://geekNthePink:jhubootcamp@cluster0-hqegp.mongodb.net/test?retryWrites=true&w=majority

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

// app.use("/", routes)
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/views.js"));

app.listen(PORT, () => {
    console.log(`App Listening on port: ${PORT}`)
});