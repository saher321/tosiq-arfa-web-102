const users = [
    { id: 2032, name: "Martha", role: "Vendor"},
    { id: 9763, name: "John", role: "Admin"},
    { id: 1101, name: "Sam", role: "Vendor"},
    { id: 5675, name: "Alice", role: "User"},
    { id: 1963, name: "Bill", role: "User"},
    { id: 1244, name: "Zyn", role: "User"},
]
showData(users)
function showData (users) {
    let userlist = document.getElementById("userlist")

    users.map((user) => {
        userlist.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
        </tr>
        `
    })
}


function filterUsers() {
    let role = document.getElementById("role").value
    let userlist = document.getElementById("userlist")
    userlist.innerHTML = ""

    const filteredData = users.filter((user) => user.role == role )

    if (role == "All") {
        showData(users)
    } else {
        showData(filteredData)
    }
}