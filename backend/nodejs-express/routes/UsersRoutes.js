const express = require('express');
let usersController = require('../controllers/UsersController');
const UsersRoutes = express.Router();


usersController = new usersController();

// CRUD 

UsersRoutes.get('/users', usersController.findAll);
// UsersRoutes.get('/users/:id', usersController.consultById);
UsersRoutes.post('/users', usersController.create);
// UsersRoutes.put('/users/:id', usersController.update);
// UsersRoutes.delete('/users/:id', usersController.delete);


module.exports = UsersRoutes;