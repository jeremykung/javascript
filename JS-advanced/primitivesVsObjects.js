// Primitives vs Objects

/*
Variables containing primitives HOLD the actual data inside of the variable
Variables associated with objects don't contain the data, but contain a reference to the data (like pointers in C)

Primitives are:
Numbers
Strings
Booleans
Undefined
Null

Everything else is an object

*/

// Primitives Example

var a = 7;
var b = a; // b now has a copy of 7
a = 25; // mutate a to 25

document.write(a); // 25 
document.write('<br>');
document.write(b); // is still 7 because it has it's own copy of the number
document.write('<br>');


// Objects Example

var obj1 = {
    name: 'Jeremy',
    age: 25
}

var obj2 = obj1; // obj2 now points to obj1
obj1.age = 29; // mutate obj1.age to 29

document.write(obj1.age); // 29
document.write('<br>');
document.write(obj2.age); // 29 since obj2 POINTS to obj1
document.write('<br>');

// Functions Example (comparing primitives and objects)

var age = 29;           // Primitive (actual copy of value)
var me = {              // Object (pointers to values that are stored in a memory location)
    name: 'Jeremy',
    city: 'Taiwan'
}

function change(a, b) {
    a = 30;             // attempts to change a by passing the reference of a
    b.city = 'Kobe';    // attempts to change b by passing the reference of b
}

change(age, me); // using a function to change data

document.write(age); // 29... because we are trying to pass age as a reference, when it is actually a value
document.write('<br>');
document.write(me.city); // successfully because we are passing a reference to the object, which is also a reference
document.write('<br>');
