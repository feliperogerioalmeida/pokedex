require('dotenv').config();

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const createError = require('http-errors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');


const {connect} = require('./models');

require('./routes/auth/')
const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const autenticacaoRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const homeRouter = require('./routes/home');

const { checaAutenticado } = require('./routes/middlewares/checa-autenticacao');

const app = express();

// configurando leitura de corpo
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//configurando autenticação (passport)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());


// configurando ejs
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// configurando arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// declarando rotas
app.use('/pokemons', checaAutenticado, pokemonsRouter);
app.use('/batalha', checaAutenticado, batalhaRouter);
app.use('/auth', autenticacaoRouter);
app.use('/', checaAutenticado, homeRouter);


// declarando rotas api
app.use('/api', apiRouter);

// caso não de match em nenhuma, tratamos o 404
app.use((_req, _res, next) => {
    next(createError(404));
})

// tratativa de erro genérica
app.use((err , _req, res, _next) => {
    res.status(err.status || 500);
    res.render('paginas/erro', {
        mensagem: err.message,
        erro : err,
    });
});


const porta = 3000;
app.listen(3000, () => {
    connect();

    console.log(`Servidor ouvindo na porta: ${porta}`)
});