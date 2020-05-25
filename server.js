const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')


const PORT = process.env.PORT || 3000;

const app = express();


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://geekNthePink:jhubootcamp@fitness-hqegp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/views.js"));

app.listen(PORT, () => {
    console.log(`App Listening on port: ${PORT}`)
});