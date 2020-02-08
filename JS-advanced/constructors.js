// Function Constructors

// Create a function called Person
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Create a NEW OBJECT that is built using the function known as 'Person'
var jeremy = new Person("Jeremy", 1990, "teacher");

console.log(jeremy);

// if 'new' is not used, Person will be coded into the original function variable
var mabel = new Person("Mabel", 1992, 'Marketing');

console.log(mabel);

year = 2019;

// New Function Constructor for Music Albums
var Album = function(title, artist, releaseYear, genre, own) {
    this.title = title;
    this.artist = artist;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.own = own;

    // You can add METHODS to Function Constructors too...
    this.age = function() {
        console.log(2019 - this.releaseYear);
    };
}

var whenItFalls = new Album('When It Falls', 'Zero 7', 2004, 'Trip Hop', true);

whenItFalls.age();


// PROTOTYPES

Album.prototype.price = function() {
    // 12.99 in 1998
    // increase 0.25 per year from 2010
    console.log(12.99 + (this.releaseYear - 1998)/4);
}

// Prototypes can be called THROUGH an Object...
// But DON'T EXIST within the OBJECT


// This prevents new Objects built through Function Constructors to SAVE SPACE


// The METHOD EXISTS but not within the object
// Rather, it exists in the PROTOTYPE of the Object instead


whenItFalls.price();
console.log(whenItFalls);

// Prototypes are INHERITED by all the Objects built through a constructor

Album.prototype.label = 'Ultimate Dilemma';

console.log(whenItFalls.label);

var simpleThings = new Album('Simple Things', 'Zero 7', 2001, "Trip Hop", true);

console.log(simpleThings.label);
console.log(simpleThings.price());

// Everything is an object...

// For example, arrays are objects with built in prototypes

// We can call arrayName.length because "length" is INHERITED from the array prototype built into javascript

var theGarden = new Album("The Garden", "Zero 7", 2006, "Trip Hop", false);

var lover = new Album("Lover", "Taylor Swift", 2019, "Pop", false);