const { Schema } = require('mongoose')

const Usuario = new Schema({
    nome: {
        type : String,
        required: true,
        min : 4,
    },
    email: {
        type : String,
        required: true,
        min : 4,
        unique : true,
        validate: {
            validator : (v) => {
                return v.match('@');
            },
            message : props => `${props.value} não é um email valido!`
        }
    },
    senha: {
        type : String,
        required: true,
    },
    googleUsuarioID:{
        type : String,
        required: false,
    },
    githubUsuarioID:{
        type : String,
        required: false,
    },

})

Usuario.index({email : 1})

module.exports = Usuario