const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: String,
  Username: String,
  EmailAddress: String,
  Password: String,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
