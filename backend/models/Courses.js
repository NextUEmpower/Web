const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({
    title: String,
    institute: String,
    duration: String,
    rating: Number
}, { collection: 'courses' });

module.exports = mongoose.model('Courses', CoursesSchema);