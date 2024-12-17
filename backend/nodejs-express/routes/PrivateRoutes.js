const express = require('express');
const jwt = require('jsonwebtoken');
const PostRoutes = require('./PostRoutes');
const UsersRoutes = require('./UsersRoutes');
require('dotenv').config();


const PrivateRoutes = express.Router();


//MIDDLEWARE
PrivateRoutes.use((req, res, next) => {

    let auth = false;

    if(req.headers.token){
        const { token } = req.headers;

        try{
            jwt.verify(token, process.env.APP_KEY_TOKEN);
            auth = true;

        } catch(e) {
            return res.status(403).send(e);

        }

    } 
    
    if(auth == false){
        return res.status(403).send("Unauthorized");
    }

    next(); 
});


PrivateRoutes.use(PostRoutes);
PrivateRoutes.use(UsersRoutes)


module.exports = PrivateRoutes;