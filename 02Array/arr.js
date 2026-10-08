const arr = [1,2,3,4,5];
//console.log(arr);

const my_heroes = ["Shaktiman", "hatim", "vikral"];
//console.log(my_heroes);

//console.log(arr[0]);

// array methods 
arr.push(6);

let arr2 = new Array(5,4,3,2,1); // its clear that array is an object hare
arr2.push(10)
//console.log(arr2);
//console.log(arr2.push(12)); // here output will be size of the array because push return the length of array

arr2.pop();
//console.log(arr2);
//console.log(arr2.includes(9));
//console.log(arr2.indexOf(3));

// lets move for the join(). join() converts all elements of an array into one string.

// let joinArray =  arr2.join();
// console.log(joinArray); // this output gives string which includes , (comas)
let joinArray =  arr2.join(" ");
//console.log(joinArray);

const words = ["I", "love", "JavaScript"];

let joinWord = words.join(" ");
// console.log(joinWord);

// " slice and splice"
// slice 
let nums = new Array(10,20,30,40,50);
//nums.slice(0,4); // slice can not make changes in the original array so we have to store it at first
let a = nums.slice(0,4);
//console.log(a);

//splice
// const x = new Array(1,3,5,7,9);
// y= x.splice(0,3);
// console.log(y);

/**
 *  This is a very common JavaScript interview question, so you should be able to answer it clearly in 20–30 seconds.

Interview answer

The main difference between slice() and splice() is that slice() does not modify the original array, whereas splice() modifies the original array.

slice() is used to extract a portion of an array and returns a new array.

splice() is used to add, remove, or replace elements in the original array.
 */
const x = new Array(1,3,5,7,9);
 x.splice(0,3);
 console.log(x);











