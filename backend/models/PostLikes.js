const mongoose = require('mongoose');

const PostLikesSchema = new mongoose.Schema({
    post_id: mongoose.Schema.Types.ObjectId,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    liked_time: Date
}, { collection: 'post_likes' });

module.exports = mongoose.model('PostLikes', PostLikesSchema);