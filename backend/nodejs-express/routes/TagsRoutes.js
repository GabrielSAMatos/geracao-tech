const express = require('express');
let tagsController = require('../controllers/TagsController');

const TagsRoutes = express.Router();

tagsController = new tagsController();

TagsRoutes.get('/tags', tagsController.findAll);
TagsRoutes.post('/tags', tagsController.create);

module.exports = TagsRoutes;