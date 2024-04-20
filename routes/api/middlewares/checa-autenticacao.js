const jwt = require('jsonwebtoken');

const { Usuario } = require('../../../models');

const checaAutenticacao = async (req, res , next) => {
    try {
        // req.headers.authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldkB0ZXN0ZS5jb20uYnIifQ.wUZdd7UIACPdjEr6o09qasBvQpUTMGGGg-3vJ_W4uBg"
        const jwtUsuario = req.headers.authorization.replace('Bearer ', '');
        const email = (await jwt.verify(jwtUsuario, process.env.SEGREDO_JWT)).email;
    
        const usuario = await Usuario.findOne({email: email})
    
        if (!usuario) {
            throw 'Usuario não encontrado'
        }

        req.usuario = usuario;
    
        next();

    } catch (e) {
        res.status(401).json({
            sucesso : false,
            erro : 'Faça login para acessar essa rota'

        })
    }
};

module.exports = {
    checaAutenticacao,
}