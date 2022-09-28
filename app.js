// Importamos express
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
// Almacenamos en constante
const app = express();
const port = process.env.PORT;


// Handlebars, lo usamos para renderizar las vistas en el backend
// por defecto las busca en views ;)
app.set('view engine', 'hbs');
// La siguiente linea corresponde a la carpeta partials que evita código html duplicado
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estático con un middlewear
app.use(express.static('public'));




// Esta función es el CONTROLADOR
app.get('/', (req, res) => {
    //renderizar la vista de handlebars
    res.render('home', {
        nombre: 'Víctor Tena',
        titulo: 'Aprendiendo Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Víctor Tena',
        titulo: 'Aprendiendo Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Víctor Tena',
        titulo: 'Aprendiendo Node'
    });
});

app.get('/*', (req, res) => {
    // dirname es la ruta donde est ejecutándose nuestra app
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});