// METHODS are FUNCTIONS attached to OBJECTS
// 'THIS' points to itself
year = 2019;

var jeremy = {
    name: 'Jeremy',
    birthYear: 1990,
    job: 'Teacher',
    male: true,
    // * Normal FUNCTION Synatx
    // age: function(birthYear) {
    //     return year - birthYear;
    // },
    // ** Using THIS for birthYear
    // age: function(birthYear) {
    //     return year - this.birthYear;
    // }
    // *** Using THIS to target local birthYear and to store 'age' in local object
    calculateAge: function(birthYear) {
        this.age = year - this.birthYear;
    }
}

// Call the METHOD (function in object)
jeremy.calculateAge();

// Print to screen
document.write(jeremy.age);