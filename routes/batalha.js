const express = require('express');

const buscaInfoPokemon = require('../services/busca-pokemon');

const jwt = require('jsonwebtoken')

const router = express.Router();

router.get('/', async (req, res) => {
    const pokemmoonIdRandomico = Math.round(Math.random() * 904 + 1)
    
    const pokemon = await buscaInfoPokemon(pokemmoonIdRandomico)
    
    const token = jwt.sign({email: req.user.email}, process.env.SEGREDO_JWT)

    res.render('paginas/batalha/index', {
        pokemon,
        token,
    });

});

module.exports = router;