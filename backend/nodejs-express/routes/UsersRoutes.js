const express = require('express');
const UsersController = require('../controllers/UsersController');

const UsersRoutes = express.Router();

const usersController = new UsersController();

// CRUD 

UsersRoutes.get('/users', usersController.listing);
UsersRoutes.post('/users', usersController.create);
UsersRoutes.put('/users', usersController.update);
UsersRoutes.delete('/users', usersController.delete);





module.exports = UsersRoutes;