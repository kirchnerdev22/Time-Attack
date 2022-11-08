var username = document.getElementById('username')
const saveScoreBtn = document.querySelector ('#saveScoreBtn')
const finalScore = document.querySelector ('#finalScore')
const mostRecentScore = localStorage.getItem ('mostRecentScore')
const MAX_HIGH_SCORES = 4

// let allName = []
let allScores = []
// let recentName = username.value

finalScore.innerText = mostRecentScore
allScores.push(mostRecentScore)
console.log(allScores)
    saveScoreBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let recentName = username.value
        let allName = []
        allName.push(recentName)
        console.log(allName)
        localStorage.setItem('allName', allName)

 })

 localStorage.setItem('allScores', allScores)

 console.log(localStorage.getItem('allName'))

 console.log(localStorage.getItem('allScores'))



// allName.push(recentName)
// saveHighScore = e => {
//    e.preventDefault()
//    highScores = {
//        score: mostRecentScore,
//        name: username.value
//    }
//    localStorage.setItem(score)
//    highScores.push(score)
//    highScores.sort((a,b) => {
//        return b.score - a.score
//   })
//   highScores.splice(4)
//  localStorage.setItem('highScores', JSON.stringify(highScores))
//    window.location.assign('highscore.html')
//}



