const mongoose = require('mongoose');

const VideoSuggestionsSchema = new mongoose.Schema({
    title: String,
    description: String,
    views: Number
}, { collection: 'video_suggestions' });

module.exports = mongoose.model('VideoSuggestions', VideoSuggestionsSchema);