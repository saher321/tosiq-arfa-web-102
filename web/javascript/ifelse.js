// Comparison operators

// >    greater then
// <    less then
// >=   greater then and qual to
// <=   less then and equal to
// !    not operator

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

    if ( a > 0 ) { // true
        result.innerText = a + " is Positive number";
    } else { // false
        result.innerText = a + " is Negative number";
    }
}
