// RETURN to store value in memory (can use outside function)
// If no RETURN, value valid only inside function

// 1. FUNCTION DECLARATIONS

//Calculates your age from your birth year
function ageCalc(birthYear) {
    age = 2019 - birthYear;
    return age;
}

// Calculates years to retirement using birth year and name
function retire(year, name) {
    var yearsLeft = 65 - (2019 - year);
    document.write("Years left to retirement: " + yearsLeft + "<br>");
}
// Call the function
retire(1990, "Jeremy");


// Calculates years crisis using age function and name
// If Else statement if past crisis age
function midLifeCrisis(year, name) {
    var crisis = 45 - ageCalc(year);

    if (crisis > 0) {
        document.write("Years until " + name + "'s mid-life crisis: " + crisis + "<br>");
    } else {
        document.write("Years " + name + " has been retired: " + crisis*-1 + "<br>");
    }    
}
// Calling the function
midLifeCrisis(1990, "Jeremy");
midLifeCrisis(1950, "Old Guy")

// 2. FUNCTION EXPRESSIONS

document.write("Function Declarations:<br>")

// Assigns a variable to the function
var weightKG = function(weightLBS) {
    weightKG = weightLBS * 0.453592;
    return weightLBS;
}

weightKG(135);

document.write(weightKG + "<br>");

var heightCM = function(heightFT) {
    heightCM = heightFT * 30.48;
    return heightCM;
}

heightCM(6);

document.write(heightCM);

// Expressions produce a result
// Statements don't produce values