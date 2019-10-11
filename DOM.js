var scores, roundScores, activePlayer, dice;

scores = [0,0];
roundScores = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6 + 1);

document.write(dice);

document.querySelector(".p1-round").textContent = dice;