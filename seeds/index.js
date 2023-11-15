const sequelize = require('../config/connection');
const seedUser = require('./user-seeds');
const seedComment = require('./comment-seeds');
const seedArticle = require('./article-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedComment();

  await seedArticle();

  process.exit(0);
};

seedAll();