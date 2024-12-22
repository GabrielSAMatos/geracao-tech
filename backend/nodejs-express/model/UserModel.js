const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class User extends Model {}

User.init(
  {  
    is_active: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
  },
  {
    tableName: 'users',
    sequelize: connection, 
  },
);

module.exports = User;