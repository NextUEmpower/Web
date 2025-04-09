const mongoose = require('mongoose');

const TestQuestionsSchema = new mongoose.Schema({
    test_id: mongoose.Schema.Types.ObjectId,
    question_text: String,
    options: [String],
    correct_answer: String,
    user_answer: String,
    is_correct: Boolean
}, { collection: 'test_questions' });

module.exports = mongoose.model('TestQuestions', TestQuestionsSchema);