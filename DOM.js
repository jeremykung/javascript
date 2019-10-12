var scores, roundScores, activePlayer, nameP0, nameP1;

scores = [0,0];
roundScore = 0; // Counts round score
activePlayer = 0;


// CUSTOM NAMES

// nameP0 = prompt("What's your name Player 1?");
// nameP1 = prompt("What's your name Player 2?");
// console.log(nameP0);
// console.log(nameP1);

// document.querySelector(".p0-name").textContent = nameP0;
// document.querySelector(".p1-name").textContent = nameP1;



// Event for ROLL

document.querySelector(".roll").addEventListener('click', function() {
    // Anonmyous Function
    // Exists in the Event Listener only and has no name

    // 1. Roll random number between 1 and 6
    var dice = Math.floor(Math.random() * 6 + 1);
    
    // 2. Display the number in a div
    var dicePic = document.querySelector(".dicePic");
    
    dicePic.style.display = "inline";
    dicePic.src = "images/dice-" + dice + ".png";
    
    // 3. Add to round score
    var round = document.querySelector(".p" + activePlayer + "-round");

    // 4. Check roll
    if (dice === 1) {
   
        roundScore = 0;
        round.textContent = roundScore;

        if (activePlayer === 0) {
            activePlayer += 1;
        } else {
            activePlayer -= 1;
        };

    } else {
        roundScore += dice;
    }

    round.textContent = roundScore;

    console.log("player: " + activePlayer);

});

// Event for HOLD

document.querySelector(".hold").addEventListener("click", function() {
    
    scores[activePlayer] += roundScore;
    console.log(scores[activePlayer]);

    document.querySelector(".p" + activePlayer + "-total").textContent = scores[activePlayer];

    var round = document.querySelector(".p" + activePlayer + "-round");

    roundScore = 0;
    round.textContent = roundScore;

    if (activePlayer === 0) {
        activePlayer += 1;
    } else {
        activePlayer -= 1;
    };

    // Win Condition

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

    console.log("player: " + activePlayer);

});

// RESET Game

document.querySelector(".reset").addEventListener("click", function() {
    scores = [0,0];

    document.querySelector(".game-over").style.display = "none";

    document.querySelector(".play-game").style.display = "block";

    document.querySelector(".p0-total").textContent = 0;
    document.querySelector(".p0-round").textContent = 0;
    document.querySelector(".p1-total").textContent = 0;
    document.querySelector(".p1-round").textContent = 0;

});

// switch (true) {
//     case (scores[0] >= 20):
//         console.log("Game over");
//         document.querySelector(".game-over").style.display = "block";
//         break;
    
//     case (scores[1] >= 20):
//         document.querySelector(".game-over").style.display = "block";
//         break;

//     default:
//         break;
// };








    // document.querySelector(".p" + activePlayer + "-round").textContent = dice;