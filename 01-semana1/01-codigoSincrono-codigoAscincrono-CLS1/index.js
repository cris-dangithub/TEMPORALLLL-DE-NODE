const fs = require("fs")
const superagent = require("superagent")

console.log(`patch: ${__dirname}`);

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) return console.log('ERROR 🧨')
  //console.log(`Breed ${data}`);
  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      console.log(res.body.message) //La respuesta e smandada por el .body, asi como en axiso es por el .data
      fs.writeFile('doc-img.txt', res.body.message, (err) => {
        console.log("Radom dog image saved to file!");
      })
    })
})


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CON AXIOS (Ejercicio propio):
//const fs = require('fs')
//const axios = require('axios')
//const { log } = require('console')
//
//fs.readFile(`${__dirname}/dog.txt`, 'utf8', (err, data) => {
//  //console.log(data);
//  axios.get(`https://dog.ceo/api/breed/${data}/images/random`)
//    .then(res => {
//      fs.writeFile('dog-img-axios.txt', res.data.message, err => {
//        if (err) return console.log("❌ Se ha producido un error ❌ ");
//        console.log("✅ Su imagen ha sido generada exitosamente con Axios✅ ")
//      })
//    })
//    .catch(err => console.log(err))
//})

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CON FETCH (Ejercicio propio):


