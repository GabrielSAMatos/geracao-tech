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
        let query = req.query;
        query = query.fields.split(',');
        
        const data = await PostModel.findAll({
            attributes: query
        });
        return res.json(data);
    };

    async findById(req, res) {
        let id = req.params.id;

        let post = await PostModel.findByPk(id, {
            attributes: ["title", "slug", "content"],
            include: {
                model: UserModel,
                attributes: ["email", "is_active", "username"],
                include: {
                    model: ProfileModel,
                    attributes: ["firstname", "surname"]
                }
            }
        });
        return res.json(post);
    };

    async create(req, res) {

        const {tags, ...body} = req.body;

        let post = await PostModel.create(body, {
            include: {
                through: PostTagModel,
                model: TagsModel
            }
        });

        //post.setTags(tags);

        return res.status(201).json({
            message: "Post created successfully."
        });
    };

    async update(req, res) {
        const id = req.params.id;
        const body = req.body;

        PostModel.update(body, { where: {id} });
        return res.json({
            message: "Post changed."
        })
    };

    async delete(req, res){

        const id = req.params.id;

        await PostModel.destroy({ where: {id} });


        return res.json({
            message: "Post deleted."
        })
    }
};

module.exports = PostController;