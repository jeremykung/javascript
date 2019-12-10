var jeremy = {
    name: "Jeremy",
    age: 29,
    job: "Teacher",
    introduction() {
        document.write("Hi my name is " + this.name + " and I am " + this.age + "<br>")
    }
};

var emily = {
    name: "Emily",
    age: 23,
    job: "Elementary Teacher"
};

jeremy.introduction();

// Call allows you to borrow methods
// 1. call the method
// 2. add .call and pass the object you want to apply it to as the argument

jeremy.introduction.call(emily);

// Bind allows you to bind a method to a variable or object
// 1. create a variable
// 2. set the value to .bind

var intro = jeremy.introduction.bind(jeremy);
