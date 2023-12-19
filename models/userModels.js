const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: String, 
    email: String,
    password: String,
    photo: String,
    salt: String,
    isAdmin: Boolean
});

const user = mongoose.model("user", userSchema)

module.exports = user