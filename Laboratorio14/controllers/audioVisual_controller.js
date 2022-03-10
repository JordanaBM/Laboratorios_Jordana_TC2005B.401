const path = require('path');
const Peliculas = require('../models/audioVisual/peliculas');
const Series = require('../models/audioVisual/series');
const Caricaturas = require('../models/audioVisual/caricaturas');

exports.get_nueva_peli = (request, response, next) => {
    console.log('GET /audioVisual/nuevaPeli');
    response.render('nuevaPeli' , {
        username: request.session.username ? request.session.username : ''
    }); 
};

exports.post_nueva_peli = (request, response, next) => {
    console.log('POST /audioVisual/nuevaPeli');
    console.log(request.body);
    let peli = new Peliculas(request.body.nombre);
    peli.save();
    response.setHeader('Set-Cookie', 'ultima_pelicula='+peli.nombre+'; HttpOnly', 'utf8');
    response.redirect('/audioVisual');
};

exports.get_nueva_serie = (request, response, next) => {
    console.log('GET /audioVisual/nuevaSerie');
    response.render('nuevaSerie',{
        username: request.session.username ? request.session.username : ''
    }); 
};

exports.post_nueva_serie = (request, response, next) => {
    console.log('POST /audioVisual/nuevaSerie');
    console.log(request.body);
    let serie = new Series(request.body.nombre);
    serie.save();
    response.setHeader('Set-Cookie', 'ultima_serie='+serie.nombre+'; HttpOnly','utf8');
    response.redirect('/audioVisual');
};


exports.get_nueva_caricatura = (request, response, next) => {
    console.log('GET /audioVisual/nuevaCaricatura');
    response.render('nuevaCaricatura',{
        username: request.session.username ? request.session.username : ''
    }); 
};

exports.post_nueva_caricatura = (request, response, next) => {
    console.log('POST /audioVisual/nuevaCaricatura');
    console.log(request.body);
    let cari = new Caricaturas(request.body.nombre);
    cari.save();
    response.setHeader('Set-Cookie', 'ultima_caricatura='+cari.nombre+'; HttpOnly');
    response.redirect('/audioVisual');
};

exports.principal = (request, response, next) => {
    console.log('Ruta principal');
    response.render('listaVisual', {peliculas: Peliculas.fetchAllPeliculas(), 
        series:Series.fetchAllSeries(),
        caricaturas:Caricaturas.fetchAllCaricaturas(),
        username: request.session.username ? request.session.username : '',
        ultima_pelicula: request.cookies.ultima_pelicula ? request.cookies.ultima_pelicula : '',
        ultima_serie: request.cookies.ultima_serie ? request.cookies.ultima_serie : '',
        ultima_caricatura: request.cookies.ultima_caricatura ? request.cookies.ultima_caricatura : ''
    })
}

