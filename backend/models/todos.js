const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  activity: {
    type: String
  },
  status: {
    type: String
  },
  timeTaken: {
    type: String
  },
  action: {
    type: String
  }
})

const ToDos = ('user', todoSchema);
module.exports = ToDos;