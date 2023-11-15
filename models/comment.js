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
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment_id: {
      type: DataTypes.INTEGER,
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