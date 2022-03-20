const { UUIDV4 } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog_posts extends Model{}

Blog_posts.init(
    {
       id: {
           type: DataTypes.UUID,
           allowNull: false,
           defaultValue: UUIDV4,
           primaryKey: true
        },
        blog_title: {
            type: DataTypes.TEXT
        },
        blog_content: {
            type: DataTypes.TEXT
        },
        },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_posts'

    });

module.exports = Blog_posts;