const express = require('express');
const TagsRoutes = express.Router();
let tagsController = require('../controllers/TagsController');


tagsController = new tagsController();

TagsRoutes.get('/tags', tagsController.findAll);
TagsRoutes.post('/tags', tagsController.create);

module.exports = TagsRoutes;