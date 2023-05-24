const express = require('express');
const cors = require('cors');

//configurando cors
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

// importando routes
const capturaRouter = require('./captura');
const statusRouter = require('./status');
const pokemonsRouter = require('./pokemon');
const autenticacaoRouter = require('./autenticacao');

// importando middlewares
const { checaAutenticacao } = require('./middlewares/checa-autenticacao');

const router = express.Router();

router.use(express.json());

// declarando as rotas
router.use('/captura',cors(corsOptions), checaAutenticacao, capturaRouter);
router.use('/status',cors(corsOptions), statusRouter);
router.use('/pokemons',cors(corsOptions), checaAutenticacao, pokemonsRouter);
router.use('/autenticacao',cors(corsOptions),autenticacaoRouter);

module.exports = router;