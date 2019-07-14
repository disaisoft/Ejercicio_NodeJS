const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;
let estudios={
    "primaria":"Cienaga - Magdalena",
    "secundaria":"Medellin",
    "universidad" : "SENA",
    "cursos" : "Udemy, freecodecamp"
}
let acercademi="Hola, mi nombre es David Isai López. Soy desarrollador WEB Frellance";

let habilidades = {
    'css' : '75%',
    'html' : '90%',
    'js' : '50%',
    'react' : '40%',
    'c#' : '90%'
}

let experiencia = {
    '.NET' : 'Asp.net, CodeFirst, MVC',
    'Nativo' : 'CSS, HTML, JS, NODE, EXPRESS, REACT',
    'Frameworks' : 'Entity, Sass, Bootstrap, Stulus'
}

let contacto = {
    'Tel' : '3117056041',
    'Email' : 'disaisoft@gmail.com',
    'Dirección' : 'calle 37a # 88 - 15 La America',
    'Website' : 'https://disaisoft.github.io'
}



app.get('/estudios', (req, res) => res.json (estudios));
app.get('/acercademi', (req, res) => res.json (acercademi));
app.get('/experiencia', (req, res) => res.json (experiencia));
app.get('/habilidades', (req, res) => res.json (habilidades));
app.get('/contacto', (req, res) => res.json (contacto));


app.listen(PORT, () => console.log(`Escuchar el puerto ${PORT}!`));

app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
});