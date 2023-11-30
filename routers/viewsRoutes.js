const express = require("express")
const route = express.Router()
const viewControllers = require("../controllers/viewControllers")

route.get("/login", viewControllers.login)
route.get("/register", viewControllers.register)
route.get("/", viewControllers.home)

module.exports = route