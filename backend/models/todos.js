// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const todoSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  usr: {
    type: String,
    required: true
  }

});

const ToDos = mongoose.model("todo", todoSchema);

module.exports = ToDos;