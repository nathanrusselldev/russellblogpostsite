const router = require('express').Router();
const { User, Blog_posts } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
      const blogPostContent = await Blog_posts.findAll({
       
    });

    const posts = blogPostContent.map((postdata) =>
      postdata.get({ plain: true })
      
    );
    console.log
    res.render('homepage', posts)

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  try {
    res.render('login')
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
