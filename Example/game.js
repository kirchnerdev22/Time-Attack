const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#score')
const timer = document.querySelector('#timer')
var time = 40

var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []

var questions = [
    {
        question: "What is Javascript used for?",
        choice1: "Javascript is the language for describing the structure of Web pages. Javascript gives authors the means to: Publish online documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button.",
        choice2: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
        choice3: "Javascript is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.",
        choice4: "Javascript is a recipe for making coffee",
        answer: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
    },
    {
        question: "When was Javascript created?",
        choice1: "1995",
        choice2: "1996",
        choice3: "1985",
        choice4: "1986",
        answer: "1995",
    },
    {
        question: "Who created Javascript?",
        choice1: "Elon Musk",
        choice2: "Bill Gates",
        choice3: "Steve Jobs",
        choice4: "Brendan Eich",
        answer: "Brendan Eich",
    },
    {
        question: "Are Java and Javascript the same thing?",
        choice1: "Yes",
        choice2: "No",
        choice3: "Kind of",
        choice4: "I thought they were coffee",
        answer: "No",
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4
const TIMER_DOWN = 10
const TIMER_UP = 5

countdown_start = () => {
    time = 40
        var gameTimer= setInterval(function() {
            time--
            timer.textContent = "time" + time 

            if (time <= 0) {
                clearInterval(gameTimer)
                return window.location.assign("end.html")
            }
        }, 1000)
}

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    countdown_start()
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
            incrementTime(TIMER_UP)
        }

        if(classToApply === 'incorrect') {
            decrementTime(TIMER_DOWN)
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

incrementTime = num => {
    time += num
    timer.innerText = time
} 

decrementTime = num => {
    time -= num
    timer.innerText = time
}


startGame()