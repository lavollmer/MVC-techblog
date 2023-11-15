const sequelize = require('../config/connection');
const seedUser = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedArticles = require('./article-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedComments();

  await seedArticles();

  process.exit(0);
};

seedAll();