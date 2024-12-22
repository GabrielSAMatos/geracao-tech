const PostModel = require('../model/PostModel');
const UserModel = require('../model/UserModel');
const ProfileModel = require('../model/ProfileModel');

class PostController {

    async findAll(req, res) {
        PostModel.belongsTo(UserModel, {foreignKey: "user_id"});
        UserModel.hasOne(ProfileModel, {foreignKey: "user_id"});
        const data = await PostModel.findAll({
            include: {
                model: UserModel,
                include: ProfileModel
            }
        });
        return res.json(data);
    };

    create(req, res) {
        const body = req.body;
        PostModel.create(body);
        return res.status(201).json({
            message: "Post created successfully."
        });
    };
};

module.exports = PostController;