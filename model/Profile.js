const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  fname: String,
  lname: String,
  position:String,
  description:String,
  age:String,
  nationality:String,
  country:String,
  phone:String,
  email:String,
  language:String
});

const profile = mongoose.model("PROFILE", ProfileSchema);
module.exports = profile;