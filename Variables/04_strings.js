/**
 * 1. What is a String?

A string is a sequence of characters used to represent text.
 */
 let name = 'Vishal';
 let city= ' Bhopal';
 let language = ' javascript';

// console.log(name);
 //console.log(city);
 //console.log(language);
//
 ///**
 // * 2. String Indexing
//
//every character in a string has an index.
//
//Index starts from 0.
 // */
 //console.log(name[0]);
 //console.log(name[5]);
 //console.log(name[8]); // it will show the undefind because string has only 6 charectors

 /**
  * 3. length

The most basic string property is length.
  */

//console.log(city.length);// its show the lenght of the city string 

//. Some important string methods 

// 1 toUppercase
//console.log(name.toUpperCase());
// 2 lower case 
//console.log(language.toLocaleLowerCase());
// 3 charAt()
//console.log(name.charAt([0]));

// 4  indexOf()
let name1= "ishika"
//console.log(name.indexOf("i")); // agar name me Vishal hai to i ka idex hi show karega na ki I ka. -1 for not
//console.log(name1.indexOf("i")); // agar name me ishika me i phle aata hai to 1st i ke index ko show krta hai

//5 includes()
console.log(name.includes("sha"));
// out must be simple true or false 

// 6 startsWith()
console.log(name.startsWith("ha"));
console.log(name.startsWith("Vi"));

// 7 endsWith
console.log(language.endsWith("pt"));










 