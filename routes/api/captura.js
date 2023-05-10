const express = require('express');

const buscaInfoPokemon = require('../../services/busca-pokemon');
const {Pokemon} = require('../../models');

const router = express.Router();

router.post('/captura/:id', (req, res) => {
    buscaInfoPokemon(req.params.id).then((pokemon) => {
        const pokemonFoiCapturado = Math.random() <= 0.4;

        if (pokemonFoiCapturado){
            pokemon.create(pokemon).then((pokemonFoiCapturado) => {
                res.json({
                    capturado: true,
                    id: pokemonFoiCapturado._id
                });
            }).catch(e => res.status(500).json({ error: e}));
        }
    }).catch( _ => res.status(404).json({ error:"Pokemon não encontrado"}));
});

module.exports = router;