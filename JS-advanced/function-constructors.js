// Function Constructors

// OLD WAY
// jeremy = {
//     name: 'Jeremy',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

// NEW WAY
// 1. Create Object as a VARIABLE
// 2. set it equal to a FUNCTION
// 3. the FUNCTION will construct the object using the THIS variable
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        document.write(2019 - yearOfBirth);
    }
}


var jeremy = new Person('jeremy', 1990, 'teacher');
jeremy.calculateAge();


var jessica = new Person('Jessica', 2001, 'student');

document.write(jeremy.name + "<br>");
document.write(jessica.job + "<br>");

// Another Function Constructor
var Song = function(title, artist) {
    this.title = title;
    this.artist = artist;
}

// You must use the the NEW operator so it creates a NEW INSTANCE of the object that is empty
var home = new Song('Home', 'Zero 7');

document.write(home.artist + "<br>");

// ADDING a PROTOTYPE to an existing object
Song.prototype.rating = function() {
    document.write("What's your rating? <br>")
}

var whenSummerComes = new Song('When Summer Comes', 'Oscar Peterson');

document.write(whenSummerComes.artist + "<br>");
whenSummerComes.rating();
