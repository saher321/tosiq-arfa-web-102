var a = 10;
console.log(a);
var a = 20;
console.log(a);
// var has global scope & you can re-declare and re-intialize same variable

let b = 10;
b = 20;
console.log("Let value: ", b);
// let has block scope & you can not re-declare and can re-intialize same variable

const c = 123;
// c = 34;
console.log("Const value: ", c);
// const has block scope & you can not re-declare and not re-intialize same variable