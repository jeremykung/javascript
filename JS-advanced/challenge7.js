var score = 0;

var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
    this.ask = function() {
        // Show Question
        console.log(question);
        // Show Choices
        for (var i=0; i<answers.length; i++) {
            console.log(i + '. ' + answers[i]);
        }
        // Get Response
        var response = prompt(question);
        // Check Response
        if (answers[response] == correct) {
            score++;
            console.log("Good Job!");
            console.log("Current Score: " + score);
            // Ask next random question
            askRandomQ();
        } else if (response == 'exit') {
            alert("Thank you for playing!");
        } else {
            console.log("Try Again");
            console.log("Current Score: " + score);
            // Ask next random question
            askRandomQ();
        }
    }
}

var Q1 = new Question('your age?', [25, 29, 31, 45], 29);
var Q2 = new Question('your name?', ['jeremy', 'mabel', 'jennifer', 'jessica', 'jenny', 'jiyoung'], 'jeremy');
var Q3 = new Question('best color?', ['blue', 'red', 'orange', 'green'], 'green');
var Q4 = new Question('coffee or tea?', ['coffee','tea'], 'tea');

var questionArray = [Q1, Q2, Q3, Q4];

// Math!
// Math.random() generates a random number
// Multiply that random number by the array length
// Math.floor() rounds down
// Nest that stuff!

// Proof of number
// console.log(Math.floor(Math.random()*questionArray.length));

// Adding number into array
// questionArray[Math.floor(Math.random()*questionArray.length)].ask();

function askRandomQ() {
    questionArray[Math.floor(Math.random()*questionArray.length)].ask();
}

// Start Button
document.write("<button class='start-btn' onclick='askRandomQ()'>Start Quiz</button>")









// var Question = function(question, a, b, c, correct) {
//     this.question = question;
//     this.answers = [a, b, c];
//     this.correct = correct;
//     this.ask = function() {
//         console.log(question);
//         console.log('A. ' + a);
//         console.log('B. ' + b);
//         console.log('C. ' + c);
//         var reply = prompt(question);
//         if (reply == correct) {
//             score++;
//             console.log("Good Job!");
//             console.log("Current Score: " + score);
//         } else {
//             console.log("Try Again");
//             console.log("Current Score: " + score);
//         }
//     }
// }

// var Q1 = new Question('what is your age?', 20, 30, 40, 30);
// var Q2 = new Question('what\'s your name?', 'jeremy', 'mabel', 'jennifer', 'jeremy');
// var Q3 = new Question('favorite color?', 'red','blue','green','green');