// Object.create

year = 2019;

var personPrototype = {
    calculateAge: function() {
        document.write(year - this.yearOfBirth);
        document.write("<br>");
    }
}

var jeremy = Object.create(personPrototype);

jeremy.name = "Jeremy";
jeremy.yearOfBirth = 1990;
jeremy.job = 'teacher';

console.log(jeremy);

// Better Way

var jessica = Object.create(personPrototype, {
    name: {value: "Jessica"},
    yearOfBirth: {value: 2001},
    job: {value: "University Student"}
});

console.log(jessica);

// Object Create allows you to give prototype values to objects more specifically
// They don't just inherit them from the function constructor method....
// Need to review at a later time.