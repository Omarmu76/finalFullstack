const mongoose = require("mongoose")
/* console.log(‘mongoose set debug: true’) */
const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description:String,
    });

const Product = mongoose.model("Product", productsSchema);

module.exports = Product