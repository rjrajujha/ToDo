// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  
  title: {
    type: String
  },
  note: {
    type: String
  }

});

const ToDos = mongoose.model("todo", todoSchema);

module.exports = ToDos;