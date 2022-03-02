const express = require('express');

const router = express.Router();

//fs: filesystem
const fs = require('fs');
const readline = require('readline');

const artistas = [];
const bandas = [];

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
    respuesta = respuesta +('<!DOCTYPE html>');
    respuesta = respuesta +('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta +('<html lang="es-mx"><head>');
    respuesta = respuesta +('<title>Artistas</title>');
    respuesta = respuesta +('<meta charset="utf-8">');
    respuesta = respuesta +('</head><body>');
    respuesta = respuesta +('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta +('<div class="container-fluid">')
    respuesta = respuesta +('<a class="navbar-brand" href="/musica">')
    respuesta = respuesta +('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta +(' TOPs Música')
    respuesta = respuesta +('</a>')
    respuesta = respuesta +('<span class="navbar-text">')
    respuesta = respuesta +('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta +('</span></div></nav>')
    respuesta = respuesta +(' <div class="container ">')
    respuesta = respuesta +('<h1 id="principal">Este sitio es de Aristas favoritos</h1>');
    respuesta = respuesta +('<h2>Agrega tu artista favorito:</h2>');
    respuesta = respuesta +('<br>');
    respuesta = respuesta +('<form action="/musica/nuevoArtista" method="POST">');
    respuesta = respuesta +('<label for="nombre">Nombre: </label> ');
    respuesta = respuesta +('<input type="text" id="nombre" name="nombre" placeholder="Justin Bieber"');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta +('<a><input type ="submit" value="Enviar"></a>')
    respuesta = respuesta +('</form>');
    respuesta = respuesta +('<br><br>');
    respuesta = respuesta +('<a href="/musica"><button type="button" class="btn btn-secondary">Regresar a los TOPS de la página</button></a>');
    respuesta = respuesta +('</div>')
    respuesta = respuesta +('</body>');
    response.send(respuesta); 
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
    let respuesta = ''
    respuesta = respuesta + ('<!DOCTYPE html>');
    respuesta = respuesta + ('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta + ('<html lang="es-mx"><head>');
    respuesta = respuesta + ('<title>Bandas</title>');
    respuesta = respuesta + ('<meta charset="utf-8">');
    respuesta = respuesta + ('</head><body>');
    respuesta = respuesta + ('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta + ('<div class="container-fluid">')
    respuesta = respuesta + ('<a class="navbar-brand" href="/">')
    respuesta = respuesta + ('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta + (' TOPs Música')
    respuesta = respuesta + ('</a>')
    respuesta = respuesta + ('<span class="navbar-text">')
    respuesta = respuesta + ('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta + ('</span></div></nav>')
    respuesta = respuesta + (' <div class="container ">')
    respuesta = respuesta + ('<h1 id="principal">Este sitio es de Bandas favoritas</h1>');
    respuesta = respuesta + ('<h2>Agrega tu banda favorita:</h2>');
    respuesta = respuesta + ('<br>');
    respuesta = respuesta + ('<form action="/musica/nuevaBanda" method="POST">');
    respuesta = respuesta + ('<label for="nombre">Nombre: </label> ');
    respuesta = respuesta + ('<input type="text" id="nombre" name="nombre" placeholder="AC/DC"');
    respuesta = respuesta + ('<br><br>');
    respuesta = respuesta + ('<a href="/musica"><input type ="submit" value="Enviar"></a>')
    respuesta = respuesta + ('</form>');
    respuesta = respuesta + ('<br><br>');
    respuesta = respuesta + ('<a href="/musica"><button type="button" class="btn btn-secondary">Regresar a los TOPS de la página</button></a>');
    respuesta = respuesta + ('</div>')
    respuesta = respuesta + ('</body>');
    response.send(respuesta); 
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
    let respuesta = '';//('Content-Type', 'text/html');
    respuesta = respuesta +('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    respuesta = respuesta +('<!DOCTYPE html>');
    respuesta = respuesta +('<html lang="es-mx"><head>');
    respuesta = respuesta +('<meta charset="utf-8">');
    respuesta = respuesta +('<title>TOPs Música</title>');
    respuesta = respuesta +('</head><body>');
    respuesta = respuesta +('<nav class="navbar navbar-dark bg-dark">')
    respuesta = respuesta +('<div class="container-fluid">')
    respuesta = respuesta +('<a class="navbar-brand" href="/">')
    respuesta = respuesta +('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    respuesta = respuesta +('TOPs Música')
    respuesta = respuesta +('</a>')
    respuesta = respuesta +('<span class="navbar-text">')
    respuesta = respuesta +('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)<br>Lab11')
    respuesta = respuesta +('</span></div></nav>')
    respuesta = respuesta +(' <div class="container ">')
    respuesta = respuesta +('<h1 id="principal">Este sitio es de Artistas y Bandas favoritas </h1><br>');
    respuesta = respuesta +('<p>Tenemos los siguientes TOPS:</p>');
    
    //Artistas
     respuesta = respuesta +('<br><p>Artistas:</p>');
     respuesta = respuesta +('<ul class="list-group">');
    for (let i in artistas) {
        respuesta = respuesta +('<li class = "list-group-item list-group-item-dark">' + artistas[i] + '</li>');
    }
    console.log(artistas)
     respuesta = respuesta + ('</ul>');
     respuesta = respuesta + ('<br>');
     respuesta = respuesta + ('<a href="musica/nuevoArtista"><button type="button" class="btn btn-outline-secondary">Agregar un nuevo Artista</button></a>');
     respuesta = respuesta + ('<br><br>');
    
     //Bandas
     respuesta = respuesta + ('<br><p>Bandas:</p>');
     respuesta = respuesta + ('<ul class="list-group">');
    for (let i in bandas) {
        respuesta = respuesta +('<li class = "list-group-item list-group-item-dark">' + bandas[i] + '</li>');
    }
     respuesta = respuesta +('</ul>');
     respuesta = respuesta +('<br>');
     respuesta = respuesta +('<a href="musica/nuevaBanda"><button type="button" class="btn btn-outline-secondary">Agregar una nueva Banda</button></a>');
     respuesta = respuesta +('<br><br>');

     response.send(respuesta);
});

module.exports = router;