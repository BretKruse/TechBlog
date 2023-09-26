const { User } = require("../models");

const userData = [
  {
    username: "BretKruse",
    email: "krusebret@gmail.com",
    password: "admin987",
  },
  {
    username: "ChrisGriffin",
    email: "Cgriffin@outlook.com",
    password: "SethGreen",
  },
  {
    username: "StewieGriffin",
    email: "SteweG@gmail.com",
    password: "VictoryIsMine",
  },
  {
    username: "PeterGriffin",
    email: "PeteGrif@yahoo.com",
    password: "PawtucketPatriot",
  },
  {
    username: "BrianGriffin",
    email: "Dog@gmail.com",
    password: "martini",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
