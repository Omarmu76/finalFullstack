const express = require("express")
const route = express.Router()
const usersControllers = require("../controllers/usersControllers")

route.post("/login", usersControllers.login)
route.post("/register", usersControllers.register)

module.exports = route