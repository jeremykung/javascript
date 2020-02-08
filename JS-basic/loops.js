// Will count from 0 to 9 (0 acting as 1)

for (var i = 0; i < 10; i++) {
    document.write(i + " ");
}

document.write("<br>")

for (var i = 1; i <=10; i++) {
    document.write(i + " ")
}

document.write("<br>")


// ARRAYS
var names = ["Jeremy", 29, "Jessica", 18,  "Mabel", 27, "Jennifer", 29];

document.write(names.length + "<br>");

for (var i=0; i<names.length; i++) {
    document.write(names[i] + " ");
}

document.write("<br>");

// TYPEOF (checks the element in an array)

// Undefined            	            "undefined"
// Null	                                "object" (see below)
// Boolean              	            "boolean"
// Number	                            "number"
// BigInt	                            "bigint"
// String	                            "string"
// Symbol (new in ECMAScript 2015)  	"symbol"
// Host object                      	Implementation-dependent
// Function object                  	"function"
// Any other object	                    "object"

// Print only strings
for (var i=0; i<names.length; i++) {
    if (typeof names[i] !== "string") continue;  // CONTINUE works like skipping an item
        document.write(names[i] + " ");
};

document.write("<br>");

// Print only numbers
for (var i=0; i<names.length; i++ ) {
    if (typeof names[i] !== "number") continue;
        document.write(names[i] + " ")
};

document.write("<br>");

// Print out array in REVERSE order

for (var i = names.length - 1; i >= 0; i--) {
    document.write(names[i] + " ");
}





// // OBJECT (not figured out yet)
// var jeremy = {
//     firstName: 'Jeremy',
//     lastName: 'Kung',
//     birthYear: 1990,
//     job: 'Teacher',
//     married: false
// };

// document.write(jeremy.length);

// for (i=0; i<jeremy.length; i++) {
//     document.write(jeremy[i] + " ");
// }