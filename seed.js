require('dotenv').config();

const mongoose = require('mongoose');

const {connect, Pokemon} = require("./models/");

const populaBancoDeDados = async () => {
    connect()

    await Pokemon.create({
        id: 7,
        nome: 'squirtle',
        altura : 5,
        peso: 90,
        imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' ,
        ataques: 'torrent, rain-dish',
        estatisticas: {
            hp: 44,
            attack: 48,
            defense: 65,
            'special-attack': 50,
            'special-defense': 64,
            speed: 43
        }
    }); 

    await mongoose.disconnect();

}

populaBancoDeDados()