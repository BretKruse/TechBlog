const { User } = require("../models");

const userData = [
  {
    username: "Tim",
    password: "dog",
  },
  {
    username: "David",
    password: "coding",
  },
  {
    username: "Seth",
    password: "lego",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
