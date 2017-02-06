// Dependency
const mongoose = require('mongoose');

// Question Schema
const questionSchema = mongoose.Schema({
	question_text:{
		type: String,
		required: true
	}
});

// Export Question
const Question = module.exports = mongoose.model('Question', questionSchema);

// Get Questions
module.exports.getQuestions = (callback, limit) => {
	Question.find(callback).limit(limit);
}

// Get Question by Id - cunnently usused
//module.exports.getQuestionById = (id, callback) => {
//	Question.findById(id, callback);
//}

