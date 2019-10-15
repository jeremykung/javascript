var scores, roundScores, activePlayer, lastRoll, nameP0, nameP1;

scores = [0,0];
roundScore = 0; // Counts round score
activePlayer = 0;
lastRoll = 0;


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
    var dice = Math.floor(Math.random() * 6 + 1);
    
    // Display dice
    var dicePic = document.querySelector(".dicePic");
    dicePic.style.display = "inline";
    dicePic.src = "images/dice-" + dice + ".png";
    
    // Create variable for round score div so it is easier to call
    var round = document.querySelector(".p" + activePlayer + "-round");

    // Check for 1
    if (dice === 1) {
   
        // Set round score to 0
        roundScore = 0;
        // Display 0 on round scoreboard
        round.textContent = roundScore;
        
        switchPlayer();

    } else {

        // Add dice number to round score
        roundScore += dice;
        // Display score on round scoreboard
        round.textContent = roundScore;
        
    }

    // Check for double 6
    if (dice === 6 && lastRoll === 6) {
    
        roundScore = 0;
        round.textContent = roundScore;

        document.querySelector(".p" + activePlayer + "-total").textContent = roundScore;

        switchPlayer();

        dice = 0;

    } else {

    }

    lastRoll = dice;

    
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

});

// FUNCTIONS

function checkWin() {

    if (scores[0] >= 100) {

        console.log("GameOver");
        document.querySelector(".play-game").style.display = "none";

        document.querySelector(".game-over").style.display = "block";

        document.querySelector(".win").textContent = "P1 Wins";

        // CUSTOM NAMES
        // document.querySelector(".win").textContent = nameP0 + " Wins";

    } else if (scores[1] >= 100) {

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