const express = require("express")
const route = express.Router()
const viewControllers = require("../controllers/viewControllers")

route.post("/login", viewControllers.login)
route.post("/register", viewControllers.register)
route.get("/", viewControllers.home)

module.exports = route