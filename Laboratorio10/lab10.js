//fs: filesystem
const filesystem = require('fs');

const peliculas = ["Forrest Gump", "Pulp Fiction", "Back to the Future", "Matrix"];
const series = ["Breaking Bad", "Peaky Blinders", "Game of Thrones", "Vikingos"];
const caricaturas = ["Los Simpson", "Bob Esponja", "Hora de Aventura", "Phineas y Ferb"];

//Para devolver a la página principal
// function red() { 
//     location.href = "/"; 
//  }

const http = require('http');

const server = http.createServer( (request, response) => {
    
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Lab10</title>');
        response.write('</head><body>');
        response.write('<nav class="navbar navbar-dark bg-dark">')
        response.write('<div class="container-fluid">')
        response.write('<a class="navbar-brand" href="/">')
        response.write('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
        response.write(' TOPs Audiovisuales')
        response.write('</a>')
        response.write('<span class="navbar-text">')
        response.write('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)')
        response.write('</span></div></nav>')
        response.write(' <div class="container ">')
        response.write('<h1 id="principal">Este sitio es de Películas, Series y Caricaturas favoritas</h1><br>');
        response.write('<p>Tenemos los siguientes TOPS:</p>');
        //Películas
        response.write('<br><p>Películas:</p>');
        response.write('<ul class="list-group">');
        for (let i in peliculas) {
            response.write('<li class = "list-group-item list-group-item-dark">' + peliculas[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaPeli"><button type="button" class="btn btn-outline-secondary">Agregar un nueva película</button></a>');
        response.write('<br><br>');
        //Series
        response.write('<br><p>Series:</p>');
        response.write('<ul class="list-group">');
        for (let i in series) {
            response.write('<li class = "list-group-item list-group-item-dark">' + series[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaSerie"><button type="button" class="btn btn-outline-secondary">Agregar una nueva serie</button></a>');
        response.write('<br><br>');
        //Caricaturas
        response.write('<br><p>Caricaturas:</p>');
        response.write('<ul class="list-group">');
        for (let i in caricaturas) {
            response.write('<li class = "list-group-item list-group-item-dark">' + caricaturas[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaCaricatura"><button type="button" class="btn btn-outline-secondary">Agregar un nueva caricatura</button></a>');
        response.write('<br><br>');
        response.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>')
        response.write(' </div>')
        response.write('</body>');
        response.end();


    //Para ruta de Películas
} else if (request.url === '/nuevaPeli' && request.method === 'GET') {

    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    response.write('<html lang="es-mx"><head>');
    response.write('<title>Películas</title>');
    response.write('<meta charset="utf-8">');
    response.write('</head><body>');
    response.write('<nav class="navbar navbar-dark bg-dark">')
    response.write('<div class="container-fluid">')
    response.write('<a class="navbar-brand" href="/">')
    response.write('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    response.write(' TOPs Audiovisuales')
    response.write('</a>')
    response.write('<span class="navbar-text">')
    response.write('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)')
    response.write('</span></div></nav>')
    response.write(' <div class="container ">')
    response.write('<h1 id="principal">Este sitio es de películas favoritas</h1>');
    response.write('<h2>Agrega tu película favorita:</h2>');
    response.write('<br>');
    response.write('<form action="/nuevaPeli" method="POST">');
    response.write('<label for="nombre">Nombre: </label> ');
    response.write('<input type="text" id="nombre" name="nombre" placeholder="Titanic"');
    response.write('<br><br>');
    response.write('<a href="/"><input type ="submit" value="Enviar"></a>')
    response.write('</form>');
    response.write('<br><br>');
    response.write('<a href="/"><button type="button" class="btn btn-secondary">Regresar a los TOPS de la página</button></a>');
    response.write('</div>')
    response.write('</body>');
    response.end();
} else if (request.url === '/nuevaPeli' && request.method === 'POST') {  
    console.log("POST");
    const datos = [];
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });
    return request.on('end', () => {
        console.log(datos);
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        console.log(nuevo_dato);
        peliculas.push(nuevo_dato);
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Lab10</title>');
        response.write('</head><body>');
        response.write('<nav class="navbar navbar-dark bg-dark">')
        response.write('<div class="container-fluid">')
        response.write('<a class="navbar-brand" href="/">')
        response.write('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
        response.write(' TOPs Audiovisuales')
        response.write('</a>')
        response.write('<span class="navbar-text">')
        response.write('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)')
        response.write('</span></div></nav>')
        response.write(' <div class="container ">')
        response.write('<h1 id="principal">Este sitio es de Películas, Series y Caricaturas favoritas</h1><br>');
        response.write('<p>Tenemos los siguientes TOPS:</p>');
        //Películas
        response.write('<br><p>Películas:</p>');
        response.write('<ul class="list-group">');
        for (let i in peliculas) {
            response.write('<li class = "list-group-item list-group-item-dark">' + peliculas[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaPeli"><button type="button" class="btn btn-outline-secondary">Agregar un nueva película</button></a>');
        response.write('<br><br>');
        //Series
        response.write('<br><p>Series:</p>');
        response.write('<ul class="list-group">');
        for (let i in series) {
            response.write('<li class = "list-group-item list-group-item-dark">' + series[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaSerie"><button type="button" class="btn btn-outline-secondary">Agregar un serie</button></a>');
        response.write('<br><br>');
        //Ccaricaturas
        response.write('<br><p>Caricaturas:</p>');
        response.write('<ul class="list-group">');
        for (let i in caricaturas) {
            response.write('<li class = "list-group-item list-group-item-dark">' + caricaturas[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaCaricatura"><button type="button" class="btn btn-outline-secondary">Agregar un nueva caricatura</button></a>');
        response.write('<br><br>');
        response.write(' </div>')
        response.write('</body>');
        return response.end();
    });

    //Para series
} else if (request.url === '/nuevaSerie' && request.method === 'GET') {

    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    response.write('<html lang="es-mx"><head>');
    response.write('<title>Series</title>');
    response.write('<meta charset="utf-8">');
    response.write('</head><body>');
    response.write('<nav class="navbar navbar-dark bg-dark">')
    response.write('<div class="container-fluid">')
    response.write('<a class="navbar-brand" href="/">')
    response.write('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    response.write(' TOPs Audiovisuales')
    response.write('</a>')
    response.write('<span class="navbar-text">')
    response.write('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)')
    response.write('</span></div></nav>')
    response.write(' <div class="container ">')
    response.write('<h1 id="principal">Este sitio es de Series favoritas</h1>');
    response.write('<h2>Agrega tu serie favorita:</h2>');
    response.write('<br>');
    response.write('<form action="/nuevaSerie" method="POST">');
    response.write('<label for="nombre">Nombre: </label> ');
    response.write('<input type="text" id="nombre" name="nombre" placeholder="Riverdale"');
    response.write('<br><br>');
    response.write('<a href="/"><input type ="submit" value="Enviar"></a>')
    response.write('</form>');
    response.write('<br><br>');
    response.write('<a href="/"><button type="button" class="btn btn-secondary">Regresar a los TOPS de la página</button></a>');
    response.write('</div>')
    response.write('</body>');
    response.end();
} else if (request.url === '/nuevaSerie' && request.method === 'POST') {  
    console.log("POST");
    const datos = [];
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });
    return request.on('end', () => {
        console.log(datos);
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        console.log(nuevo_dato);
        series.push(nuevo_dato);
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Lab10</title>');
        response.write('</head><body>');
        response.write('<nav class="navbar navbar-dark bg-dark">')
        response.write('<div class="container-fluid">')
        response.write('<a class="navbar-brand" href="/">')
        response.write('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
        response.write(' TOPs Audiovisuales')
        response.write('</a>')
        response.write('<span class="navbar-text">')
        response.write('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)')
        response.write('</span></div></nav>')
        response.write(' <div class="container ">')
        response.write('<h1 id="principal">Este sitio es de Películas, Series y Caricaturas favoritas</h1>');
        response.write('<p>Tenemos los siguientes TOPS:</p>');
        //Películas
        response.write('<br><p>Películas:</p>');
        response.write('<ul class="list-group">');
        for (let i in peliculas) {
            response.write('<li class = "list-group-item list-group-item-dark">' + peliculas[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaPeli"><button type="button" class="btn btn-outline-secondary">Agregar un nueva película</button></a>');
        response.write('<br><br>');
        //Series
        response.write('<br><p>Series:</p>');
        response.write('<ul class="list-group">');
        for (let i in series) {
            response.write('<li class = "list-group-item list-group-item-dark">' + series[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaSerie"><button type="button" class="btn btn-outline-secondary">Agregar una nueva serie</button></a>');
        response.write('<br><br>');
        //Ccaricaturas
        response.write('<br><p>Caricaturas:</p>');
        response.write('<ul class="list-group">');
        for (let i in caricaturas) {
            response.write('<li class = "list-group-item list-group-item-dark">' + caricaturas[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaCaricatura"><button type="button" class="btn btn-outline-secondary">Agregar un nueva caricatura</button></a>');
        response.write('<br><br>');
        response.write(' </div>')
        response.write('</body>');
        return response.end();
    });

    //Para caricaturas
} else if (request.url === '/nuevaCaricatura' && request.method === 'GET') {

    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
    response.write('<html lang="es-mx"><head>');
    response.write('<title>Caricaturas</title>');
    response.write('<meta charset="utf-8">');
    response.write('</head><body>');
    response.write('<nav class="navbar navbar-dark bg-dark">')
    response.write('<div class="container-fluid">')
    response.write('<a class="navbar-brand" href="/">')
    response.write('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
    response.write(' TOPs Audiovisuales')
    response.write('</a>')
    response.write('<span class="navbar-text">')
    response.write('<b>Jordana Betancourt Menchaca A01707434</b><br>Construcción de software y toma de decisiones (Gpo 401)')
    response.write('</span></div></nav>')
    response.write(' <div class="container ">')
    response.write('<h1 id="principal">Este sitio es de Caricaturas favoritas</h1>');
    response.write('<h2>Agrega tu serie favorita:</h2>');
    response.write('<br>');
    response.write('<form action="/nuevaCaricatura" method="POST">');
    response.write('<label for="nombre">Nombre: </label> ');
    response.write('<input type="text" id="nombre" name="nombre" placeholder="Danny Phantom"');
    response.write('<br><br>');
    response.write('<a href="/"><input type ="submit" value="Enviar"></a>')
    response.write('</form>');
    response.write('<br><br>');
    response.write('<a href="/"><button type="button" class="btn btn-secondary">Regresar a los TOPS de la página</button></a>');
    response.write('</div>')
    response.write('</body>');
    response.end();
} else if (request.url === '/nuevaCaricatura' && request.method === 'POST') {  
    console.log("POST");
    const datos = [];
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });
    return request.on('end', () => {
        console.log(datos);
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        console.log(nuevo_dato);
        caricaturas.push(nuevo_dato);
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
        response.write('<html lang="es-mx"><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Lab10</title>');
        response.write('</head><body>');
        response.write('<nav class="navbar navbar-dark bg-dark">')
        response.write('<div class="container-fluid">')
        response.write('<a class="navbar-brand" href="/">')
        response.write('<img src="https://www.kindpng.com/picc/m/57-571833_peliculas-icono-png-cine-png-icon-transparent-png.png" alt="" width="40" height="40" class="d-inline-block align-text-top">')
        response.write(' TOPs Audiovisuales')
        response.write('</a></div></nav>')
        response.write(' <div class="container ">')
        response.write('<h1 id="principal">Este sitio es de Películas, Series y Caricaturas favoritas</h1><br>');
        response.write('<p>Tenemos los siguientes TOPS:</p>');
        //Películas
        response.write('<br><p>Películas:</p>');
        response.write('<ul class="list-group">');
        for (let i in peliculas) {
            response.write('<li class = "list-group-item list-group-item-dark">' + peliculas[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaPeli"><button type="button" class="btn btn-outline-secondary">Agregar un nueva película</button></a>');
        response.write('<br><br>');
        //Series
        response.write('<br><p>Series:</p>');
        response.write('<ul class="list-group">');
        for (let i in series) {
            response.write('<li class = "list-group-item list-group-item-dark">' + series[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaSerie"><button type="button" class="btn btn-outline-secondary">Agregar una nueva serie</button></a>');
        response.write('<br><br>');
        //Caricaturas
        response.write('<br><p>Caricaturas:</p>');
        response.write('<ul class="list-group">');
        for (let i in caricaturas) {
            response.write('<li class = "list-group-item list-group-item-dark">' + caricaturas[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<br>');
        response.write('<a href="/nuevaCaricatura"><button type="button" class="btn btn-outline-secondary">Agregar un nueva caricatura</button></a>');
        response.write('<br><br>');
        response.write(' </div>')
        response.write('</body>');
        return response.end();
    });

    //Para otra ruta
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">')
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Lab10| Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este top no existe, lo sentimos :(.</h1>');
        response.write('</body>');
        response.end();
    }


});

server.listen(3000);