const router = require('express').Router();
const { User, Blog_posts } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in:req.session.logged_in
  });
});

// router.get('/', async (req, res) => {
//   try {
//       const blogPostContent = await Blog_posts.findAll({
       
//     });

//     const posts = blogPostContent.map((postdata) =>
//       postdata.get({ plain: true })
      
//     );
//     res.render('homepage', posts)
//     logged_in:req.session.logged_in
//     console.log(req.session)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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
