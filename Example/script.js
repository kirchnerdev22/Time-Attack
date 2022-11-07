const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('#choice-text'))
const scoreText = document.querySelector('#score')


var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []

var questions = [
    {
        question: "What is your name?",
        choice1: "Trent",
        choice2: "Trenton",
        choice3: "The one",
        choice4: "The almighty",
        answer: "Trent",
    },
    {
        question: "What is your name?",
        choice1: "Trent",
        choice2: "Trenton",
        choice3: "The one",
        choice4: "The almighty",
        answer: "Trent",
    },
    {
        question: "What is your name?",
        choice1: "Trent",
        choice2: "Trenton",
        choice3: "The one",
        choice4: "The almighty",
        answer: "Trent",
    },
    {
        question: "What is your name?",
        choice1: "Trent",
        choice2: "Trenton",
        choice3: "The one",
        choice4: "The almighty",
        answer: "Trent",
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice =>{
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        var classToApply = selectedAnswer === currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()