const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "First Comment",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Second Comment",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Third Comment",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
