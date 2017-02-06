// Dependency
const mongoose = require('mongoose');

// Answer Schema
const answerSchema = mongoose.Schema({
	answer_text:{
		type: String,
		required: true
	},
	aid:{
		type: String,
		required: true
	},
	count:{
		type: Number,
		required: true
	}
});

// Export Answer
const Answer = module.exports = mongoose.model('Answer', answerSchema);

// Get Answers
module.exports.getAnswers = (callback, limit) => {
	Answer.find(callback).limit(limit);
}

// Update Answer
module.exports.updateAnswer = (id, answer, options, callback) => {
	var query = {_id: id};
	var update = {
		answer_text: answer.answer_text,
		aid: answer.aid,
		count: answer.count
	}
	Answer.findOneAndUpdate(query, update, options, callback);
}
