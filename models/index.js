const User = require('./User');
const Comments = require('./Comments')
const Blog_posts = require('./Blog_posts')


User.hasMany(Blog_posts, {
    foreignkey: 'user_id'
})

User.hasMany(Comments, {
    foreignkey: 'user_id'
})

Blog_posts.hasOne(User, {
    foreignKey: 'user_id'
})

Blog_posts.hasMany(Comments, {
    foreignkey: 'user_id'
})



module.exports = { User, Blog_posts, Comments };
