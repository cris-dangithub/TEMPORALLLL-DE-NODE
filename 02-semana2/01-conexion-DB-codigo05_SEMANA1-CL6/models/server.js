const express = require('express');
const { productRouter } = require('../routes/product.routes');
const cors = require('cors');
const { db } = require('../database/db');
const { userRoute } = require('../routes/user.routes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    this.paths = {
      user: '/api/v1/user',
      products: '/api/v1/products',
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
    this.app.use(this.paths.user, userRoute)
  }

  // METODO PARA ESCUCHAR SOLICITUDES POR EL PUERTO
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  // METODO PARA CONFIGURAR ALGUNOS MIDDLEWARES COMO CONFIGURACIÓN DE CORS Y EXPRESS EN JSON
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
}

module.exports = Server;
