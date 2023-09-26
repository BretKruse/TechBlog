const { Post } = require("../models");

const postData = [
  {
    title: "NFL season has started! Who's your favorite team?",
    content:
      "The 2023 season is about start and it starts with The Kansas City Chiefs vs the Detroit Lions. Who do you think will win?",
    user_id: 1,
  },
  {
    title: "iPhone 15 has beem released! What do you think about it?",
    content:
      "The iPhone 15 has been released and it has a 10k display. It also has a 1000 megapixel camera. What do you think about it?",
    user_id: 2,
  },
  {
    title:
      "Chrome will now let you opt out of controversial new user tracking system",
    content:
      "Google is giving Chrome users an opt-out to the controversial new user tracking technology it’s planning to add to the browser next year. The company is adding a flag to Chrome Canary and Dev that lets you disable the feature, known as Federated Learning of Cohorts (FLoC).",
    user_id: 2,
  },
  {
    title: "Flying cars are here! What do you think about it?",
    content:
      "The flying taxis are being produced by a company called Kitty Hawk. They are being tested in New Zealand. What do you think about it?",
    user_id: 5,
  },
  {
    title:
      "Microsoft is shutting down its Azure Blockchain Service on September 10th",
    content:
      "Microsoft is shutting down its Azure Blockchain Service on September 10th, 2021, according to a blog post from the company. The service was one of the earliest blockchain products from a major cloud provider, but it never received much traction and will now be shut down less than three years after its launch.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
