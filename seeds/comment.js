const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "OMG!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "First!",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text: "I don't agree with this.",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Neat.",
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: "Agreed.",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "don't care.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "You can have an opinion.",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "Can I know more?",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
