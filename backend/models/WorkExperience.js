const mongoose = require('mongoose');

const WorkExperienceSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    job_title: String,
    company: String,
    years_of_experience: Number,
    salary: Number
}, { collection: 'work_experience' });

module.exports = mongoose.model('WorkExperience', WorkExperienceSchema);