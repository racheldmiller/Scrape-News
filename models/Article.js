// INVESTIGATE: TUTOR RECOMMENDS USING POSTMAN TO SEE IF ROUTES ARE FUNCTIONING
// check it out: getpostman.com

// ---------- DEPENDENCIES ----------
// From Mongoose documentation:
//      * Everything in Mongoose starts with a Schema. E
//      * Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
var mongoose = require("mongoose");

// ---------- CREATE SCHEMA FOR ARTICLES ----------
//      * This will look very similar to when I used Sequelize
//      * Construct a model.
//      * I want the title, link to article, and ability to comment.
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

var Article = mongoose.model("Article", ArticleSchema);

// ---------- INSERT EXPORTS BELOW ----------
model.exports = Article;
