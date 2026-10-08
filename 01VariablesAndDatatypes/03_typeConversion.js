//let x = "25"
//let y = Number(x); // this the way to convert the type of the data 
/* as  we know that in js what do we write in double Qoute treated as string 
and if we want to make the "25 " as a number then we have to do type conversion */

//console.log(x);
//console.log(y);
//
//console.log(typeof x);
//console.log(typeof y);
/*
let a = "33abc"
let b= Number(a);
console.log(b); // it will show NaN means it Not a Number
console.log(typeof b); // shows output as a number
*/


/** 
let a1 = "";
let b1 = "hello";

console.log(Boolean(a1));
console.log(Boolean(b1));
Empty string = nothing → false
Non-empty string = something exists → true

This is called truthy and falsy values in JavaScript. */

let num1= 29; // 0 for false and 1 for true
// 0 → false, any other normal number → true.
let num2 = -7;

//console.log(Boolean(num1));
//console.log(Boolean(num2));
//
//let str1 = "hello"
//let str2 = " hitesh"
//
//let str3 = str1 + str2
//console.log(str3);

//console.log("5" + 3); // here "5" come first so then the string concatination will be done  
//console.log(5 + "3");
//console.log("5" + 3 + 2);
//console.log(5 + 3 + "2"); // here first addition will be done then concatinate string 

console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);
/**
 The key point is:

With -, *, and /, JavaScript tries to convert the string into a number automatically.

1. "10" - 5

"10" is a string, but - is a numeric operator.
 */

/**
 console.log(10 % 3);
console.log(15 % 4);
console.log(20 % 5);

let xl= 5;

console.log(++xl);
console.log(xl);

 */

let x = 5;

console.log(x++);
console.log(x);
