const express = require('express');

const { Pokemon } = require( '../../models');
const { _serializers } = require('passport/lib');

const router = express.Router();

//CREATE
router.post('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.Create({            
            ...req.body,
            ...{
                capturadoPor: req.usuario._id,
            }
        });


        res.status(201).json({
            sucesso: true,
            pokemon : pokemon,
        });

    } catch (e){
        res.status(422).json({ 
            sucesso: false,
            erro : e
        });
    }

});

//READ 

    router.get('/', async(req, res)=> {
        try {
            const filtros = req.query;
            const options = {}
            
            if (filtros.nomeComecaCom) {
                options.nome = {
                    $regex : filtros.nomeComecaCom + '.*',
                }
            }

            if (filtros.pesoMinimo){
                options.peso = {
                    $gte: filtros.pesoMinimo
                }
            }

            if (filtros.alturaMinima){
                options.altura = {
                    $gte: filtros.alturaMinima
                }
            }

            options.capturadoPor = req.usuario._id;

            const pokemons = await Pokemon.find(options);

            res.status(200).json({
                sucesso: true,
                pokemons: pokemons,
            })
        }catch(e){
            res.status(500).json({
                sucesso : false,
                erro: e,
            })
        }

    });

    router.get('/:id', async(req, res)=> {
        try {
            const pokemon = await Pokemon.findOne({
                _id : req.params.id,
                capturadoPor: req.usuario._id, 
            
            })
            res.json({
                sucesso: true,
                pokemon: pokemon,
            })

        }catch(e){ 
            res.stattus(404).json({
                sucesso : false,
                erro: "Pokemon não encontrado!",
            })

        }
    })

// UPDATE

    router.patch('/:id', async(req,res) =>{
        try{
            const pokemon = await Pokemon.findOne({
                _id:req.params.id,
                capturadoPor: req.usuario._id, 
            })

            Object.keys(req.body).forEach((atributo) => {
                pokemon[atributo] = req.body[atributo];
            }) 

            await pokemon.save

            res.json({
                sucesso:true,
                pokemon:pokemon,
            })

        }catch(e){
            res.status(422).json({
                sucesso: false,
                erro : e,
            })
        }
    });

// DELETE

    router.delete('/:id', async(req,res) =>{
        try{
            const pokemon = await Pokemon.findOne({
                _id:req.params.id,
                capturadoPor: req.usuario._id, 
            })

            res.json({
                sucesso:true,
                pokemon: pokemon,
            })


        }catch(e){
            res.status(422).json({
                sucesso: false,
                erro : "Não Possui esse Pokemon em Sua Pokedex",
            })
        }
    })

module.exports = router