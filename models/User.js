const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_user: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  sequelize,
  timestamps: true,
  underscore: true,
  modelName: 'User'
}
);

module.exports = User;