const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_user: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  sequelize,
  timestamps: true,
  underscore: true,
  modelName: 'Comment'
}
);

module.exports = Comment;