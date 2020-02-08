var johnScore1 = 89;
var johnScore2 = 120;
var johnScore3 = 103;

var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;

var maryScore1 = 97;
var maryScore2 = 134;
var maryScore3 = 105;

var johnAverageScore = (johnScore1 + johnScore2 + johnScore3) / 3;
var mikeAverageScore = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
var maryAverageScore = (maryScore1 + maryScore2 + maryScore3) / 3;

document.write("John's average score is " + johnAverageScore + "<br>");
document.write("Mike's average score is " + mikeAverageScore + "<br>");
document.write("Mary's average score is " + maryAverageScore + "<br>");

if(johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore) {
    document.write("John wins with an average of " + johnAverageScore);
} else if (mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore) {
    document.write("Mike wins with an average of " + mikeAverageScore);
} else if (maryAverageScore > johnAverageScore && maryAverageScore > mikeAverageScore) {
    document.write("Mary wins with an average of " + mikeAverageScore);
} else {
    document.write("No Winner");
}

