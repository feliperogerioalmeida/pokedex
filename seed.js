require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {connect, Pokemon, Usuario} = require("./models/");

const populaBancoDeDados = async () => {
    connect()

    await Pokemon.create(
        {
            id: 145 ,
            nome: 'zapdos',
            altura : 16,
            peso: 526 ,
            imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png" ,
            ataques: 'pressure, static',
            estatisticas: {
                hp: 90,
                attack: 90 ,
                defense: 85,
                'special-attack': 125,
                'special-defense': 90 ,
                speed: 100
            }
        },
        {
            id: 151,
            nome: 'mew',
            altura : 4 ,
            peso: 40 ,
            imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png' ,
            ataques: 'synchronize',
            estatisticas: {
                hp: 100,
                attack:100 ,
                defense:100 ,
                'special-attack': 100 ,
                'special-defense': 100 ,
                speed: 100
            }
        },
        {
            id:243 ,
            nome: 'raikou',
            altura :19 ,
            peso: 1780,
            imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png' ,
            ataques: 'pressure, inner-focus ',
            estatisticas: {
                hp: 90 ,
                attack:85 ,
                defense: 75,
                'special-attack': 115 ,
                'special-defense': 100 ,
                speed: 115 
            }
        },
        {
            id: 155,
            nome: 'cyndaquil',
            altura : 5 ,
            peso: 79,
            imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png' ,
            ataques: 'blaze, flash-fire ',
            estatisticas: {
                hp: 39,
                attack: 52 ,
                defense: 43 ,
                'special-attack': 60 ,
                'special-defense': 50,
                speed: 65
            }
        },
        {
            id: 144,
            nome: 'articuno',
            altura :17 ,
            peso: 554,
            imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png' ,
            ataques: 'pressure, snow-cloak ',
            estatisticas: {
                hp: 90,
                attack: 85 ,
                defense: 100,
                'special-attack':95 ,
                'special-defense': 125,
                speed: 85
            }
        },
        {
            id: 25,
            nome: "pikachu",
            altura: 4,
            peso: 60,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
            ataques: "static, lightning-rod",
            estatisticas: {
              hp: 35,
              attack: 55,
              defense: 40,
              "special-attack": 50,
              "special-defense": 50,
              speed: 90
            }
        },
        {
            id: 384,
            nome: 'rayquaza',
            altura: 70 ,
            peso: 2065,
            imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png' ,
            ataques: 'air-lock',
            estatisticas: {
                hp:105 ,
                attack:150 ,
                defense: 90,
                'special-attack':150 ,
                'special-defense': 90,
                speed: 95
            }
        },
        {
            id: 381,
            nome: 'latios',
            altura :20 ,
            peso: 600,
            imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png' ,
            ataques: 'levitate',
            estatisticas: {
                hp: 80,
                attack:90 ,
                defense: 80,
                'special-attack':130 ,
                'special-defense': 110,
                speed: 110
            }
        },
        {
            id: 382,
            nome: 'kyogre',
            altura : 45,
            peso: 3520,
            imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png' ,
            ataques: 'drizzle',
            estatisticas: {
                hp: 100,
                attack: 100,
                defense: 90,
                'special-attack':150 ,
                'special-defense': 140,
                speed: 90
            }
        },
        {
            id:244 ,
            nome: 'entei',
            altura : 21 ,
            peso: 1980,
            imagem:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png' ,
            ataques: 'pressure, inner-focus ',
            estatisticas: {
                hp: 115,
                attack: 115,
                defense: 85,
                'special-attack':90 ,
                'special-defense': 75,
                speed: 100
            }
        },
    ); 

    await Usuario.reate(
        {
            email: 'dev@teste.com.br',
            nome: 'Dev',
            senha: await bcrypt.hash('app@1234', 10),
        });

    await mongoose.disconnect();

}

populaBancoDeDados()