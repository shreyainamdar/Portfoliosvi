const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
    img: String,
    title: String,
    description: String
});

const project = mongoose.model("PROJECT", ProjectSchema)
module.exports = project;