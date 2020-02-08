var names = ["Jeremy", "Jessica", "Mabel", "Jennifer"];
var ages = [29, 18, 27, 29];

// This is another way to write out arrays... looks bad though
var years = new Array(1990, 2001, 1992, 1990);

document.write(names[0] + '<br>');
document.write(names[3] + '<br>');

// Mutates the list
names[1] = "Jenny";

document.write(names[1] +'<br>');

// Adds to the list
// This is because it counts the number objects in the array
// However, since arrays start at 0, this will add a new object
names[names.length] = "Jessica";
names[names.length] = "Jiyoung";

// varName.push ADDS to the END of the array
names.push("Becky");
document.write(names + "<br>");

// varName.unshift ADDS to the FRONT of the array
names.unshift("April");
document.write(names + "<br>");

// varName.pop DELETES the LAST object of the array
names.pop();
document.write(names + "<br>");

// varName.shift DELETES the FIRST object of the array
names.shift();
document.write(names + "<br>");

// varName.indexOf(searchValue) searches the array for a value
// If found: returns object's location in array as number value
// If not found: returns -1
document.write(names.indexOf("Jennifer") + "<br>");
document.write(names.indexOf("Ruth") + "<br>");

// Gettin Fancy ;)             names[1]
document.write("I've dated " + names[names.indexOf("Mabel")] + "<br>");

var didWeDate = names.indexOf("Jessica") === -1 ? "We did not date" : "We dated";

document.write(didWeDate + "<br>");

// var didWeDateHard = names.indexOf("Jessica") === -1 ? "I did not date " + names[names.indexOf[didWeDateHard]] : "I dated " + names[names.indexOf[didWeDateHard]] + " very hard.";

// document.write(didWeDateHard + "<br>");