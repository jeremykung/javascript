var scores, round, activePlayer;

scores = [0,0];
round = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6 + 1);

document.querySelector(".p" + activePlayer + "-round").textContent = dice;
// document.querySelector(".p" + activePlayer + "-round").innerHTML = "<b>" + dice + "</b>";

document.querySelector(".roll").style.display = "none";

