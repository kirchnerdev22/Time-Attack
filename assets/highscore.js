const highScores = JSON.parse(localStorage.getItem('allScores')) || [];
const leaderBoard = document.querySelector('#highScoresList');

function appendToPage(){
    if (highScores.length) {
        highScores.sort((a,b) => Number(b.mostRecentScore) - Number(a.mostRecentScore));
        for (let i = 0; i < 4; i++) {
            if (highScores[i]){
                var newScore = document.createElement('li');
                leaderBoard.appendChild(newScore);
                newScore.textContent = `Name: ${highScores[i].playerName} | Score: ${highScores[i].mostRecentScore}`;       
            }
        }
    } else {
        leaderBoard.textContent = "No Scores";
    }
}

appendToPage()
