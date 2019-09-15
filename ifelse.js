var weight = prompt("What\'s your weight?");

document.write("Your weight is " + weight + "<br>");

if(weight > 80) {
    document.write("Uh oh, you are fat");
} else {
    document.write("You're not fat");
} 

var age = prompt("What\'s your age?");

if (age > 13) {
    document.write("<br>You're a man");
} else if (age>13 && age<18) {
    document.write("<br>You're a teenager");
} else {
    document.write("<br>You're a boy");
}