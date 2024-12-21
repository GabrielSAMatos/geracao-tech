const TagsModel = require('../model/TagsModel');

class TagsController {
    async findAll(req, res) {
        let data = await TagsModel.findAll();
        
        return res.json(data);
    }

    async create(req, res) {
        let body = req.body;
        await TagsModel.create(body);
        res.status(201).json({
            message: "Created tag."
        });
    }
};

module.exports = TagsController;