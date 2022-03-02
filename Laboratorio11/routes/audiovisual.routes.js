const express = require('express');

const router = express.Router();

//fs: filesystem
const fs = require('fs');
const readline = require('readline');

const peliculas = [];
const series = [];
const caricaturas = [];

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
    let respuesta = ''
    respuesta = respuesta +('<!DOCTYPE html>');
    respuesta = respuesta +('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta +('<html lang="es-mx"><head>');
    respuesta = respuesta +('<title>Películas</title>');
    respuesta = respuesta +('<meta charset="utf-8">');
    respuesta = respuesta +('</head><body>');
    respuesta = respuesta +('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta +('<div class="container-fluid">')
    respuesta = respuesta +('<a class="navbar-brand" href="/audioVisual">')
    respuesta = respuesta +('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta +(' TOPs Audiovisuales')
    respuesta = respuesta +('</a>')
    respuesta = respuesta +('<span class="navbar-text">')
    respuesta = respuesta +('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta +('</span></div></nav>')
    respuesta = respuesta +(' <div class="container ">')
    respuesta = respuesta +('<h1 id="principal">Este sitio es de películas favoritas</h1>');
    respuesta = respuesta +('<h2>Agrega tu película favorita:</h2>');
    respuesta = respuesta +('<br>');
    respuesta = respuesta +('<form action="/audioVisual/nuevaPeli" method="POST">');
    respuesta = respuesta +('<label for="nombre">Nombre: </label> ');
    respuesta = respuesta +('<input type="text" id="nombre" name="nombre" placeholder="Titanic"');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta +('<a><input type ="submit" value="Enviar"></a>')
    respuesta = respuesta +('</form>');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta +('<a href="/audioVisual"><button type="button" class="btn btn-secondary">Regresar a los TOPS de la página</button></a>');
    respuesta = respuesta +('</div>')
    respuesta = respuesta +('</body>');
    response.send(respuesta); 
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
    let respuesta = ''
    respuesta = respuesta + ('<!DOCTYPE html>');
    respuesta = respuesta + ('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta + ('<html lang="es-mx"><head>');
    respuesta = respuesta + ('<title>Caricaturas</title>');
    respuesta = respuesta + ('<meta charset="utf-8">');
    respuesta = respuesta + ('</head><body>');
    respuesta = respuesta + ('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta + ('<div class="container-fluid">')
    respuesta = respuesta + ('<a class="navbar-brand" href="/">')
    respuesta = respuesta + ('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta + (' TOPs Audiovisuales')
    respuesta = respuesta + ('</a>')
    respuesta = respuesta + ('<span class="navbar-text">')
    respuesta = respuesta + ('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta + ('</span></div></nav>')
    respuesta = respuesta + (' <div class="container ">')
    respuesta = respuesta + ('<h1 id="principal">Este sitio es de Series favoritas</h1>');
    respuesta = respuesta + ('<h2>Agrega tu serie favorita:</h2>');
    respuesta = respuesta + ('<br>');
    respuesta = respuesta + ('<form action="/audioVisual/nuevaSerie" method="POST">');
    respuesta = respuesta + ('<label for="nombre">Nombre: </label> ');
    respuesta = respuesta + ('<input type="text" id="nombre" name="nombre" placeholder="Drake y Josh"');
    respuesta = respuesta + ('<br><br>');
    respuesta = respuesta + ('<a href="/audioVisual"><input type ="submit" value="Enviar"></a>')
    respuesta = respuesta + ('</form>');
    respuesta = respuesta + ('<br><br>');
    respuesta = respuesta + ('<a href="/audioVisual"><button type="button" class="btn btn-secondary">Regresar a los TOPS de la página</button></a>');
    respuesta = respuesta + ('</div>')
    respuesta = respuesta + ('</body>');
    response.send(respuesta); 
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
//Para series
router.get('/nuevaCaricatura', (request, response, next) => {
    console.log('GET /nuevaSerie');
    let respuesta = ''
    respuesta = respuesta + ('<!DOCTYPE html>');
    respuesta = respuesta + ('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta + ('<html lang="es-mx"><head>');
    respuesta = respuesta + ('<title>Caricaturas</title>');
    respuesta = respuesta + ('<meta charset="utf-8">');
    respuesta = respuesta + ('</head><body>');
    respuesta = respuesta + ('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta + ('<div class="container-fluid">')
    respuesta = respuesta + ('<a class="navbar-brand" href="/audioVisual">')
    respuesta = respuesta + ('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta + (' TOPs Audiovisuales')
    respuesta = respuesta + ('</a>')
    respuesta = respuesta + ('<span class="navbar-text">')
    respuesta = respuesta + ('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta + ('</span></div></nav>')
    respuesta = respuesta + (' <div class="container ">')
    respuesta = respuesta + ('<h1 id="principal">Este sitio es de Series favoritas</h1>');
    respuesta = respuesta + ('<h2>Agrega tu serie favorita:</h2>');
    respuesta = respuesta + ('<br>');
    respuesta = respuesta + ('<form action="/audioVisual/nuevaCaricatura" method="POST">');
    respuesta = respuesta + ('<label for="nombre">Nombre: </label> ');
    respuesta = respuesta + ('<input type="text" id="nombre" name="nombre" placeholder="Danny Phantom"');
    respuesta = respuesta + ('<br><br>');
    respuesta = respuesta + ('<a href="/audioVisual"><input type ="submit" value="Enviar"></a>')
    respuesta = respuesta + ('</form>');
    respuesta = respuesta + ('<br><br>');
    respuesta = respuesta + ('<a href="/audioVisual"><button type="button" class="btn btn-secondary">Regresar a los TOPS de la página</button></a>');
    respuesta = respuesta + ('</div>')
    respuesta = respuesta + ('</body>');
    response.send(respuesta); 
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
    let respuesta = '';//('Content-Type', 'text/html');
    respuesta = respuesta +('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta +('<!DOCTYPE html>');
    respuesta = respuesta +('<html lang="es-mx"><head>');
    respuesta = respuesta +('<meta charset="utf-8">');
    respuesta = respuesta +('<title>Lab10</title>');
    respuesta = respuesta +('</head><body>');
    respuesta = respuesta +('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta +('<div class="container-fluid">')
    respuesta = respuesta +('<a class="navbar-brand" href="/">')
    respuesta = respuesta +('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta +('TOPs Audiovisuales')
    respuesta = respuesta +('</a>')
    respuesta = respuesta +('<span class="navbar-text">')
    respuesta = respuesta +('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta +('</span></div></nav>')
    respuesta = respuesta +(' <div class="container ">')
    respuesta = respuesta +('<h1 id="principal">Este sitio es de Películas, Series y Caricaturas favoritas</h1><br>');
    respuesta = respuesta +('<p>Tenemos los siguientes TOPS:</p>');
    
    //Películas
     respuesta = respuesta +('<br><p>Películas:</p>');
     respuesta = respuesta +('<ul class="list-group">');
    for (let i in peliculas) {
        respuesta = respuesta +('<li class = "list-group-item list-group-item-dark">' + peliculas[i] + '</li>');
    }
    console.log(peliculas)
     respuesta = respuesta + ('</ul>');
     respuesta = respuesta + ('<br>');
     respuesta = respuesta + ('<a href="audioVisual/nuevaPeli"><button type="button" class="btn btn-outline-secondary">Agregar un nueva película</button></a>');
     respuesta = respuesta + ('<br><br>');
    
     //Series
     respuesta = respuesta + ('<br><p>Series:</p>');
     respuesta = respuesta + ('<ul class="list-group">');
    for (let i in series) {
        respuesta = respuesta +('<li class = "list-group-item list-group-item-dark">' + series[i] + '</li>');
    }
     respuesta = respuesta +('</ul>');
     respuesta = respuesta +('<br>');
     respuesta = respuesta +('<a href="audioVisual/nuevaSerie"><button type="button" class="btn btn-outline-secondary">Agregar una nueva serie</button></a>');
     respuesta = respuesta +('<br><br>');
    
     //Caricaturas
     respuesta = respuesta +('<br><p>Caricaturas:</p>');
     respuesta = respuesta +('<ul class="list-group">');
    for (let i in caricaturas) {
        respuesta = respuesta +('<li class = "list-group-item list-group-item-dark">' + caricaturas[i] + '</li>');
    }
     respuesta = respuesta + ('</ul>');
     respuesta = respuesta + ('<br>');
     respuesta = respuesta + ('<a href="audioVisual/nuevaCaricatura"><button type="button" class="btn btn-outline-secondary">Agregar un nueva caricatura</button></a>');
     respuesta = respuesta + ('<br><br>');
     respuesta = respuesta + ('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>')
     respuesta = respuesta + (' </div>')
     respuesta = respuesta + ('</body>');
     response.send(respuesta);
});

module.exports = router;