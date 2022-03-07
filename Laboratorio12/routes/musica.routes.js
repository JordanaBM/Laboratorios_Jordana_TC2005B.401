const express = require('express');
const path = require('path');

const router = express.Router();

//fs: filesystem
const fs = require('fs');
const readline = require('readline');

var artistas = [];
var bandas = [];

//Para leer los artistas
fs.readFile('./tops/artistas.json', (err, data) => {
    if (err) throw err;
    artistas = JSON.parse(data);
    console.log(artistas)
   
});

//Para leer las series
fs.readFile('./tops/bandas.json', (err, data) => {
    if (err) throw err;
    bandas = JSON.parse(data);
    console.log(bandas);
   
});



//Para artistas
router.get('/nuevoArtista', (request, response, next) => {
    console.log('GET /nuevoArtista');
    response.render('nuevoArtista');
});

router.post('/nuevoArtista', (request, response, next) => {
    console.log('POST /nuevoArtista');;
    console.log(request.body);
    artistas.push(request.body);
    let artista = JSON.stringify(artistas);
    fs.writeFileSync('./tops/artistas.json', artista, 'utf8');
    response.redirect('/musica');
   
       
});

//Para bandas
router.get('/nuevaBanda', (request, response, next) => {
    console.log('GET /nuevaBanda');
    response.render('nuevaBanda');
});

router.post('/nuevaBanda', (request, response, next) => {
    console.log('POST /nuevaBanda');;
    console.log(request.body);
    bandas.push(request.body);
    let banda= JSON.stringify(bandas);
    fs.writeFileSync('./tops/bandas.json', banda, 'utf8');
    response.redirect('/musica');
       
});

//Pagina principal música
router.use('/', (request, response, next) => {
    console.log('Ruta Principal');
    response.render('listaMusica', {artistas: artistas, bandas: bandas});
});

module.exports = router;