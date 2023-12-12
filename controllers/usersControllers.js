const User = require("../models/userModels")
const userUtils = require("../utils/userUtils.js")

const login = async (req, res)=>{
    try{
    const email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email: email})
    const matchPassword = userUtils.compararPasswords(password, user.password, user.salt)
    if(matchPassword){
        const token = userUtils.createToken(user)
        res.status(200).send(token)
    }
    }catch (error){
        console.log("error", error)
        res.status(500).send(error)
    }
}

const register = async (req, res)=>{
    try{
        const email = req.body.email
        const password = req.body.password
        const photo = req.body.photo
        const name = req.body.name
        if(email && password && photo){
            const hashSalt = userUtils.createHashAndSalt(password)
            await User.create({
                name: name,
                email: email,
                password: hashSalt.hash,
                salt: hashSalt.salt,
                photo: photo,
                isAdmin:false
            })
        }
        
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
    
}


module.exports = {
    login: login,
    register: register
}