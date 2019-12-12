var scores, roundScores, activePlayer, lastRoll, winningScore, nameP0, nameP1;

scores = [0,0]; // Total Score
roundScore = 0; // Round Score
activePlayer = 0;
lastRoll = 0;
winningScore = 100;

// CUSTOM NAMES

// nameP0 = prompt("What's your name Player 1?");
// nameP1 = prompt("What's your name Player 2?");
// console.log(nameP0);
// console.log(nameP1);

// document.querySelector(".p0-name").textContent = nameP0;
// document.querySelector(".p1-name").textContent = nameP1;



// ROLL

document.querySelector(".roll").addEventListener('click', function() {
    // Anonmyous Function
    // Exists in the Event Listener only and has no name

    // 1. Roll random number between 1 and 6
    var dice0 = Math.floor(Math.random() * 6 + 1);
    var dice1 = Math.floor(Math.random() * 6 + 1);
    
    // Display dice
    var dicePic0 = document.querySelector(".dicePic-0");
    dicePic0.style.display = "inline";
    dicePic0.src = "images/dice-" + dice0 + ".png";

    var dicePic1 = document.querySelector(".dicePic-1");
    dicePic1.style.display = "inline";
    dicePic1.src = "images/dice-" + dice1 + ".png";
    
    // Create variable for round score div so it is easier to call
    var round = document.querySelector(".p" + activePlayer + "-round");

    // Check for 1 on ONE die only
    if (dice0 === 1 && dice1 !== 1) {
   
        // Set round score to 0
        roundScore = 0;
        // Display 0 on round scoreboard
        round.textContent = roundScore;
        
        switchPlayer();

    } else if (dice0 !== 1 && dice1 === 1) {

        // Set round score to 0
        roundScore = 0;
        // Display 0 on round scoreboard
        round.textContent = roundScore;
        
        switchPlayer();

    } else {

        // Add dice number to round score
        roundScore += dice0 + dice1;
        // Display score on round scoreboard
        round.textContent = roundScore;
        
    }

    // Check for Snake Eyes
    if (dice0 === 1 && dice1 === 1) {
        roundScore = 0;
        round.textContent = roundScore;
        scores[activePlayer] = 0;
        document.querySelector(".p" + activePlayer + "-total").textContent = 0;
        switchPlayer();
    } else {}
    
});

// HOLD

document.querySelector(".hold").addEventListener("click", function() {
    
    scores[activePlayer] += roundScore;
    console.log(scores[activePlayer]);

    document.querySelector(".p" + activePlayer + "-total").textContent = scores[activePlayer];

    var round = document.querySelector(".p" + activePlayer + "-round");

    roundScore = 0;
    round.textContent = roundScore;

    switchPlayer();
    // Erase lastRoll to reset double six
    lastRoll = 0;

    checkWin();
    
    console.log("player: " + activePlayer);

});

// RESET Game

document.querySelector(".reset").addEventListener("click", function() {

    // Reset Scores
    scores = [0,0];
    document.querySelector(".p0-total").textContent = 0;
    document.querySelector(".p0-round").textContent = 0;
    document.querySelector(".p1-total").textContent = 0;
    document.querySelector(".p1-round").textContent = 0;

    // Reset Interface
    document.querySelector(".game-over").style.display = "none";
    document.querySelector(".play-game").style.display = "block";
    document.querySelector(".set-score-wrapper").style.display = "block";
    document.querySelector(".show-winning-score").style.display = "none";

});

// FUNCTIONS

function checkWin() {

    if (scores[0] >= winningScore) {

        console.log("GameOver");
        document.querySelector(".play-game").style.display = "none";

        document.querySelector(".game-over").style.display = "block";

        document.querySelector(".win").textContent = "P1 Wins";

        // CUSTOM NAMES
        // document.querySelector(".win").textContent = nameP0 + " Wins";

    } else if (scores[1] >= winningScore) {

        console.log("GameOver");
        document.querySelector(".play-game").style.display = "none";

        document.querySelector(".game-over").style.display = "block";

        document.querySelector(".win").textContent = "P2 Wins";

        // CUSTOM NAMES
        // document.querySelector(".win").textContent = nameP1 + " Wins";

    };
}

function switchPlayer() {
    if (activePlayer === 0) {

        activePlayer += 1;

        document.querySelector(".p0-box").classList.remove("active");

        document.querySelector(".p1-box").classList.add("active");

    } else {

        activePlayer -= 1;

        document.querySelector(".p1-box").classList.remove("active");

        document.querySelector(".p0-box").classList.add("active");

    };
}

function setScore() {
    // Set winningScore
    winningScore = document.querySelector("#custom-score-input").value;
    // Remove Input and Button
    document.querySelector(".set-score-wrapper").style.display = "none";
    // Display winningScore
    document.querySelector(".show-winning-score").style.display = "block";
    document.querySelector(".show-winning-score").textContent = winningScore;
};