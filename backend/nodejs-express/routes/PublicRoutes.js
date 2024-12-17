const express = require('express');
const AuthController = require('../controllers/AuthController');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const PublicRoutes = express.Router();

PublicRoutes.post('/login', (req, res) => {
    const body = req.body;
    const auth = new AuthController();
    const data = auth.login(body.login, body.password);

    if(data) {
        const token = jwt.sign(data, process.env.APP_KEY_TOKEN)
        return res.json({
            token: token
        });
    };

    return res.json({
        message: "Login or password incorrect."
    });

});


module.exports = PublicRoutes;