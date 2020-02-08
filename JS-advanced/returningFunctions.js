function interviewQuestions(job) {
    if (job === 'designer') {
        return function(name) {
            document.write(name + ', can you explain what UX design is?')
        };
    } else if (job === 'teacher') {
        return function(name) {
            document.write(name + ", what subject do you teach?");
        }
    } else if (job === 'student') {
        return function(name) {
            document.write(name + ", what's your favourite subject?");
        }
    } else {
        return function(name) {
            document.write(name + ", what do you do?");
        }
    }
};


var designerAsk = interviewQuestions('designer'); // stores the returned function in a variable
designerAsk('Jeremy'); // variable now looks like a function (because it is one)

document.write('<br>');

//<   returns function    >//
interviewQuestions('teacher')('Jeremy'); // code reads left to right, reads as anonymousFunction('Jeremy');