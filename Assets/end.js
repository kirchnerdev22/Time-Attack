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

    saveScoreBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let recentName = username.value
        let allName = []
        allName.push(recentName)
        console.log(allName)
        localStorage.setItem('allName', allName)

 })

 localStorage.setItem('allScores', allScores)

indow.location.assign('highscore.html')
//}



