const path = require('path');
const Peliculas = require('../models/audioVisual/peliculas');
const Series = require('../models/audioVisual/series');
const Caricaturas = require('../models/audioVisual/caricaturas');

const peliculas = [];
const series = [];
const caricaturas = [];

exports.get_nueva_peli = (request, response, next) => {
    Peliculas.fetchAllPeliculas()
        .then(([rows, fieldData]) => {
            response.render('nuevaPeli', {
                peliculas: rows,
                username: request.session.username ? request.session.username : '',
            })
        })
        .catch(err => console.log(err));
}
   

exports.post_nueva_peli = (request, response, next) => {    
    const peli = new Peliculas(request.body.nombre, request.body.sinopsis,request.body.imagen);
    peli.save().then(() => {
        response.setHeader('Set-Cookie', 'ultima_pelicula='+peli.nombre+'; HttpOnly', 'utf8');
        response.redirect('/audioVisual');
    }).catch(err => console.log(err));
    
};

exports.get_nueva_serie = (request, response, next) => {
    Series.fetchAllSeries()
    .then(([rows, fieldData]) => {
        response.render('nuevaSerie', {
            series: rows,
            username: request.session.username ? request.session.username : '',
        })
    })
    .catch(err => console.log(err));
}

exports.post_nueva_serie = (request, response, next) => {
    console.log('POST /audioVisual/nuevaSerie');
    const serie = new Series(request.body.nombre, request.body.sinopsis,request.body.imagen);
    serie.save().then(() => {
        response.setHeader('Set-Cookie', 'ultima_pelicula='+serie.nombre+'; HttpOnly', 'utf8');
        response.redirect('/audioVisual');
    }).catch(err => console.log(err));
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
    Peliculas.fetchAllPeliculas()
    .then(([rows, fieldData]) => {
        response.render('listaVisual', {
            peliculas: rows,
            series:Caricaturas.fetchAllCaricaturas(),
            caricaturas:Caricaturas.fetchAllCaricaturas(),
            username: request.session.username ? request.session.username : '',
            ultima_pelicula: request.cookies.ultima_pelicula ? request.cookies.ultima_pelicula : '',
            ultima_serie: request.cookies.ultima_serie ? request.cookies.ultima_serie : '',
            ultima_caricatura: request.cookies.ultima_caricatura ? request.cookies.ultima_caricatura : ''
        })
    })
    .catch(err => console.log(err)); 
  
        
}


