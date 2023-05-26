const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const { Usuario } = require('../../models');


passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (nomeDeUsuario, senha, done) => {
    try {
        const usuario = await Usuario.findOne({ email: nomeDeUsuario })
    
        const aSenhaEstaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!usuario){
            return done(null, false);
        }

        if (aSenhaEstaCorreta){
            return done(null, usuario);
        }else{
            return done(null,false);
        }

    } catch (e) {
        done(err, false)
    }
}))

// salva na sessão o usuario
passport.serializeUser((usuario,done)=>{
    done(null, usuario._id);
})

// recuperando da sessão o usuario
passport.deserializeUser(async (id, done) => {
    let err, usuario
    try {
        usuario = await Usuario.findById(id);
    } catch (err) {
        console.log('err', err)
        err = err

    }

    done (err,usuario)
})