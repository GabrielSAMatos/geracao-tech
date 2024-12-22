const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const UserModel = require('./UserModel')

class Profile extends Model {}

Profile.init(
  {  
    user_id: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: UserModel,
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

module.exports = Profile;