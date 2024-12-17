const express = require('express');
const PostController = require('../controllers/PostController');

const PostRoutes = express.Router();

const postController = new PostController();

// CRUD 

PostRoutes.get('/posts', postController.listing);
PostRoutes.get('/posts/:id', postController.consultById);
PostRoutes.post('/posts', postController.create);
PostRoutes.put('/posts/:id', postController.update);
PostRoutes.delete('/posts/:id', postController.delete);





module.exports = PostRoutes;