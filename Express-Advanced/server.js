const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const path = require('path')
//const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
//Rotas
app.get('/', (req, res)=>{
    res.send('Rota principal')
});

app.get('/posts', (req, res)=>{
    res.send('Página de posts')
});

app.use('/admin', admin);


const PORT = 8089
app.listen(PORT, () => {
    console.log("Server is running...");
});