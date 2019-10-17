// Function Constructors

var jessica = {
    name: "Jessica",
    yearOfBirth: 2001,
    job: 'student'
}

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var jeremy = new Person("Jeremy", 1990, "teacher");
// 'new' creates an EMPTY OBJECT