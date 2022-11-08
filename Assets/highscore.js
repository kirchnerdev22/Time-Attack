const highScores = localStorage.getItem('allScores')
const Usernames = localStorage.getItem('allName')
const leaderBoard = document.querySelector('#highScoresList')

console.log(highScores)
console.log(Usernames)

let highScoresList = []

highScoresList.push(Usernames, highScores)

console.log(highScoresList)

function newItem(){
    var newScore = document.createElement('li')
    leaderBoard.appendChild(newScore)
    leaderBoard.lastChild.textContent = highScoresList 
    console.log(newScore)       
}

newItem()

console.log(newItem)