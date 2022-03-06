const express = require('express');
const path = require('path');

const router = express.Router();

//fs: filesystem
const fs = require('fs');
const readline = require('readline');

const artistas = [];
const bandas = [];

const capybaras = [
    {nombre: "Pedro"}, 
    {nombre: "Poncho"}, 
    {nombre: "Pablo"}, 
    {nombre: "Patricio"}
];

const capybaras2 = [
    {nombre: "Sofi"}, 
    {nombre: "Ana"}, 
    {nombre: "Karen"}, 
    {nombre: "Paula"}
];

/*Función para leer archivos por línea .txt*/
function leerLinea (archivo,array){
    const readInterface = readline.createInterface({
        input: fs.createReadStream(archivo),
        output: process.stdout,
        console: false
    });

    readInterface.on('line', function(line) {
        array.push(line)
    });
}

/******
 * Para artistas
*******/
leerLinea('tops/artistas.txt',artistas);

/******
 * Para bandas
*******/
leerLinea('tops/bandas.txt',bandas);



/*Función para agregar artistas o bandas*/
function agregar(archivo,dato){
    fs.appendFile(archivo, dato + "\n", (err) => {
        if (err) throw err;
        console.log("Agregado correctamente!");
     });
}

//Para artistas
router.get('/nuevoArtista', (request, response, next) => {
    console.log('GET /nuevoArtista');
    let respuesta = ''
    response.render('nuevoArtista');
});

router.post('/nuevoArtista', (request, response, next) => {
    console.log('POST /nuevoArtista');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    artistas.push(nuevo_dato);
    console.log(artistas)
    response.redirect('/musica');
    agregar("tops/artistas.txt", nuevo_dato )
       
});

//Para bandas
router.get('/nuevaBanda', (request, response, next) => {
    console.log('GET /nuevaBanda');
    response.render('nuevaBanda');
});

router.post('/nuevaBanda', (request, response, next) => {
    console.log('POST /nuevaBanda');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    bandas.push(nuevo_dato);
    console.log(bandas)
    response.redirect('/musica');
    agregar("tops/bandas.txt", nuevo_dato )
       
});

//Pagina principal música
router.use('/', (request, response, next) => {
    console.log('Ruta Principal');
    response.render('listaMusica', {capybaras: capybaras});
});

module.exports = router;