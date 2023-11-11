const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Article extends Model { }

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    article_user: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  sequelize,
  timestamps: true,
  underscore: true,
  modelName: 'Article'
}
);

module.exports = Article;