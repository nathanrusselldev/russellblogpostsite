const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req,res) => {

    try {
      const newComment = await Comment.create({
        comment_body: req.body.comment_body,
        postId: req.body.postId,
        userId: req.session.user_id
      })

      res.status(200).json(newComment)
      console.log(newComment)
    } catch (err){
      res.status(400).json(err);
    }  
})

module.exports = router