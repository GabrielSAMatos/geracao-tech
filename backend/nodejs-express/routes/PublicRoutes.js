const express = require('express');
const AuthController = require('../controllers/AuthController')

const PublicRoutes = express.Router();

PublicRoutes.post('/login', (req, res) => {
    const body = req.body;
    const auth = new AuthController();
    const data = auth.login(body.login, body.password);

    if(data) {
        return res.json({
            token: data
        });
    };

    return res.json({
        message: "Login or password incorrect."
    });

});


module.exports = PublicRoutes;