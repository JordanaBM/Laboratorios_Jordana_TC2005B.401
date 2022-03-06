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

app.use('/audiovisual', rutas_audiovisual);
app.use('/musica', rutas_musica);

//Middleware
app.use((request, response, next) => {
    response.render('index');
    next();
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.render('lista.ejs'); //Manda la respuesta
});

app.listen(3000);