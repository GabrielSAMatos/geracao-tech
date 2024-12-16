const UserModel = require('../model/UserModel');

class UsersController {

    listing(req, res) {
        const data = UserModel.listing()
        return res.json(data);
    };

    consultById(req, res) {
        const id = req.params.id;
        const data = UserModel.consultById(id);
        return res.json(data);
    };

    create(req, res) {
        const body = req.body;
        UserModel.create(body);
        return res.status(201).json({
            message: "User created successfully."
        });
    };

    update(req, res) {
        const id = req.params.id;
        const body = req.body;
        UserModel.update(id, body);
        return res.json({
            message: "Users updated successfully."
        });
    };

    delete(req, res) {
        const id = req.params.id;
        UserModel.delete(id);
        return res.json({
            message: "User deleted successfully."
        })
    };
};

module.exports = UsersController;