const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const PostModel = require('./PostModel');
const TagsModel = require('../model/TagsModel');

class PostTagModel extends Model {}

PostTagModel.init(
  {  
    user_id: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: PostModel,
            key: 'id'
        }
    },
    firstname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    picture_path: {
        type: DataTypes.STRING(255),
    },
    bio: {
        type: DataTypes.STRING(255)
    }

  },
  {
    tableName: 'profile',
    timestamps: false,
    sequelize: connection, 
  },
);

module.exports = PostTagModel;