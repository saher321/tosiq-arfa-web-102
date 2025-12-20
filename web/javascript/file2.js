// var a = []; 
// [{name: "Carlos", email: "carlose.me@gmail.com"}, {name: "Carlos", email: "carlose.me@gmail.com"}]

// console.log(a.length);

// var a = 10;
// var b = 20;
// var c = a+b;
// console.log(c);

var english    = 66;
var urdu       = 78;
var computer   = 88;
var sst        = 34;
var math       = 93;

var avg = (english + urdu + computer + sst + math) / 5;
console.log(avg);

function printavg() {
    var english    = parseInt(document.getElementById("eng").value);
    var urdu       = parseInt(document.getElementById("ur").value);
    var computer   = parseInt(document.getElementById("com").value);
    var sst        = parseInt(document.getElementById("sst").value);
    var math       = parseInt(document.getElementById("math").value);
    var result     = document.getElementById("result");
    var sum     = document.getElementById("sum");
    var result     = document.getElementById("result");

    var avg = (english + urdu + computer + sst + math) / 5;
    result.innerText = avg;
    sum.innerText = (english + urdu + computer + sst + math)
}
