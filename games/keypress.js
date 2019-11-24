var display = document.querySelector(".display");

// document.addEventListener('keypress', showKeyPressed);

// function showKeyPressed(key) {
//     display.textContent = key.keyCode;
// }

// var keyPressed = saveKeyPressed;

document.addEventListener('keypress', keyIsPressed);

function keyIsPressed(key) {

    // OPTIONAL
    // console.log(key.keyCode); // log the keyCode
    // keyPressed = key.keyCode; // set keyPressed variable to the keyCode
    display.textContent = key.keyCode; // show keyPressed on website
    
    // if (key.keyCode == '103') { 
    //     document.querySelector('.display').classList.toggle("green");
    //     console.log(key.keyCode + ' was pressed');
    // };

    switch (key.keyCode) {
        case 114:
            document.querySelector('.display').classList.toggle("red");             
            break;
        case 103:
            document.querySelector('.display').classList.toggle("green"); 
            break;
        case 98:
            document.querySelector('.display').classList.toggle("blue")
        default:
            break;
    }
};




// var x = event.which || event.keyCode;