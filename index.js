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
let aboutme="Hola, mi nombre es David Isai López. Soy desarrollador WEB Frellance";

let skill = {
    'css' : '75%',
    'html' : '90%',
    'js' : '60%',
    'react' : '40%',
    'c#' : '90%'
}

let experiencia = {
    '.NET' : 'Asp.net, CodeFirst, MVC',
    'Nativo' : 'CSS, HTML, JS, NODE, EXPRESS, REACT',
    'Frameworks' : 'Entity, Sass, Bootstrap, Stulus'
}

let contact = {
    'Tel' : '3117056041',
    'Email' : 'disaisoft@gmail.com',
    'Dirección' : 'calle 37a # 88 - 15 La America',
    'Website' : 'https://disaisoft.github.io'
}



app.get('/estudios', (req, res) => res.json (estudios));
app.get('/aboutme', (req, res) => res.json (aboutme));
app.get('/experiencia', (req, res) => res.json (experiencia));
app.get('/skill', (req, res) => res.json (skill));
app.get('/contact', (req, res) => res.json (contact));


app.listen(PORT, () => console.log(`Escuchar el puerto ${PORT}!`));

app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
});