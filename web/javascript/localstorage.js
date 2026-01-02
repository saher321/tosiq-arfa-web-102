// setItem(key, value);
// getItem(key);
// removeItem(key);
// clear()
function showInfo(){
    document.getElementById("result").innerText = `
        ${localStorage.getItem("name")}, ${localStorage.getItem("email")}
    `
}
function storeInfo () {
    var name = "Ali";
    var email= "ali@gmail.com";
    var pswrd= "1234";
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("password", pswrd)
}
function removeInfo(key){
    localStorage.removeItem(key)
}

function clearAll(){
    localStorage.clear();
}
// id
// name, email, password, address, cnic, phone