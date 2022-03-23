const router = require('express').Router();
const session = require('express-session');
const { User, Post, Comment } = require('../../models');

router.post('/newpost', async (req,res) => {
    try {
      const newPost = await Post.create({
        blog_title: req.body.blog_title,
        blog_content: req.body.blog_content,
        user_id: req.session.user_id
      })
      res.status(200).json(newPost)
  
    } catch (err){
      res.status(400).json(err);
    }
})

module.exports = router
