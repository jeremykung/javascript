/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

JOHN 
The bills were $124, $48, $268, $180 and $42.

Tips:
20% if less than $50
15% if between $50 and $200
10% if over $200

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create: 
    1) a new array containing all tips, and 
    2) an array containing final paid amounts (bill + tip). 

HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
*/

var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    total: [],
    calculateTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * 0.2;
            } else if (this.bills[i] > 200) {
                this.tips[i] = this.bills[i] * 0.1;
            } else {
                this.tips[i] = this.bills[i] * 0.15;
            }
        }
    },
    calculateTotal: function() {
        for (var i = 0; i < this.tips.length; i ++) {
            this.total[i] = this.bills[i] + this.tips[i];
        }
    }
};

john.calculateTip();
john.calculateTotal();

document.write("John's Bills: " + john.bills + "<br>");
document.write("John's Tips: " + john.tips + "<br>");
document.write("John's Total: " + john.total + "<br>");

/*
*** EXTRA AFTER FINISHING ***

MARK 
The bills were $77, $375, $110, and $45.

Tips:
20% if less than $100
10% if between $100 and $300
25% if over $300

5. Implement the same functionality as before, this time using Mark's tipping rules
*/

var mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    total: [],
    calculateTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips[i] = this.bills[i] * 0.2;
            } else if (this.bills[i] > 300) {
                this.tips[i] = this.bills[i] * 0.25;
            } else {
                this.tips[i] = this.bills[i] * 0.1;
            }
        }
    },
    calculateTotal: function() {
        for (var i = 0; i < this.tips.length; i++) {
            this.total[i] = this.bills[i] + this.tips[i];
        }
    }
};

mark.calculateTip();
mark.calculateTotal();

document.write("Mark's Bills: " + mark.bills + "<br>");
document.write("Mark's Tips: " + mark.tips + "<br>");
document.write("Mark's Total: " + mark.total + "<br>");


/*
6. Create a function (not a method) to calculate the average of a given array of tips. 
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// Functions for average tip

function calculateAvgTip(tipsArray) {

    var totalTip = 0;

    for (var i = 0; i < tipsArray.length; i++) {
        totalTip += tipsArray[i];
    };

    var avgTip = totalTip / tipsArray.length;

    return avgTip;
};

// Print average tips

markAvgTip = calculateAvgTip(mark.tips);
document.write("Mark's Average Tip: " + markAvgTip + "<br>");

johnAvgTip = calculateAvgTip(john.tips);
document.write("John's Average Tip: " + johnAvgTip + "<br>");

// Family that paid more tips

if (markAvgTip > johnAvgTip) {
    document.write("Mark's family paid a higher average tip")
} else if (markAvgTip < johnAvgTip) {
    document.write("John's family paid a higher average tip")
} else {
    document.write("They paid the same average tip");
};