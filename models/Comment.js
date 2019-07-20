// ---------- DEPENDENCIES ----------
var mongoose = require("mongoose");

// REFERENCE SCHEMA CREATED IN ARTICLE.JS
var Schema = mongoose.Schema;

// ---------- NEW SCHEMA FOR COMMENTS ----------
// Design point: a form where a user fills out:
//      * name (field)
//      * comment (text box)
var CommentsSchema = new Schema({
  name: {
    type: String
  },
  body: {
    type: String,
    required: true
  }
});

var Comment = mongoose.model("Comment", CommentsSchema);

// ---------- INSERT EXPORTS BELOW ----------
model.exports = Comment;
