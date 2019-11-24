currentYear = 2019;

var years = [1990, 1992, 1993, 1998, 2001];

// 1st Class Function (Function that accepts functions as arguments)

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i=0; i<arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

// 2nd Class Functions

function calcAge(el) {
    return currentYear - el;
}

function isAdult(el) {
    return el >= 18;
}

function yearsTo30(el) {
    var age = currentYear - el;
    return 30 - age;
}

// Testing Area

// CALLBACK Functions are functions that don't execute immediately
// They execute ONLY when they are called...
// function() <-- This executes immediately
// function   <-- This stores the function to be called later

// calcAge

var ages = arrayCalc(years, calcAge); // calcAge is a CALLBACK Function

for (var i=0; i<ages.length; i++) {
    document.write(ages[i] + " ")
};
document.write("<br>");
// console.log(ages);

// isAdult

var adultCheck = arrayCalc(ages, isAdult);

for (var i=0; i<adultCheck.length; i++) {
    document.write(adultCheck[i] + " ");
};
document.write("<br>");
// console.log(adultCheck);


// yearsTo30

var thirtyCountdown = arrayCalc(years, yearsTo30);

for (var i=0; i<thirtyCountdown.length; i++) {
    document.write(thirtyCountdown[i] + " ");
}
document.write("<br>");
// console.log(thirtyCountdown);
