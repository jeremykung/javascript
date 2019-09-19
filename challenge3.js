/* John's dinner bills:  $124, $48, $268
Tips are 20% for under $50
         15% between $50 and $200
         10% if above $200

1. Create an array that shows how much he tipped each time
2. Create an array that shows how much he paid total each time
*/



var bills = [124, 48, 268];

function tipAmount(bill1, bill2, bill3) {
    if(bill1 < 50) {
        tipAmount = bill1 * 0.2;
    } else if (bill1 > 200) {
        tip1 = bill1 * 0.1;
    } else {
        tip1 = bill1 * 0.15;
    }
    return tipAmount;
}

document.write(tipAmount);



// tipAmount(124, 48, 268);

var tips = [tip1, tip2, tip3];

document.write("Hi");