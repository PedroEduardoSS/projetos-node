const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/example/:name/:age', (req, res)=>{
    res.send(req.params.name + ":" + req.params.age);
});

app.listen(3000, ()=>console.log('server is running'));