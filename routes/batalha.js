const express = require('express');

const buscaInfoPokemon = require('../services/busca-pokemon');

const router = express.Router();

router.get('/', (_req, res) => {
    const pokemmoonIdRandomico = Math.round(Math.random() * 904 + 1)
    
    buscaInfoPokemon(pokemmoonIdRandomico).then(pokemon => {
        res.render('paginas/batalha/index', {
            pokemon,
        });
    })  
});

module.exports = router;