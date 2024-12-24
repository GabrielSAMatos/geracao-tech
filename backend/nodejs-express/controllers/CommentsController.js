
const CommentsModel = require('../model/CommentsModel');



class CommentsController {

    constructor(){
        CommentsModel.associate();
    }

    async findAll(req, res) {

        const data = await CommentsModel.findAll({
            include: [
                {
                    model: CommentsModel,
                    as: "children"
                },
                {
                    model: CommentsModel,
                    as: "parents"
                }
        ]
        });


        return res.json(data);
    };

    async create(req, res) {

        const body = req.body
        
        CommentsModel.create(body)

        return res.status(201).json({
            message: "Comment created successfully"
        });
    };
};

module.exports = CommentsController;