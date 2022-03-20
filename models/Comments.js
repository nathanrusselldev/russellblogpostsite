const { UUIDV4 } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comments extends Model{}

Comments.init(
    {
       id: {
           type: DataTypes.UUID,
           allowNull: false,
           defaultValue: UUIDV4,
           primaryKey: true,
        },
        comment_body: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    });

module.exports = Comments;