
function showResult() {

    var userRole        = document.getElementById("role").value;
    var userPassword    = document.getElementById("psw").value;

    var status  = document.getElementById("status");

    var role = "Admin";
    var password = 1234;

    if ( userRole == role ) {
        if ( userPassword == password ) {
            status.innerText = "Loggedin successful!";
            return;
        } else {
            status.innerText = "Password is incorrect"
            return;
        }
    } else {
        status.innerText = "Unauthorized";
        return;
    }
}