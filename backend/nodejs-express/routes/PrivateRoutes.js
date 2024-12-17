const express = require('express');
const PostRoutes = require('./PostRoutes');
const UsersRoutes = require('./UsersRoutes');


const PrivateRoutes = express.Router();


//MIDDLEWARE
PrivateRoutes.use((req, res, next) => {
    
    console.log(req.headers.token);

    if(req.headers.token != '123'){
        return res.status(403).send("Unauthorized");
    } 

    next(); 
});


PrivateRoutes.use(PostRoutes);
PrivateRoutes.use(UsersRoutes)


module.exports = PrivateRoutes;