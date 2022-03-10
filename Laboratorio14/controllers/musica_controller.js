const path = require('path');
const Artistas = require('../models/musica/artistas');
const Bandas = require('../models/musica/bandas');


exports.get_nuevo_artista = (request, response, next) => {
    console.log('GET /musica/nuevoArtista');
    response.render('nuevoArtista',{ 
        username: request.session.username ? request.session.username : ''});
};

exports.post_nuevo_artista = (request, response, next) => {
    console.log('POST /musica/nuevoArtista');
    console.log(request.body);
    let artista = new Artistas(request.body.nombre);
    artista.save();
    response.setHeader('Set-Cookie', 'ultimo_artista='+artista.nombre+'; HttpOnly', 'utf8');
    response.redirect('/musica');
};

exports.get_nueva_banda = (request, response, next) => {
    console.log('GET /musica/nuevaBanda');
    response.render('nuevaBanda', {
        username: request.session.username ? request.session.username : ''
    });
};

exports.post_nueva_banda = (request, response, next) => {
    console.log('POST /musica/nuevaBanda');
    console.log(request.body);
    let banda = new Bandas(request.body.nombre);
    banda.save();
    response.setHeader('Set-Cookie', 'ultima_banda='+banda.nombre+'; HttpOnly', 'utf8');
    response.redirect('/musica');
};


exports.principal = (request, response, next) => {
    console.log('Ruta principal Música');
    response.render('listaMusica', {artistas: Artistas.fetchAllArtistas(),
        bandas : Bandas.fetchAllBandas(),
        username: request.session.username ? request.session.username : '',
        ultimo_artista: request.cookies. ultimo_artista ? request.cookies. ultimo_artista : '',
        ultima_banda: request.cookies.ultima_banda ? request.cookies.ultima_banda : '',
    })
}