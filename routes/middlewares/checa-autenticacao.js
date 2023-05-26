const checaAutenticado = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    } else {
        return res.redirect('/auth')
    }
}

const checaNaoAutenticado = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next()
    } else {
        return res.redirect('/')
    }
}

module.exports = {
    checaAutenticado,
    checaNaoAutenticado,
}