const express = require('express');
const { productRouter } = require('../routes/product.routes');
const cors = require('cors');
const { db } = require('../database/db');
const { userRoute } = require('../routes/user.routes');
const morgan = require('morgan');
const { categoryRouter } = require('../routes/category.routes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    this.paths = {
      user: '/api/v1/user',
      products: '/api/v1/products',
      categories: '/api/v1/categories',
    };

    this.database();
    this.middlewares();
    this.routes();
  }

  // MÉTODO DE CONEXIÓN CON LA BASE DE DATOS
  database() {
    db.authenticate()
      .then(() => console.log('Database authenticated'))
      .catch(err => console.log(err));
    db.sync()
      .then(() => console.log('Database synced'))
      .catch(err => console.log(err));
  }

  // RUTAS
  routes() {
    this.app.use(this.paths.products, productRouter);
    this.app.use(this.paths.user, userRoute);
    this.app.use(this.paths.categories, categoryRouter);
  }

  // METODO PARA ESCUCHAR SOLICITUDES POR EL PUERTO
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  // METODO PARA CONFIGURAR ALGUNOS MIDDLEWARES COMO CONFIGURACIÓN DE CORS Y EXPRESS EN JSON
  middlewares() {
    if (process.env.NODE_ENV === 'development') {
      console.log('ESTOY EN MODO DESARROLLO');
      this.app.use(morgan('dev')); // Solamente usaremos morgan en modo desarrollo
    }
    if (process.env.NODE_ENV === 'production') {
      console.log('Estoy en modo produccion');
    }
    this.app.use(cors());
    this.app.use(express.json());
  }
}

module.exports = Server;
