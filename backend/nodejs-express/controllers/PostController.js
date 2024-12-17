const PostModel = require('../model/PostModel');

class PostController {

    listing(req, res) {
        const data = PostModel.listing()
        return res.json(data);
    };

    consultById(req, res) {
        const id = req.params.id;
        const data = PostModel.consultById(id);
        return res.json(data);
    };

    create(req, res) {
        const body = req.body;
        PostModel.create(body);
        return res.status(201).json({
            message: "User created successfully."
        });
    };

    update(req, res) {
        const id = req.params.id;
        const body = req.body;
        PostModel.update(id, body);
        return res.json({
            message: "Users updated successfully."
        });
    };

    delete(req, res) {
        const id = req.params.id;
        PostModel.delete(id);
        return res.json({
            message: "User deleted successfully."
        })
    };
};

module.exports = PostController;