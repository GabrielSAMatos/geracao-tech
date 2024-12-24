const PostModel = require('../model/PostModel');
const UserModel = require('../model/UserModel');
const ProfileModel = require('../model/ProfileModel');
const TagsModel = require('../model/TagsModel');
const PostTagModel = require('../model/PostTagModel');

class PostController {

    constructor(){
        UserModel.associate({ProfileModel});

        PostModel.associate({
            TagsModel,
            PostTagModel,
            UserModel
        });
    };

    async findAll(req, res) {
        
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