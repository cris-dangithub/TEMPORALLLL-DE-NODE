const express = require('express');
const cors = require('cors');
const { usersRouter } = require('./routes/users.routes');
const { transfersRouter } = require('./routes/transfers.routes');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT; //|| 4000;
    this.paths = {
      users: '/api/v1/users',
      transfers: '/api/v1/transfers',
    };

    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(this.paths.users, usersRouter);
    this.app.use(this.paths.transfers, transfersRouter);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor creado exitosamente en puerto ${this.port}`);
    });
  }
}
module.exports = Server;
