const mongoose = require('mongoose');

const CollegesSchema = new mongoose.Schema({
    name: String,
    location: String,
    ranking: Number,
    courses_offered: [String]
}, { collection: 'colleges' });

module.exports = mongoose.model('Colleges', CollegesSchema);