const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// We also need to make the reverse association
// Post can belong to one user, but not many users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };