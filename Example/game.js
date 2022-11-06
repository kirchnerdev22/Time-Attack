const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('#choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');


var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []

var questions = [
    {
        question "What is your name?"
        choice1: "Trent"
        choice2: "Trenton"
        choice3: "The one"
    }
]