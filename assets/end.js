var username = document.getElementById('username');
const saveScoreBtn = document.querySelector ('#saveScoreBtn');
const finalScore = document.querySelector ('#finalScore');
const mostRecentScore = localStorage.getItem ('mostRecentScore');
const allScores = JSON.parse(localStorage.getItem('allScores')) || [];
const MAX_HIGH_SCORES = 4;

finalScore.innerText = mostRecentScore;

    saveScoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let playerName = username.value;
        let playerScore = {playerName, mostRecentScore};
        allScores.push(playerScore); 
        localStorage.setItem('allScores', JSON.stringify(allScores));
        window.location.assign("highscore.html");
 });

