const { User } = require('../models');

const userInformation = [
  {
    name: 'Rita',
    email: 'ritalita@gmail.com',
    password: 'ritalitapassword'
  },
  {
    name: 'Johnny',
    email: 'johnnybee@gmail.com',
    password: 'johnnybeepassword'
  },
  {
    name: 'Margaret',
    email: 'margaret@gmail.com',
    password: 'margaretpassword'
  },
];

const seedUser = () => User.bulkCreate(userInformation, { individualHooks: true });

module.exports = seedUser;