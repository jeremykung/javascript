// BMI with Objects and Methods
// BMI = mass / height^2

var john = {
    name: 'John',
    mass: 70,
    height: 180,
    calcBMI: function(mass, height) {
        this.bmi = this.mass / (this.height/100)**2;
    }
};

var mike = {
    name: 'Mike',
    mass: 70,
    height: 180,
    calculateBMI: function(mass, height) {
        this.bmi = this.mass / (this.height/100)**2;
    }
};

john.calcBMI();
document.write("John's BMI: " + john.bmi + "<br>");

mike.calculateBMI();
document.write("Mike's BMI: " + mike.bmi + "<br>");

if (mike.bmi > john.bmi) {
    document.write("Mike's BMI is higher than John's");
} else if (john.bmi > mike.bmi) {
    document.write("John's BMI is higher than Mike's BMI");
} else {
    document.write("Their BMI's are the same");
}

// You can methods in the IF/ELSE statements as well
if (mike.calculateBMI() > john.calcBMI()) {
    document.write("Mike's BMI is higher than John's");
} else if (john.calcBMI() > mike.calculateBMI()) {
    document.write("John's BMI is higher than Mike's BMI");
} else {
    document.write("Their BMI's are the same");
}