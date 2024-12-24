const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const PostModel = require('./PostModel');
const TagsModel = require('../model/TagsModel');

class PostTagModel extends Model {}

PostTagModel.init(
  {  
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PostModel,
            key: 'id'
        }
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: TagsModel,
          key: 'id'
        }
    }
  },
  {
    tableName: 'post_tag',
    timestamps: false,
    sequelize: connection, 
  },
);

module.exports = PostTagModel;