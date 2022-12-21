const {Sequelize, Model, DataTypes} = require("sequelize");

class Post extends Model {}

module.exports = function (sequelize) {
    return Post.init({
        id_post: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_time: {
            type: DataTypes.DATE,
            allowNull: false
        }, 
    }, {
        sequelize: sequelize,
        tableName: "post",
        timestamps: false
    });
}