const express = require("express")
const route = express.Router()
const viewControllers = require("../controllers/viewControllers")
const authMiddleware = require("../middlewares/auth")
const isAdmin = require("../middlewares/admin")
route.get("/login", viewControllers.login)
route.get("/register", viewControllers.register)
route.get("/",authMiddleware, viewControllers.home)
route.get("/dashboard",authMiddleware, isAdmin, viewControllers.dashboard)
route.get("/cart",authMiddleware, viewControllers.cart)


module.exports = route