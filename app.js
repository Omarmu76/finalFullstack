const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const userRoutes = require("./routers/userRoutes")
const productRoutes = require("./routers/productsRoute")

const cookieParser = require("cookie-parser")
const viewRouter = require("./routers/viewsRoutes")
const cors = require("cors")
const port = 3000

//middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static('public'));
app.set("view engine", "ejs");

//rutas vistas
app.use("/", viewRouter)

//rutas de recursos
app.use("/api/user/", userRoutes)
app.use("/api/product/", productRoutes)

app.listen(port, async() => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/finalFullstack');
        console.log(`Example app listening on port ${port}`)
    }catch(error){
        console.log("error to connect mongoDB", error)
    }
  })