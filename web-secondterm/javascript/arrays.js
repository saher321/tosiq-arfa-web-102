// const cities = [ "Lahore", "Multan", "Karachi" ]
// cities.splice(1, 1, "Isalamabad")
// console.log(cities)

// const colors = [ "Purple", "Black", "White", "Orange" ]
// colors.pop()
// colors.push("Green")
// colors.shift()
// colors.unshift("Red")
// console.log(colors)
// const newArray = [ ...cities, ...colors ]
// const newArray = cities.concat(colors)
// console.log(newArray)

const users = [
    { id: 101, name: "Alex", role: "User" },
    { id: 102, name: "Martha", role: "Admin" },
    { id: 103, name: "Sam", role: "Vendor" },
];
users.map((user) => {
    console.log(user.name , "=>", user.role)
})