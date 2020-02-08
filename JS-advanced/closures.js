// CLOSURES
// an inner function can access variables and parameters of its outer function, even after the outer function has returened

// Example: the a variable is outside of the inner function, yet it can still be used by the inner function

function retirement(retirementAge) {
    var a = " years until retirement.";
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        var yearsLeft = retirementAge - age;
        document.write(yearsLeft + a);
    } 
}

var retirementCanada = retirement(65);
retirementCanada(1990);
document.write("<br>"); // new line

// Alternative syntax, where retirement() returns a function, which then gets passed 1990 as the parameter
retirement(60)(1990);

document.write("<br>"); // new line


// Here, the function parameter 'major' is the closure, that the inner function has enclosed and can access
function majorQuestions(major) {
    return function(name) {
        if (major == 'math') {
            document.write(name + ' what is 1 + 1?');
        } else if (major == 'science') {
            document.write(name + '  what is the velocity of gravity?');
        } else if (major == 'english') {
            document.write(name + ' what is alliteration?')
        }
    }
}

majorQuestions('math')('jeremy');

// function grad(yearOfBirth) {
//     var age = 2019 - yearOfBirth;
//     var yearsLeft = 18 - age;
//     document.write("You will graduate in " + yearsLeft + " years");
// }

// grad(2001);