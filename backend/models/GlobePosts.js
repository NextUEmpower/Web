const mongoose = require('mongoose');

const GlobePostsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    image_url: String,
    post_time: Date
}, { collection: 'globe_posts' });

module.exports = mongoose.model('GlobePosts', GlobePostsSchema);