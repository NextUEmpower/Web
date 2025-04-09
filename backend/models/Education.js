const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    highest_education: String,
    field_of_study: String,
    institute: String,
    year_of_completion: Number,
    aggregate_score: Number
}, { collection: 'education' });

module.exports = mongoose.model('Education', EducationSchema);