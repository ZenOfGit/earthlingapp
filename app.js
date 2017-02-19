// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Express
var app = express();
app.use(express.static(__dirname+'/client'));

// Middleware
app.use(bodyParser.json());

// Include question and answer object files
var Question = require('./models/question');
var Answer = require('./models/answer');

// Connect to mongoose
mongoose.connect('mongodb://questionman:D0ct0rBucci1313@ds157559.mlab.com:57559/heroku_zzt2lfq9');
var db = mongoose.connection;

// Home route
app.get('/', (req, res) => {
    res.send('Please navigate to /api/questions or /api/answers');
});

// Get Question Route
app.get('/api/questions', (req, res) => {
    Question.getQuestions((err, questions) => {
        if(err){
            throw err;
        }
        res.json(questions);
    });
});

// Get Answer Route
app.get('/api/answers', (req, res) => {
    Answer.getAnswers((err, answers) => {
        if(err){
            throw err;
        }
        res.json(answers);
    });
});

// Update Answer Route
app.put('/api/answers/:_id', (req, res) => {
    var id = req.params._id;
    var answer = req.body;
    Answer.updateAnswer(id, answer, {}, (err, answers) => {
        if(err){
            throw err;
        }
        res.json(answer);
    });
});

// Server
app.listen(3000);
console.log('Running on port 3000');