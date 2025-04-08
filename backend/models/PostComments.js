const mongoose = require('mongoose');

const PostCommentsSchema = new mongoose.Schema({
    post_id: mongoose.Schema.Types.ObjectId,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment_text: String,
    comment_time: Date
}, { collection: 'post_comments' });

module.exports = mongoose.model('PostComments', PostCommentsSchema);