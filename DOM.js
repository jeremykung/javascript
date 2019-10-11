var scores, roundScores, activePlayer;

scores = [0,0];
roundScore = 0; // Counts round score
activePlayer = 0;


// document.querySelector(".dicePic").style.display = "none";

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


    if (dice === 1) {
        roundScore = 0;
    } else {
        roundScore += dice;
    }

    round.textContent = roundScore;

});

document.querySelector(".hold").addEventListener("click", function() {
    
    scores[activePlayer] += roundScore;
    console.log(scores[activePlayer]);

    document.querySelector(".p" + activePlayer + "-total").textContent = scores[activePlayer];

    return;
})







    // document.querySelector(".p" + activePlayer + "-round").textContent = dice;