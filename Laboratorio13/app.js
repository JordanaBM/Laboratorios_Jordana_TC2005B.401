const express = require('express');
const bodyParser = require('body-parser');

const rutas_audiovisual = require('./routes/audiovisual.routes');
const rutas_musica = require('./routes/musica.routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//Para audio visuales
app.use('/audioVisual', rutas_audiovisual);
//Para música
app.use('/musica', rutas_musica);

//Middleware página principal
app.use((request, response, next) => {
    response.render('index');
    next();
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.render('Aquí no hay nada'); //Manda la respuesta
});

app.listen(3000);