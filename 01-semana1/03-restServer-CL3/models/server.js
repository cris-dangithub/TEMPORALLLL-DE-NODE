const express = require("express");
class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.routes();
  }
  routes() {
    this.app.get("/", (req, res) => {
      res.send("HELLO WORLD!");
    });
    this.app.get("/misDatos", (req, res) => {
      res.send(
        "<h1>Nombre: Cristian Daniel, Apellido: Muñoz, Edad 20 años</h1>"
      ); // Al parecer, send lo que hace es un innerHTML de lo que hay dentro
    });
    this.app.get("/seriesFavoritas", (req, res) => {
      res.send("Vikings, Rain, Marvel");
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
module.exports = Server;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! HARÉ LA MISMA CONFIGURACIÓN ABAJO PARA PRACTICAR
// const express = require("express");

// class Server {
//   constructor() {
//     this.app = express();
//     this.port = 3000;

//     this.routes()
//   }

//   routes() {
//     this.app.get("/", (req, res) => {
//       res.send("<h2>ME ESTOY LLAMANDO DESDE UNA CLASE</h2>");
//     });
//   }

//   listen() {
//     this.app.listen(this.port, () =>
//       console.log(`Server created in port ${this.port}`)
//     );
//   }
// }

// module.exports = Server;
