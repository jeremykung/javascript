// METHODS are FUNCTIONS inside of an OBJECT

var year = 2019;

// THIS refers the the object it is used in 
var jeremy = {
    color: "green",
    birthYear: 1990,
    // calculateAge: function() {
    //     return year - this.birthYear;
    // }
    calculateAge: function() {
        this.age = year - this.birthYear;
    }
}

// You must run the function once in order for it to work
jeremy.calculateAge();

document.write(jeremy.age);