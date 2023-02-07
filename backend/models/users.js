// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  username: {
    type: String
  },
  password: {
    type: String
  }

});

const Users = mongoose.model("users", UserSchema);

module.exports = Users;