// BMI with Objects and Methods
// BMI = mass / height^2

var john = {
    name: 'John',
    mass: 60,
    height: 170,
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
document.write("Mike's BMI: " + mike.bmi);

