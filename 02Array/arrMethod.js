let arr  = ["bmw", "ferrari","toyota"];
console.log(arr);

// push method 
arr.push("tata");
//console.log(arr);
// pop operation is used to perform remove a elment from the last of the array;
arr.pop();
//console.log(arr);

// unshift is used to store a element is the starting of the aray 
arr.unshift("shonu");
//console.log(arr);

// shift is used to remove the element from the beginning of the arrays 
arr.shift();
//console.log(arr);
arr.push("tata");

console.log(arr.indexOf("tata")); // basically its return the value of the Index of the data
// otherwise it return -1


// includes
//console.log(arr.includes("tata")); // if its contains the value then true otherwise false

// concatinate 

let firstName= "vishal"; // same use as well as in array

let lastName = "gharami"

let fullName = firstName.concat(lastName);
//console.log(fullName);

// reverse 
console.log(arr.reverse()); // its reverse the array

// sorting

let alpha = ['d','g','b','c'];
console.log(alpha.sort());
// its is only work on string but in numbers its not return the expected values









