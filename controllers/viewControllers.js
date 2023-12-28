const Product = require('../models/productsModels')
const Cart = require('../models/CartModel')
const login = (req, res)=>{
    res.render("pages/login");
}

const register = (req, res)=>{
    res.render("pages/register");
}

/* const home = async (req, res) => {
    const products = await Product.find({})
    const shoppingCart = await Cart.findOne({ userId: req.user._id })
    
    if (req.user) {
        res.render("pages/home", { user:req.user, products:products, cart:shoppingCart.products })
    } else {
        res.redirect('http://localhost:3000/login')
    }
} */


const home = async (req, res) => {
    try {
        const products = await Product.find();
        if (req.user) {
            const shoppingCart = await Cart.findOne({ userId: req.user._id });
            res.render("pages/home", { user: req.user, products: products, cart: shoppingCart ? shoppingCart.products : [] });
        } else {
            res.render("pages/home", { user: req.user, products: products, cart: [] });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('error al conectar');
    }
};



const dashboard = (req,res)=>{
    res.render("pages/dashboard")
    }

/*     const cart = async (req, res) => {
        try {
            const shoppingCart = await Cart.findOne({ userId: req.user._id });
            const promises = shoppingCart.products.map((id) => Product.findById(id));
            const products = await Promise.all(promises); // Corrección: Se espera a que todas las promesas se resuelvan antes de continuar
            res.render('pages/shoppingCart', { products: products });
        } catch (error) {
            console.error(error);
            res.status(500).send('error al conectar');
        }
    }; */

    const cart = async (req, res) => {
        try {
            const shoppingCart = await Cart.findOne({ userId: req.user._id });
            const productIds = shoppingCart ? shoppingCart.products : [];
            const products = await Product.find({ _id: { $in: productIds } });
            res.render('pages/shoppingCart', { user: req.user, products: products, cart: productIds });
        } catch (error) {
            console.error(error);
            res.status(500).send('error al conectar');
        }
    };

module.exports = {
    login: login,
    register: register,
    home: home,
    dashboard:dashboard,
    cart: cart
}

