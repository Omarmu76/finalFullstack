const User = require("../models/userModels")
const userUtils = require("../utils/userUtils")
const login = async (req, res)=>{
    try{
        const email = req.body.email
        const password = req.body.password
        const user = await User.findOne({email: email})
        console.error(user)
        const matchPassword = userUtils.compararPasswords(password, user.password, user.salt)
        if(matchPassword){
            const token = userUtils.createToken(user)
            res.status(200).send(token)
        }else{
            res.status(400).send("pasword no match")
        }
}catch (error){
    console.log("error", error)
    res.status(500).send(error)
}
}

const register = async (req, res) => {
    try {
        const { email, password, photo, name } = req.body;
        if (email && password && photo && name) {
            const hashSalt = userUtils.createHashAndSalt(password);
            await User.create({
                name: name,
                email: email,
                password: hashSalt.hash,
                salt: hashSalt.salt,
                photo: photo,
                isAdmin: false
            });
            res.redirect("/"); // Redirige al usuario a la página de inicio después del registro
        } else {
            res.status(400).send("Datos incompletos");
        }
    } catch (error) {
        res.status(500).send(error);
    }
};


const logout = (req, res)=>{
    req.user = null
    res.clearCookie("token");
    res.status(200).end("usuario desconectado");
}

module.exports = {
    login: login,
    register: register,
    logout: logout
}