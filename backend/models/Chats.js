const mongoose = require('mongoose');

const ChatsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    mentor_id: mongoose.Schema.Types.ObjectId,
    message_text: String,
    sent_at: Date
}, { collection: 'chats' });

module.exports = mongoose.model('Chats', ChatsSchema);