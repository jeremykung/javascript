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

var tips = [124, 48, 268];

document.write(tips);