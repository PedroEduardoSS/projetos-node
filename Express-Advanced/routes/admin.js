const express = require('express');
const router = express.Router();
const path = require('path');

router.route('/')
    .get('/', (req, res) => {
        res.render('admin/index');
    });

router.route('/posts')
    .get((req, res) => {
        res.send('página de posts');
    });

router.route('/categorias')
    .get((req, res) => {
        res.send("Página de categorias")
    })

module.exports = router;