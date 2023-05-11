const mongoose = require('mongoose');

const PokemonSchema = require('./pokemon');

const Pokemon = mongoose.model('Pokemon',PokemonSchema);

const connect = () => {
    mongoose.connect(process.env.MONGO_URL)
};

module.exports = {
    Pokemon,
    connect,
}

