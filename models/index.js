const mongoose = require('mongoose');

const PokemonSchema = require('./pokemon');

const Pokemon = mongoose.model('Pokemon',PokemonSchema);

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/pokedex')
};

module.exports = {
    Pokemon,
    connect,
}

