const mongoose = require("mongoose")

const FormSchema = mongoose.Schema({
    email:String,
    name:String,
    address:String,
    phone:String,
    message:String
})

const form = mongoose.model("FORM", FormSchema);
module.exports = form;