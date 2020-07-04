const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phNumber: String,
  path: String
});


module.exports = mongoose.model("User", userSchema);
