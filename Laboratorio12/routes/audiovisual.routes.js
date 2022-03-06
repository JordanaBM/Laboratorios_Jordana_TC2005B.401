const express = require('express');

const router = express.Router();

//fs: filesystem
const fs = require('fs');

var peliculas = [];
var series = [];
var caricaturas = [];

//Para leer las películas
fs.readFile('./tops/peliculas.json', (err, data) => {
    if (err) throw err;
    peliculas = JSON.parse(data);
    console.log(peliculas)
   
});

//Para leer las series
fs.readFile('./tops/series.json', (err, data) => {
    if (err) throw err;
    series = JSON.parse(data);
    console.log(series);
   
});

//Para leer las caricaturas
fs.readFile('./tops/caricaturas.json', (err, data) => {
    if (err) throw err;
    caricaturas = JSON.parse(data);
    console.log(caricaturas);
});



//Para películas
router.get('/nuevaPeli', (request, response, next) => {
    console.log('GET /nuevaPeli');
    response.render('nuevaPeli');
});

router.post('/nuevaPeli', (request, response, next) => {
    console.log('POST /nuevaPeli');;
    console.log(request.body);
    peliculas.push(request.body);
    // let peli = JSON.stringify(request.body)
    // fs.writeFileSync('./tops/peliculas.json', peli, 'utf8');
    response.redirect('/audioVisual');
    
       
});

//Para series
router.get('/nuevaSerie', (request, response, next) => {
    console.log('GET /nuevaSerie');
    response.render('nuevaSerie');
});

router.post('/nuevaSerie', (request, response, next) => {
    console.log('POST /nuevaSerie');;
    console.log(request.body);
    series.push(request.body);
    // let peli = JSON.stringify(request.body)
    // fs.writeFileSync('./tops/peliculas.json', peli, 'utf8');
    response.redirect('/audioVisual');
       
});

//Para caricaturas
router.get('/nuevaCaricatura', (request, response, next) => {
    console.log('GET /nuevaSerie');
    response.render('nuevaCaricatura');
});

router.post('/nuevaCaricatura', (request, response, next) => {
    console.log('POST /nuevaCaricatura');;
    console.log(request.body);
    caricaturas.push(request.body);
    // let peli = JSON.stringify(request.body)
    // fs.writeFileSync('./tops/peliculas.json', peli, 'utf8');
    response.redirect('/audioVisual');
       
});

router.use('/', (request, response, next) => {
    console.log('Ruta Principal');
    response.render('listaVisual', {peliculas: peliculas, series:series, caricaturas:caricaturas})
});

module.exports = router;