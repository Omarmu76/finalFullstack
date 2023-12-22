const Product = require("../models/productsModels.js")

const create = async(req,res)=>{
    try{
        await Product.create({
            name:req.body.name,
            price:req.body.price,
            image: req.body.image,
            description: req.body.description
        })

        res.status(201).end()
    }catch(error){
        res.status(500).end()
    }
    
}

const update = async ()=>{
    try{
        await Product.findByIdAndUpdate(req.body.productId)
        res.status(200).end()
    }catch(error){
        res.status(500).end()
    }
}

const remove = async ()=>{
    try{
        await Product.findByIdAndRemove(req.body.productId)
    }catch(error){
        res.status(500).end()
    }
}

const get = async ()=>{
    try{
        const products = await Product.find()
        res.status(200).json(products)
    }catch(error){
        res.status(500).end()
    }
}

module.exports = {
    create: create,
    update: update,
    remove:remove,
    get:get
}