
function showResult() {
    var userRole        = document.getElementById("role").value;
    var userPassword    = document.getElementById("psw").value;
    console.log(userRole);
    var status  = document.getElementById("status");

    var role = "admin";
    var password = 1234;

    // Gaurded clause
    if ( userRole != role ) return status.innerText = "Unauthorized";
    if ( userPassword != password ) return status.innerText = "Password is incorrect";

    status.innerText = "Loggedin successful!";

    // nested if else
    // if ( userRole == role ) {
    //     if ( userPassword == password ) {
    //         status.innerText = "Loggedin successful!";
    //         return;
    //     } else {
    //         status.innerText = "Password is incorrect"
    //         return;
    //     }
    // } else {
    //     status.innerText = "Unauthorized";
    //     return;
    // }
}