const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routers/userRoutes');
const productRoutes = require('./routers/productsRoute');
const cartRoutes = require('./routers/cartRoutes');

const cookieParser = require('cookie-parser');
const viewRouter = require('./routers/viewsRoutes');
const cors = require('cors');
const port = 3000;

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// rutas vistas
app.use('/', viewRouter);

// rutas de recursos
app.use('/api/user/', userRoutes); // Se corrigió la ruta de usuario
app.use('/api/cart/', cartRoutes);
app.use('/api/product/', productRoutes); // Se corrigió la ruta de productos

app.listen(port, async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/finalFullstack'/* probando: , {
            useNewUrlParser: true, // opción useNewUrlParser
            useUnifiedTopology: true // opción useUnifiedTopology
        } */);
        console.log(`Example app listening on port ${port}`);
    } catch (error) {
        console.log('Error al conectar con MongoDB', error); // corregi el mensaje de error
    }
});
