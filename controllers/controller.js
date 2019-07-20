// ---------- DEPENDENCIES ----------
var express = require("express");
var router = express.Router();
var path = require("path");

var request = require("request");
var cheerio = require("cheerio");

// ---------- GRABBING OUR MODELS ----------
var Article = require("../models/Article");
var Comment = require("../models/Comment");

// ---------- CREATING PATHS ----------
router.get("/", function(req, res) {
  res.redirect("/articles");
});

router.get("/scrape", function(req, res) {
  request("https://www.cracked.com/", function(error, response, html) {
    var $ = cheerio.load(html);
    var titleArray = [];
  });
});
