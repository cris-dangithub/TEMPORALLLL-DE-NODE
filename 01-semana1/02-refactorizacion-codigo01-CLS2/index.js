//? ANTERIOR CÓDIGO
// const fs = require("fs");
// const superagent = require("superagent");

// console.log(`patch: ${__dirname}`);

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   if (err) return console.log("ERROR 🧨");
//   //console.log(`Breed ${data}`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       console.log(res.body.message); //La respuesta es mandada por el .body, asi como en axiso es por el .data
//       fs.writeFile("doc-img.txt", res.body.message, (err) => {
//         console.log("Radom dog image saved to file!");
//       });
//     });
// });

//? CÓDIGO REFACTORIZADO USANDO PROMESAS
const fs = require("fs");
const superagent = require("superagent");

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) return reject("I couldn't find that file 😢");
      resolve(data);
    });
  });
};

const writeFilePro = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, content, (err) => {
      //Puedo poner cualquier tipo de dato. Es decir, si ponco resolve(()=→'success'), deberíamos poner .then(res=>console.log(res()) ), pues res sería lo que pongo dentro del resolve de la promesa (lo mismo para el error)
      if (err) reject("Could not write file 😢");
    });
  });
};

const getDocPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    await writeFilePro("doc-img.txt", res.body.message);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
getDocPic();

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CON AXIOS (Ejercicio propio):
/* Consumir la API de los países para obtener latitud y longitud y de esta forma obtener también el clima */
//const fs = require('fs')
//const axios = require('axios')
//
//const readFilePro = (file) => {
//  return new Promise((resolve, reject) => {
//    fs.readFile(file, (err, data) => {
//      err ? reject("❌ We couldn't read your file ❌") : resolve(data)
//    })
//  })
//}
//const writeFilePro = (fileName, content) => {
//  return new Promise((resolve, reject) => {
//    fs.writeFile(fileName, content, err => {
//      if (err) reject("❌ We couldn't write your file ❌")
//    })
//  })
//}
//
//const searchWeatherByCountryName = async () => {
//  try {
//    const name = await readFilePro('country.txt')
//    const countryInfo = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
//    const lat = countryInfo.data[0].latlng[0]
//    const lng = countryInfo.data[0].latlng[1]
//    const API_key = 'ccf573de86bef19cc21ea41ac6c84715'
//    const countryWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`)
//    const temp = countryWeather.data.main.temp
//    const result = `La temperatura actual en ${`${name}`.toUpperCase()} es de ${temp}°F`
//    await writeFilePro('country-temp.txt', result)
//    console.log('✅ File written successfully ✅')
//  } catch (error) {
//    console.log(error)
//  }
//}
//searchWeatherByCountryName()

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CON FETCH (Ejercicio propio):
/* Consumir la API de los países para obtener latitud y longitud y de esta forma obtener también el clima */
//const fs = require('fs')
//const axios = require('axios')
//
//const readFilePro = (file) => {
//  return new Promise((resolve, reject) => {
//    fs.readFile(file, (err, data) => {
//      err ? reject("❌ We couldn't read your file ❌") : resolve(data)
//    })
//  })
//}
//const writeFilePro = (fileName, content) => {
//  return new Promise((resolve, reject) => {
//    fs.writeFile(fileName, content, err => {
//      if (err) reject("❌ We couldn't write your file ❌")
//    })
//  })
//}
//
//const getInfo = async (url) => {
//  const data = await fetch(url)
//  const res = await data.json()
//  return res
//}
//
//const searchWeatherByCountryName = async () => {
//  try {
//    const name = await readFilePro('country.txt')
//    const countryInfo = await getInfo(`https://restcountries.com/v3.1/name/${name}`)
//    const lat = countryInfo[0].latlng[0]
//    const lng = countryInfo[0].latlng[1]
//    const API_key = 'ccf573de86bef19cc21ea41ac6c84715'
//    const countryWeather = await getInfo(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`)
//    const temp = countryWeather.main.temp
//    const result = `La temperatura actual en ${`${name}`.toUpperCase()} es de ${temp}°F`
//    await writeFilePro('country-temp.txt', result)
//    console.log('✅ File written successfully ✅')
//  } catch (error) {
//    console.log(error)
//  }
//}
//searchWeatherByCountryName()
