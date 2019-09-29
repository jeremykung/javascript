// METHODS are FUNCTIONS attached to OBJECTS
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
    // *** Using THIS for birthYear and to store age in object
}

// document.write(jeremy.age(1990));
document.write(jeremy.age(jeremy.birthYear));