const passport = require('passport');
const crypto = require('crypto');
const GitHubStrategy = require('passport-github2').Strategy;

const {Usuario} = require('../../models/');

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_REDIRECT_URI,
    scope: ['profile', 'email'],
    state: true,

}, async (_accessToken, _refreshToken, perfil, done) => {
    let usuario;

    let usuarioEmail = perfil.emails?.[0]?.value || 'semEmail@github.com';
        
    try{
        usuario = await Usuario.findOneAndUpdate({email: usuarioEmail}, {
            githubUsuarioId: perfil.id
        });

        if (!usuario){
            usuario = await Usuario.create({
                email: usuarioEmail,
                githubUsuarioID: perfil.id,
                nome: perfil.displayName,
                senha: (await crypto.randomBytes(48)).toString('hex'),
            })
        }
        
        done(null, usuario);

    }catch  (err) {
        done(err, null);
    }

}));
