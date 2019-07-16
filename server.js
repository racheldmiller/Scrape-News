// Dependencies
var express = require("express");
var mongoose = require("mongoose");

// See if I need morgan or not?

// Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

// Initialize Express
var app = express();
