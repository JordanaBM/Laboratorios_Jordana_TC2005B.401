//fs: filesystem
const fs = require('fs');
const readline = require('readline');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


const rutas_peliculas = require('./routes/audiovisual.routes');
const rutas_musica = require('./routes/musica.routes');

//Ruta Audios Visuales
app.use('/audioVisual', rutas_peliculas);

//Ruta Musica
app.use('/musica', rutas_musica);

//Página principal
app.use((request, response,next) => {

    let respuesta = '';//('Content-Type', 'text/html');
    respuesta = respuesta +('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta +('<!DOCTYPE html>');
    respuesta = respuesta +('<html lang="es-mx"><head>');
    respuesta = respuesta +('<meta charset="utf-8">');
    respuesta = respuesta +('<title>Lab11</title>');
    respuesta = respuesta +('</head><body>');
    respuesta = respuesta +('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta +('<div class="container-fluid">')
    respuesta = respuesta +('<a class="navbar-brand" href="/">')
    respuesta = respuesta +('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta +('TOPs')
    respuesta = respuesta +('</a>')
    respuesta = respuesta +('<span class="navbar-text">')
    respuesta = respuesta +('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta +('</span></div></nav>')
    respuesta = respuesta +(' <div class="container ">')
    respuesta = respuesta +('<h1 id="principal">Este sitio es contiene tops de Audio Visuales y Música </h1><br>');
    respuesta = respuesta +('<p>Tenemos los siguientes TOPS:</p>');
    
     respuesta = respuesta +('<br>');
     respuesta = respuesta +('<p>Audio Visuales (Películas, series y caricaturas):</p>');
     respuesta = respuesta +('<a href="/audioVisual"><button type="button" class="btn btn-outline-secondary">TOPs de Audio Visuales</button></a>');
     respuesta = respuesta +('<br><br>');
     respuesta = respuesta +('<p>Música (Artistas,Bandas):</p>');
     respuesta = respuesta +('<a href="/musica"><button type="button" class="btn btn-outline-secondary">TOPs de Música</button></a>');
     respuesta = respuesta +('<br><br>');
     respuesta = respuesta + (' </div>')
     respuesta = respuesta + ('</body>');
     
     response.send(respuesta)
     next();

});

app.use((request, response,next) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Este top no existe, lo sentimos :("); //Manda la respuesta
});

app.listen(3000);
                     