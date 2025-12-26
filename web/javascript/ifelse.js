// Comparison operators

// >    greater then
// <    less then
// >=   greater then and qual to
// <=   less then and equal to
// !    not operator
// e.g:     if (!user) return true

// !=   not equal to
// e.g:     if (password != 1234) return true statement

// ==   match the values

// ===  match the values and their type
// e.g:     if ( 3 == '3' ) return true

// &&   AND operator
// e.g: if ( user == "admin"  &&  user == "vendor" ) return true

// ||   OR
// e.g: if ( user == "admin"  ||  user == "vendor" ) return true

function getResult() {
    var a       = parseInt(document.getElementById("a").value)
    var result  = document.getElementById("result");
    
    if (!a) {
        result.innerText = "Error: \n Please provide number!";
        return;
    }

    // if ( a > 0 ) { // true :: if ( a%4 == 0 ) leap year 
    //     result.innerText = a + " is Positive number";
    // } else { // false
    //     result.innerText = a + " is Negative number";
    // }
    // validation

    if ( a > 0 ) { // :: a == 3, a == -3, a == 0
        result.innerText = a + " is Positive number";
    } else if ( a < 0 ) {
        result.innerText = a + " is Negative number";
    } else {
        result.innerText = a + " is Neutral number";
    }

}
//

// basic
// ifelse
// if else if
// nested if else
// loops
// arrays
// string
// DOM
