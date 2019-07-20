// ---------- DEPENDENCIES -----------
//    * Need bodyParser if I want the form data to be available in req.body. Middleware!
//    * Mongoose, the MongoDB ODM ... the NoSQL equivalent to ORM for Node.
//    * Morgan, HTTP request logger middleware for node.js
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

// ---------- INITIALIZE MY APP ----------
var express = require("express");
var app = express();

// ---------- SCRAPING TOOLS ----------
//    * Cheerio, a Node.js library that helps developers interpret and analyze web pages using a jQuery-like syntax.
var axios = require("axios");
var cheerio = require("cheerio");

// ---------- CREATE THE PORT ----------
//    Must deploy to Heroku later || localhost
var PORT = process.env.PORT || 8080;

// ---------- SET UP THE LOGGER ----------
//    * From npm documentation, app.use(morgan). In my case, app.use(logger)
//    * Object contains key-value pairs, where value is string or array
app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// ---------- I NEED HANDLEBARS ----------
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

// ---------- CREATE MONGOOSE DATABASE CONNECTION ----------
// From StackOverflow search:
//    * add :27017 to localhost
//    * pass { useNewUrlParser: true } to connect properly
mongoose.connect("mongodb://localhost:27017/scrape-news", {
  useNewUrlParser: true
});
var db = mongoose.connection;

// ---------- LOG ANY ERRORS THAT HAPPEN DURING CONNECTION ----------
// MONGO
//    * db.on: event is called everytime it occurs
//    * console.error.bind: find the error and log it
//    * db.once: event called only once when it occurs (opening app)
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Yay you're connected to Mongoose!");
});

// ---------- START SERVER ----------
app.listen(PORT, function() {
  console.log("The app is running on port " + PORT + "!");
});
