const router = require('express').Router();
const { User, Blog_posts } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const allPosts = await Blog_posts.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log(allPosts)
    const posts = allPosts.map((posts) => posts.get({plain: true}));

    res.render('homepage',  {
      posts,
      logged_in:req.session.logged_in
    });

  } catch(err){
    console.log(err);
    res.status(500).json(err)
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

router.get('/register', (req, res) => {
  // If a session exists, redirect the request to the homepage
  try {
    res.render('register')
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
