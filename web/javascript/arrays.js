var list = document.getElementById("u-list");

var mylist = ["Shoes", "Mouse", "Computer", "Clothes"];
// mylist.push("Apple");
// mylist.unshift("Apple");
// mylist.splice(1, 0, "Apple");

// ternary condition
mylist.length > 0 ?
mylist.map((item) => {
    list.innerHTML += `<li> ${item} </li>`
}) : document.write("No records were found!");

console.log(mylist);


