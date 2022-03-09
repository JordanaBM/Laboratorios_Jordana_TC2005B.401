const path = require('path');
const Peliculas = require('../models/audioVisual/peliculas');
const Series = require('../models/audioVisual/series');
const Caricaturas = require('../models/audioVisual/caricaturas');

exports.get_nueva_peli = (request, response, next) => {
    console.log('GET /audioVisual/nuevaPeli');
    response.render('nuevaPeli' , {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.post_nueva_peli = (request, response, next) => {
    console.log('POST /audioVisual/nuevaPeli');
    console.log(request.body);
    let peli = new Peliculas(request.body.nombre);
    peli.save();
    //response.setHeader('Set-Cookie', 'ultima_pelicula='+peli.nombre+'; HttpOnly');
    response.redirect('/audioVisual');
};

exports.get_nueva_serie = (request, response, next) => {
    console.log('GET /audioVisual/nuevaSerie');
    response.render('nuevaSerie');
};

exports.post_nueva_serie = (request, response, next) => {
    console.log('POST /audioVisual/nuevaSerie');
    console.log(request.body);
    let serie = new Series(request.body.nombre);
    serie.save();
    response.redirect('/audioVisual');
};


exports.get_nueva_caricatura = (request, response, next) => {
    console.log('GET /audioVisual/nuevaCaricatura');
    response.render('nuevaCaricatura');
};

exports.post_nueva_caricatura = (request, response, next) => {
    console.log('POST /audioVisual/nuevaCaricatura');
    console.log(request.body);
    let cari = new Caricaturas(request.body.nombre);
    cari.save();
    response.redirect('/audioVisual');
};

exports.principal = (request, response, next) => {
    console.log('Ruta principal');
    response.render('listaVisual', {peliculas: Peliculas.fetchAllPeliculas(), 
        series:Series.fetchAllSeries(),
        caricaturas:Caricaturas.fetchAllCaricaturas(),
        username: request.session.username ? request.session.username : '',})
}

