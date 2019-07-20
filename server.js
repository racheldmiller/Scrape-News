// Other dependencies I have to do more research about
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

// initialize express app
var express = require("express");
var app = express();

// Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// create local port
var PORT = process.env.PORT || 8080;

// set up logger
app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

// create mongoose database connection
mongoose.connect("mongodb://localhost:27017/scrape-news", {
  useNewUrlParser: true
});
var db = mongoose.connection;

// log any errors that happens during connction
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
