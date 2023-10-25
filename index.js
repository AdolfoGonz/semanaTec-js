// importar las bibliotecas

const express = require("express");
const app = express();
// Traer el objeto de conexión
const sequelize = require('./util/dataBase')

// middleware
app.use(express.json());

//Mala practica
app.get('/test', (request, response) => {
    console.log("Esto no se debe de hacer pero funciona");
    response.send('<h1>Servidor funcionando</h1>');
})

//levantar el server y escuchar peticiones 
sequelize.sync()
    .then(result => {
        app.listen(8080, () => {
            console.log("Servidor escuchando")
        })
    })
    .catch(error => console.log(error));

