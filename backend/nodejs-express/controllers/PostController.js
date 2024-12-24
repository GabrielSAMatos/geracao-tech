const PostModel = require('../model/PostModel');
const UserModel = require('../model/UserModel');
const ProfileModel = require('../model/ProfileModel');
const PostTagModel = require('../model/PostTagModel');
const TagsModel = require('../model/TagsModel');

class PostController {

    async findAll(req, res) {
        PostModel.belongsTo(UserModel, {foreignKey: "user_id"});
        PostModel.belongsToMany(TagsModel, {
            through: PostTagModel,
            foreignKey: 'post_id',
            otherKey: 'tag_id'
        });
        UserModel.hasOne(ProfileModel, {foreignKey: "user_id"});
        const data = await PostModel.findAll({
            include: [
                {
                    model: UserModel,
                    include: ProfileModel
                },
                {
                    model: TagsModel
                }
        ]
        });
        return res.json(data);
    };

    async create(req, res) {

        PostModel.belongsToMany(TagsModel, {
            through: PostTagModel,
            foreignKey: 'post_id',
            otherKey: 'tag_id'
        });



        const {tags, ...body} = req.body;

        let post = await PostModel.create(body, {
            include: {
                through: PostTagModel,
                model: TagsModel
            }
        });

        post.setTags(tags);

        return res.status(201).json({
            message: "Post created successfully."
        });
    };
};

module.exports = PostController;