const User = require('./user');
const Article = require('./article');
const Comment = require('./comment')

//user has many articles, but article has one user
User.hasMany(Article, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Article.belongsTo(User, {
  foreignKey: 'user_id'
});

//user has many comments, but a made comment has one user
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = User, Article, Comment;