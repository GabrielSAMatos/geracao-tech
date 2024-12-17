const UserModel = require("../model/UserModel");

class AuthController {
    login(login, password) {
        const data = UserModel.authenticate(login, password);
        return data;
    }
};

module.exports = AuthController;