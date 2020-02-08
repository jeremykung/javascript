var hear = 3;

// Below is an IIFE (Immediately Invoked Function Expression)
// ONLY the returned code is PUBLIC, everything else is PRIVATE

var budgetController = (function(){
    var x = 23;
    var add = function(a) { // This function is gone after execution (therefore private)
        return x+a;
    }

    return { // INNER FUNCTION 
        // has access to outer function because of CLOSURES
        // therefore, it can access the add function outside of it
        // it has CLOSED in and collected the outer functions 
        publicTest: function(b){
            console.log(add(b));
        }
    }
})();





var UIController = (function() {

    // Code

})();




var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);