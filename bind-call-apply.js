var jeremy = {
    name: "Jeremy",
    age: 29,
    job: "Teacher",
    introduction(style, timeOfDay) {
        if (style === 'formal') {
            document.write("Greetings, I am " + this.name + " and I am " + this.age + " years old. Have a pleasant " + timeOfDay + ".<br>")
        } else if (style === 'casual') {
            document.write(timeOfDay + ", I'm " + this.name + " and I'm " + this.age + "<br>")
        }
    }
};

var emily = {
    name: "Emily",
    age: 23,
    job: "Elementary Teacher"
};

var jessica = {
    name: 'Jessica',
    age: 18,
    job: 'University Student'
}

jeremy.introduction('casual', 'Evening');

// CALL allows you to borrow methods
// 1. call the method
// 2. add .call and pass the object you want to apply it to as the argument

jeremy.introduction.call(emily, 'formal', 'morning');

// APPLY is the same as call
// BUT it accepts the arguments as an ARRAY
// The METHOD must be set up to have an ARRAY in the parameter

// this does not work because the 'introduction' method accepts normal arguments, nor arrays
jeremy.introduction.apply(jessica, ['formal']);

// BIND creates a COPY of the function
// CALL and APPLY immediately call the function

// create a variable to STORE a copy of a function
// 'formal' is set as the preset argument for this function
var jeremyFormal = jeremy.introduction.bind(jeremy, 'formal');

// This is useful as you can then make copies of functions that autofills certain data

jeremyFormal('night');

// more practice
var emilyCasual = jeremy.introduction.bind(emily, 'casual');

emilyCasual('Morning')


var years = [1990, 2001, 1993, 1992]

function arrayCalculator(arr,fn) {
    var arrResult = [];
    for(var i; i<arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(yearOfBirth) {
    return 2019 - yearOfBirth;
}

function legalAge(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    if (age > 18) {
        return legal;
    } else {
        return illegal;
    }
}

var test = arrayCalculator(years, calculateAge);
console.log(test);