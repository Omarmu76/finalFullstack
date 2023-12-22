const mongoose = require("mongoose")
/* console.log(‘mongoose set debug: true’) */
const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Image: String,
    description:String,
    });

const User = mongoose.model("Product", productsSchema);

module.exports = User