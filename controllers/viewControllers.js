const Product = require('../models/productsModels')

const login = (req, res)=>{
    res.render("pages/login");
}

const register = (req, res)=>{
    res.render("pages/register");
}

const home = async (req, res)=>{
    const products = await Product.find({})
    console.log('products', products)
    if(req.user){
        res.render("pages/home", {user:req.user, products:products})
    }else{
        res.redirect("http://localhost:3000/login")
    }
}

const dashboard = (req,res)=>{
    res.render("pages/dashboard")
    }

const cart = (req, res)=>{
/*     console.log('cart',shoppingCart) */
    res.render('pages/shoppingCart')
}

module.exports = {
    login: login,
    register: register,
    home: home,
    dashboard:dashboard,
    cart: cart
}