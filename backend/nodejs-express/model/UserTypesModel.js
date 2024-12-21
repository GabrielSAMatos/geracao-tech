const connection = require('../config/connection');
const { DataTypes } = require("sequelize");

const UserTypeModel = connection.define(
    "UserTypeModel",
    {
        type: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    },
    {
        tableName: "user_types"
    }
);

connection.sync({alter: true});

module.exports = UserTypeModel;