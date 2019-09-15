// var job = prompt("What is your job?");
var job = "teacher";
document.write("job is set to " + job + "<br>");

// Switches are very good for matching
// Switches are NOT that good for comparing

switch(job) {
    case "teacher" :
        document.write("You teach things to people");
        break;
    case "engineer" :
        document.write("You build things");
        break;
    default :
        document.write("You are unemployed");
        break;
}

document.write("<br>")

// Making comparisons...
// To compare things using switch, use 'true' as the argument
// This checks if your switch comparisons are true

var exes = 0;

switch(true) {
    case (exes == 0):
        document.write("You have no experience");
        break;
    case (exes >= 1 && exes < 5):
        document.write("You have some experience");
        break;
    case (exes >= 5):
        document.write("You are experienced");
        break;
}