const sequelize = require('../config/connection');
const { User, Blog_posts } = require('../models');

const userData = require('./userData.json');
const blogPosts = require('./blogPosts.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Blog_posts.bulkCreate(blogPosts)

  process.exit(0);

};

seedDatabase();
