const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description:String,
    });

const Product = mongoose.model("Product", productsSchema);

module.exports = Product