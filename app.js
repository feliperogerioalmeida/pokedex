const express = require('express');
const {connect} = require('./models');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');


const app = express();

// configurando ejs
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// configurando arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// declarando rotas
app.use('/pokemons',pokemonsRouter);
app.use('/batalha', batalhaRouter);

const porta = 3000;
app.listen(3000, () => {
    connect();

    console.log(`Servidor ouvindo na porta: ${porta}`)
});