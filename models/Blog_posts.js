const { UUIDV4 } = require('sequelize');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog_posts extends Model{}

Blog_posts.init(
    {
       id: {
           type: DataTypes.INTEGER,
           allowNull: false,           
           primaryKey: true,
           autoIncrement: true
        },
        blog_title: {
            type: DataTypes.TEXT
        },
        blog_content: {
            type: DataTypes.TEXT
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
        },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_posts'

    });

module.exports = Blog_posts;