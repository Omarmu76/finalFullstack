const User = require("../models/userModels")
const userUtils = require("../utils/userUtils.js")

const login = async (req, res)=>{
    try{
 const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email: email})
    const matchPassword = userUtils.comparePaswords(password, user.hash, user.salt)
    if(matchPassword){
        const token = userUtils.createToken(user)
        res.status(200).send(token)
    }
    }catch (error){
        res.status(500).send(error)
    }
   
}

const register = async (req, res)=>{
    try{

    }catch(error){
        res.status(500).send(error)
    }
    
}


module.exports = {
    login: login,
    register: register
}