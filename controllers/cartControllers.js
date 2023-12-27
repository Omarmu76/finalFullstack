const Cart = require("../models/CartModel.js")
const Product = require('../models/productsModels.js')

const update = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.body.productId, req.body);
        res.status(200).end();
    } catch (error) {
        res.status(500).end();
    }
};

const remove = async (req, res) => {
    console.log('productoId', req.body.productId)
    try {
        await Product.findByIdAndRemove(req.body.productId);
        res.status(200).end();
    } catch (error) {
        res.status(500).end();
    }
};



const get = async (req, res) => {
    try {
        const cart = await Cart.find({userId:req.body._Id});
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
