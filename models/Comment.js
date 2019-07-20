// ---------- DEPENDENCIES ----------
var mongoose = require("mongoose");

// Reference Schema from Article.js
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

var Comment = mongoose.model("Commenet", CommentsSchema);

// ---------- INSERT EXPORTS BELOW ----------
model.exports = Comment;
