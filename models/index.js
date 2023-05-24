const mongoose = require('mongoose');

const PokemonSchema = require('./pokemon');
const UsuarioSchema = require('./usuario');

const Pokemon = mongoose.model('Pokemon',PokemonSchema);
const Usuario = mongoose.model('Usuario',UsuarioSchema);


const connect = () => {
    mongoose.connect(process.env.MONGO_URL)
};

module.exports = {
    Pokemon,
    Usuario,
    connect,
}

