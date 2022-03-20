const User = require('./User');
const Comments = require('./Comments')
const Blog_posts = require('./Blog_posts')


User.hasMany(Blog_posts, {
    foreignkey: 'userId'
})

User.hasMany(Comments, {
    foreignkey: 'userId'
})

Blog_posts.hasMany(Comments, {
    foreignkey: 'userId'
})

module.exports = { User, Blog_posts, Comments };
