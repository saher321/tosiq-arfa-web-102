var list = [
    { id: 1, name: "Peter", email: "peter@gmail.com",  userRole: "Admin" },
    { id: 2, name: "Sam", email: "sam@gmail.com",  userRole: "Admin" },
    { id: 3, name: "Athar", email: "athar@gmail.com",  userRole: "User" },
    { id: 4, name: "Muneeb", email: "muneeb@gmail.com",  userRole: "Vendor" },
    { id: 5, name: "Sara", email: "sara@gmail.com",  userRole: "Vendor" },
    { id: 6, name: "Alexa", email: "alexa@gmail.com",  userRole: "Vendor" },
];

showData();

function showData() {
    var userData = document.getElementById("userData");
    var tbody = '';
    list.map((user, i) => {
        tbody += `
        <tr>
            <td> ${i+1} </td>
            <td> ${user.name} </td>
            <td> ${user.email} </td>
            <td> ${user.userRole} </td>
        </tr>
        `
    });
    userData.innerHTML = tbody;
}


filteredData();
function filteredData() {
    // var filteredData = list.find((item) => { return item.userRole == "Vendor" });

    var filteredData = list.filter((item) => { return item.userRole == "Admin" });
    console.log(filteredData);
}


