const express = require('express');

const buscaInfoPokemon = require('../services/busca-pokemon');

const router = express.Router();

router.get('/', async (_req, res) => {
    const pokemmoonIdRandomico = Math.round(Math.random() * 904 + 1)
    
    const pokemon = await buscaInfoPokemon(pokemmoonIdRandomico)
    
    res.render('paginas/batalha/index', {
        pokemon,
    });

});

module.exports = router;