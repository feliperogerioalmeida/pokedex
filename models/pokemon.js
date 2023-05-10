const {Schema} = require('mongoose');

const Pokemon = new Schema({
    id:{
        type: Number,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
    altura:{
        type: Number,
        required: true,
        min:0,
    },
    peso:{
        type: Number,
        required: true,
        min:0
    },
    imagem:{
        type: String,
        required: true,
        validate:{
            validator: (valor) =>{

                return valor && valor.startsWith("http");
            },
            message: () => "a imagem deve ser uma url absoluta"
        }
    },
    ataques:{
        type: String,
        required: true,
    },
    estatisticas:{
        type: Object,
        required: true,
    },
    jogos:{
        type: Object,
        required: true,
    }

});

module.exports = Pokemon;