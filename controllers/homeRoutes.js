const router = require('express').Router();
const { User, Post, Comment, } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment
        }],
    });
    const posts = allPosts.map((posts) => posts.get({plain: true}));
    // res.status(200).json(posts)
    res.render('homepage', {
      posts,
      logged_in:req.session.logged_in
    });

  } catch(err){
    console.log(err);
    res.status(500).json(err)
  }
});

router.get('/post/:id', async (req,res) => {
  try {
      const postData = await Post.findByPk(req.params.id, {
          include: [
              {
                  model: User,
                  attributes: ['name'],
              },
              {
                  model: Comment,
              },
          ],
      });
      const renderData = postData.get({ plain:true });
      // res.status(200).json(post)
      res.render('post', {
          renderData,
          logged_in: req.session.logged_in,
      });
    
  } catch (err) {
      console.log(err);
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

router.get('/register', (req, res) => {
  // If a session exists, redirect the request to the homepage
  try {
    res.render('register')
  }catch (err) {
    res.status(500).json(err);
  }
});

router.get('/createpost', (req,res) => {
  try{
    res.render('createpost', {
      logged_in:req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
