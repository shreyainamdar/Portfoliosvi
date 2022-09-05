const mongoose = require("mongoose");

const ExperienceSchema = mongoose.Schema({
  date: String,
  title: String,
  description: String,
  type: String,
});

const experience = mongoose.model("EXPERIENCE", ExperienceSchema);
module.exports = experience;