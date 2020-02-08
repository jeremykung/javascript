// Get values from available budget and add them to HTML

var incTotal = 0;
var expTotal = 0;

var incArray = [];
var incDescArray = [];
var expArray = [];
var expDescArray = [];

// for (var i = 0; i < incArray.length; i++) {
//     percentage = incArray[i]/incTotal;
//     incPercArray.push(percentage)
// }

function addItem() {
    // 1. Store data in variables
    type = document.querySelector("#type-select").value;
    desc = document.querySelector("#description").value;
    value = document.querySelector("#value").value;

    // 2. Add to appropriate list
    if (type == "income") {

        incArray.push(value); // Add to values array
        incDescArray.push(desc); // Add to desc array

        incTotal = parseInt(incTotal) + parseInt(value); // Update total

        percentage = value/incTotal*100;

        // PERCENTAGE FORMULA: value / totalValue * 100
        // perc = (value/incTotal)*100; // Calculate percent of total

        // Create new income item container
        document.querySelector(".inc-list").innerHTML = '<div class="inc-item"></div>';


        // Cycle through percents to update
        for (var i=0; i<incArray.length; i++) {
            // console.log(i);
            document.querySelector(".inc-list").innerHTML += '<div class="inc-item"><div class="description inc-desc">' + incDescArray[i] + '</div><div class="amount inc-amt">+' + incArray[i] + '</div><div class="percent inc-perc'+incArray[i]+'">' + Math.round(incArray[i]/incTotal*100) + '%</div></div>';
        }

        // Update total income
        document.querySelector('.net-income').innerHTML = incTotal;
        // Update budget
        document.querySelector('.total-budget').innerHTML = incTotal - expTotal;
        // Update total percents
        document.querySelector(".net-income-percent").innerHTML = Math.round(incTotal/(incTotal+expTotal)*100) + '%';
        document.querySelector(".net-expense-percent").innerHTML = Math.round(expTotal/incTotal*100) + '%';


    } else if (type == "expense") {

        expArray.push(value); // Add to values array
        expDescArray.push(desc); // Add to desc array

        expTotal = parseInt(expTotal) + parseInt(value); // Update total

        // Create expense item container
        document.querySelector(".exp-list").innerHTML = '<div class="exp-item"></div>';

        // Cycle through percents to update
        for (var i=0; i<expArray.length; i++) {
            // console.log(i);
            document.querySelector(".exp-list").innerHTML += '<div class="exp-item"><div class="description exp-desc">' + expDescArray[i] + '</div><div class="amount exp-amt">-' + expArray[i] + '</div><div class="percent exp-perc'+expArray[i]+'">' + Math.round(expArray[i]/expTotal*100) + '%</div><div class="delete-btn">delete</div></div>';
        }

        // Update total expenses
        document.querySelector('.net-expense').innerHTML = expTotal;
        // Update budget
        document.querySelector('.total-budget').innerHTML = incTotal - expTotal;
        // Update total percents
        document.querySelector(".net-income-percent").innerHTML = Math.round(incTotal/(incTotal+expTotal)*100) + '%';
        document.querySelector(".net-expense-percent").innerHTML = Math.round(expTotal/incTotal*100) + '%';
    }
}

document.querySelector(".exp-item").addEventListener("click", function() {
    this.value = 0;
    this.classList.add('invisible');
});

/*
Delete function
1. set deleted item value to 0 
2. hide that list item with css
*/

document.querySelector(".list-item").addEventListener('mouseover', showDelete());

function showDelete(event) {
    event.target.classList.remove
}