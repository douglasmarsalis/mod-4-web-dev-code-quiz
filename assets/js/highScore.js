
var scoresBtn = document.querySelector("#view-high-scores");
var score = document.querySelector("#score");
// Rank previous scores in order by retrieving scores from localStorage
printHighscores()

function printHighscores() {
  score.innerHTML = `
            <br />
            <h1>Top Score</h1>
            <br />
            <p>
            The player with the highest time was 
            </p>
            <br />
            <font color="blue">${localStorage.getItem("name")} with a score of ${localStorage.getItem("time")}</font>.`
}
//     var highscores = JSON.parse(window.localStorage.getItem("high-score-list")) || [];
//     highscores.sort(function(a, b) {
//       return b.score - a.score;
//     });
//     highscores.forEach(function(score) {
//       var liTag = document.createElement("li");
//       liTag.textContent = score.name + " - " + score.score;
//       var olElement = document.getElementById("high-score-list");
//       olElement.appendChild(liTag);
//     });
// }

// Clear previous scores when users click clear 
  // function clearHighscores() {
  //   window.localStorage.removeItem("high-score-list");
  //   window.location.reload();
  // } 
  // document.getElementById("clear").onclick = clearHighscores;
  
printHighscores();
