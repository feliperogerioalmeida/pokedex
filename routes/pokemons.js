const express = require('express');

const {Pokemon} = require('../models/');

const router = express.Router();

router.get('/', async (_req,res) => {
    const pokemons = await Pokemon.find();
    pokemons.forEach(pokemon =>{
        const dataISO = pokemon._id.getTimestamp().toISOString();
        const dataInfo = dataISO.split('T')[0];
        const dataEmPedacos = dataInfo.split('-');

        pokemon.capturadoEm = `${dataEmPedacos[2]} ${dataEmPedacos[1]} ${dataEmPedacos[0]}`;
    });

    res.render('paginas/pokemons/index', {
        pokemons,
    });
});

router.get('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({_id: req.params.id});

        res.render('paginas/pokemons/show', {
            pokemon,
            message: req.query.message,
        });
    
    }catch (e){
        res.status(404).render('paginas/erro', {
            mensagem: "Pokemon não encontrado",
            erro: {}
        })
    }
})

module.exports = router;