const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#score')
const timer = document.querySelector('#timer')
const SCORE_POINTS = 1
const MAX_QUESTIONS = 4
const TIMER_DOWN = 10
const TIMER_UP = 5

var time = 40
var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []

var questions = [
    {
        question: "What is Javascript used for?",
        1: "Javascript is the language for describing the structure of Web pages. Javascript gives authors the means to: Publish online documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button.",
        2: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
        3: "Javascript is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.",
        4: "Javascript is a recipe for making coffee",
        answer: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else",
    },
    {
        question: "When was Javascript created?",
        1: "1995",
        2: "1996",
        3: "1985",
        4: "1986",
        answer: "1995",
    },
    {
        question: "Who created Javascript?",
        1: "Elon Musk",
        2: "Bill Gates",
        3: "Steve Jobs",
        4: "Brendan Eich",
        answer: "Brendan Eich",
    },
    {
        question: "Are Java and Javascript the same thing?",
        1: "Yes",
        2: "No",
        3: "Kind of",
        4: "I thought they were coffee",
        answer: "No",
    }
]



countdown_start = () => {
    time = 40;
        var gameTimer= setInterval(function(){
            time--
            timer.textContent = "Time left :" + time 

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
        choice.innerText = currentQuestion[number]

    choice.dataset.answer = currentQuestion[number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = true
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['answer']

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

var incrementScore = num => {
    score += num
    scoreText.innerText = score
}

var incrementTime = num => {
    time += num
    timer.innerText = time
} 

var decrementTime = num => {
    time -= num
    timer.innerText = time
}


startGame()

