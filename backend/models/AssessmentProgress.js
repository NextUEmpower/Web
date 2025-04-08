const mongoose = require('mongoose');

const AssessmentProgressSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    test_name: String,
    score: Number,
    date_taken: Date
}, { collection: 'assessment_progress' });

module.exports = mongoose.model('AssessmentProgress', AssessmentProgressSchema);