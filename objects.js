// OBJECTS
// Similar to arrays but order DOES NOT MATTER

var jeremy = {
    firstName: 'Jeremy',
    lastName: 'Kung',
    birthYear: 1990,
    job: 'Teacher',
    married: false
};

// Ways to access object data
// 1. Dot Notation
document.write(jeremy.firstName + "<br>");
// 2. Bracket Notation
document.write(jeremy['birthYear'] + "<br>");
// 3. Variables
var j = 'job';
document.write(jeremy[j] + "<br>");


// Mutating data

// 1. Dot Notation
jeremy.job = 'Designer';
document.write(jeremy.job + "<br>");
// 2. Bracket Notation
jeremy['job'] = 'Entrepreneur';
document.write(jeremy['job'] + "<br>");

// Initiating Objects

// Object Literal
var mom = {
    firstName: 'Susan',
    lastName: 'Law',
    birthYear: 1960,
    job: 'Human Resources',
    married: false
};

// new Object() syntax
var dad = new Object();
    dad.firstName = "John";
    dad.lastName = "Kung";
    dad.birthYear = "1958";
    dad["job"] = "Manager";

// test
document.write(dad.job);