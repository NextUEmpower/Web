const mongoose = require('mongoose');

const MentorsSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    rate: Number,
    learner_count: Number
}, { collection: 'mentors' });

module.exports = mongoose.model('Mentors', MentorsSchema);