const express = require('express');

const router = express.Router();

//fs: filesystem
const fs = require('fs');
const readline = require('readline');

const peliculas = [];
const series = [];
const caricaturas = [];


const capybaras = [
    {nombre: "Pedro"}, 
    {nombre: "Poncho"}, 
    {nombre: "Pablo"}, 
    {nombre: "Patricio"}
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
 * Para películas
*******/
leerLinea('tops/peliculas.txt',peliculas);

/******
 * Para series
*******/
leerLinea('tops/series.txt',series);

/******
 * Para caricaturas
*******/
leerLinea('tops/caricaturas.txt',caricaturas);

/*Función para agregar Películas, series o caricaturas*/
function agregar(archivo,dato){
    fs.appendFile(archivo, dato + "\n", (err) => {
        if (err) throw err;
        console.log("Agregado correctamente!");
     });
}

//Para películas
router.get('/nuevaPeli', (request, response, next) => {
    console.log('GET /nuevaPeli');
    response.render('nuevaPeli');
});

router.post('/nuevaPeli', (request, response, next) => {
    console.log('POST /nuevaPeli');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    peliculas.push(nuevo_dato);
    console.log(peliculas)
    response.redirect('/audioVisual');
    agregar("tops/peliculas.txt", nuevo_dato )
       
});

//Para series
router.get('/nuevaSerie', (request, response, next) => {
    console.log('GET /nuevaSerie');
    response.render('nuevaSerie');
});

router.post('/nuevaSerie', (request, response, next) => {
    console.log('POST /nuevaSerie');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    series.push(nuevo_dato);
    console.log(series)
    response.redirect('/audioVisual');
    agregar("tops/series.txt", nuevo_dato )
       
});

//Para caricaturas
router.get('/nuevaCaricatura', (request, response, next) => {
    console.log('GET /nuevaSerie');
    response.render('nuevaCaricatura');
});

router.post('/nuevaCaricatura', (request, response, next) => {
    console.log('POST /nuevaCaricatura');;
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    caricaturas.push(nuevo_dato);
    console.log(caricaturas)
    response.redirect('/audioVisual');
    agregar("tops/caricaturas.txt", nuevo_dato )
       
});

router.use('/', (request, response, next) => {
    console.log('Ruta Principal');
    response.render('listaVisual', {capybaras: capybaras});
});

module.exports = router;