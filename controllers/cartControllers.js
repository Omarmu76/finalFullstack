const Cart = require("../models/CartModel.js")
const Product = require('../models/productsModels.js')

const update = async (req, res) => {
    try {
        const cart = await Cart.findOne({userId:req.user._id})
        cart.products.push(req.body.productId)
        await cart.save(); // faltaba () corregí el método await para esperar a que se complete la operación de guardado
        res.status(200).end()
    } catch (error) {
        res.status(500).end()
    }
};


const remove = async (req, res) => {
    console.log('productoId', req.body.productId);
    try {
        await Product.findByIdAndRemove(req.body.productId); // corregí el método await para esperar a que se complete la eliminación del producto
        res.status(200).end();
    } catch (error) {
        res.status(500).end();
    }
};



const get = async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.user._id }); // corregi req.body._Id a req.user._id
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).end();
    }
};


module.exports = {
/*     create: create, */
    update: update,
    remove: remove,
    get: get
};
