const express = require('express');
const CommentsController = require('../controllers/CommentsController');
const CommentsRoutes = express.Router();


const commentsController = new CommentsController();


CommentsRoutes.get('/comments', commentsController.findAll);
CommentsRoutes.post('/comments', commentsController.create);


module.exports = CommentsRoutes;