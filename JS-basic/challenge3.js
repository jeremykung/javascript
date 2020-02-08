/* John's dinner bills:  $124, $48, $268
Tips are 20% for under $50
         15% between $50 and $200
         10% if above $200

1. Create an array that shows how much he tipped each time
2. Create an array that shows how much he paid total each time
*/




function tipAmount(bill) {
    if (bill < 50) {
        return bill * 0.20;
    } else if (bill > 200) {
        return bill * 0.10;
    } else {
        return bill * 0.15;
    }
}

// bill prices stored in array 'bills'
var bills = [124, 48, 268];

// tips as an array using a function to calculate the value
var tips = [
    tipAmount(bills[0]),   // 1st item in array 'bills'
    tipAmount(bills[1]),   // 2nd item in array 'bills'
    tipAmount(bills[2])    // 3rd item in array 'bills'
];  

document.write(tips + "<br>");

// total to be paid
var total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

document.write(total);