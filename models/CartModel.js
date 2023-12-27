const mongoose = require("mongoose")
const User = require('./userModels')
const Products = require('./productsModels')
const CartSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    products:{
        type:[mongoose.Types.ObjectId],
        require: false
    },
    }); //hasta aca funcionaba

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart

