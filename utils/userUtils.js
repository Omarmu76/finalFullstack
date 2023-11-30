const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const createHashAndSalt = ()=>{
    const salt = crypto.randonBytes(16).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt,
        1000, 64, `sha512`).toString(`hex`);

    return {
        salt: salt,
        hash: hash
    }
}

const compararPasswords = (password, hash, slat)=>{
    const newHash = crypto.pbkdf2Sync(password, salt,
        1000, 64, `sha512`).toString(`hex`);

        return hash === newHash
}

const createToken = (data)=>{
    const token = jwt.sign(data, "secret")
    return token
}

const validateToken = (token)=>{
    const verified = jwt.verify(token, "secret")
    return verified
}

module.exports = {
    createHashAndSalt: createHashAndSalt,
    compararPasswords: compararPasswords,
    validateToken: validateToken,
    createToken: createToken
}