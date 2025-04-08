const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
    title: String,
    company: String,
    duration: String,
    rating: Number
}, { collection: 'career' });

module.exports = mongoose.model('Career', CareerSchema);