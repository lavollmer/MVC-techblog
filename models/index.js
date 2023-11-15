const User = require('./user');
const Article = require('./article');
const Comment = require('./comment')

//user has many articles, but article has one user
User.hasMany(Article, {
  foreignKey: 'user.id',
});

Article.belongsTo(User, {
  foreignKey: 'user.id'
});

//user has many comments, but a made comment has one user
User.hasMany(Comment, {
  foreignKey: 'user.id',
});

Comment.belongsTo(User, {
  foreignKey: 'user.id'
});


module.exports = { User, Article, Comment };