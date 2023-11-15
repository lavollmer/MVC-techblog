const { Article } = require('../models')

const articleInformation = [
  {
    title: 'Learning about MVC',
    content: 'I am very interested in understanding more'
  },
  {
    title: 'Learning about Javascript',
    content: 'Challenging but fun'
  },
  {
    title: 'Learning about CSS',
    content: 'I love making webpages colorful and bright'
  }
]

const seedArticle = () => Article.bulkCreate(articleInformation);

module.exports = seedArticle;