const express = require('express');
const UsersController = require('../controllers/UsersController');

const UsersRoutes = express.Router();

const usersController = new UsersController();

// CRUD 

UsersRoutes.get('/users', usersController.listing);
UsersRoutes.get('/users/:id', usersController.consultById);
UsersRoutes.post('/users', usersController.create);
UsersRoutes.put('/users/:id', usersController.update);
UsersRoutes.delete('/users/:id', usersController.delete);





module.exports = UsersRoutes;