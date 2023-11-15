const { Comment } = require('../models')

const commentInformation = [
  {
    comment_user: 'Wow, I love my dog'
  },
  {
    comment_user: 'That is so cool'
  },
  {
    comment_user: 'Interesting article'
  }
]

const seedComment = () => Comment.bulkCreate(commentInformation);

module.exports = seedComment;