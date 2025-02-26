document.addEventListener("DOMContentLoaded", function() {
    const matches = [
        { team1: "Team A", score1: 2, team2: "Team B", score2: 1 },
        { team1: "Team C", score1: 0, team2: "Team D", score2: 3 }
    ];
    let scoresHtml = "";
    matches.forEach(match => {
        scoresHtml += `<div class='card'><h3>${match.team1} ${match.score1} - ${match.score2} ${match.team2}</h3></div>`;
    });
    document.getElementById("scores").innerHTML = scoresHtml;
});