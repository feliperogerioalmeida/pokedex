const express = require('express');

const router = express.Router();


router.get('/', (_req, res) => {
    console.log("Respondendo ao usuario")
    res.json({
        status : 'ok',
    });
});

module.exports = router
