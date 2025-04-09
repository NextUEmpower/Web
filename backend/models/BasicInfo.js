const mongoose = require('mongoose');

const BasicInfoSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    phone: String,
    dob: Date,
    gender: String,
    state: String,
    city: String
}, { collection: 'basic_info' });

module.exports = mongoose.model('BasicInfo', BasicInfoSchema);