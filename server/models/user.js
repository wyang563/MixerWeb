const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
