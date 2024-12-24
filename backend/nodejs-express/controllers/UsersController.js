const UserModel = require('../model/UserModel');
const ProfileModel = require('../model/ProfileModel');

class UserController {
    async findAll(req, res) {
        //refere-se primeiro aos users e dps os profiles
        // os profiles pertencem aos users
        UserModel.hasOne(ProfileModel, {foreignKey: "user_id"});

        //refere-se primeiro aos profiles e dps os users
        ProfileModel.belongsTo(UserModel, {foreignKey: "user_id"});
        /*
        const profiles = await ProfileModel.findAll({
            include: UserModel
        });
        */

        const users = await UserModel.findAll({
            include: ProfileModel
        });

        return res.json(users);

        // let data = users.map(async user => {
        //     let profile = await ProfileModel.findOne({
        //         where: {
        //             user_id: user.id
        //         }
        //     })
        //     user.setDataValue('profile', profile)
        //     return user;
        // })
        // data = await Promise.all(data)

    }

    async create(req, res) {
        UserModel.hasOne(ProfileModel, {foreignKey: "user_id"});

        const body = req.body;
        UserModel.create(body, {include: ProfileModel});

        return res.status(201).json({
            message: "Created user."
        });
    }
};

module.exports = UserController;