const { response } = require('express');
const UserModel = require('../model/UserModel');

class UsersController {

    listing(req, res) {
        const data = UserModel.listing()
        return res.json(data);
    };

    consultById(req, res) {
        return UserModel.consultById();
    };

    create(req, res) {
        const body = req.body;
        UserModel.create(body);
        return res.status(200).json({
            message: "User created successfully."
        });
    };

    update(req, res) {
        return UserModel.update();
    };

    delete(req, res) {
        UserModel.delete();
        return res.status(200).json({
            message: "User deleted successfully."
        })
    };
};

module.exports = UsersController;