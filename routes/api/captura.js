const express = require('express');

const buscaInfoPokemon = require('../../services/busca-pokemon');
const { Pokemon } = require('../../models');

const router = express.Router();

router.post('/captura/:id', async (req, res) => {
    try{
        const pokemon = await buscaInfoPokemon(req.params.id)
        const pokemonFoiCapturado = Math.random() <= 0.4;        
        
        if (pokemonFoiCapturado) {
            const pokemonCapturado = await Pokemon.create(pokemon)

            res.json({
                capturado: true,
                id: pokemonCapturado._id, 
            });
        }else{
        res.status(500).json({ erro: e})
        }
    } catch (e){
        res.status(404).json({ erro:"Pokemon não encontrado"});
    }
})


module.exports = router;