const express = require('express');
const app = express();
const {filtrarProfessores, encontrarProfessor} = require('./controladores/professores')

//localhost:3000/
app.get('/', (req, res)=>{
    res.send('Pedro Bauer');
});

//localhost:3000/professores
app.get('/professores', filtrarProfessores)

//localhost:3000/professores/:id
app.get('/professores/:id', encontrarProfessor);

app.listen(3000);