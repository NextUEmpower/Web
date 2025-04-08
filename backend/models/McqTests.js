const mongoose = require('mongoose');

const McqTestsSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    test_name: String,
    total_questions: Number,
    score: Number,
    date_taken: Date
}, { collection: 'mcq_tests' });

module.exports = mongoose.model('McqTests', McqTestsSchema);