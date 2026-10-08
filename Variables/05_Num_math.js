const score = 400;
//console.log(score ); // here the node js detect the type of the data 
const balance = new Number(100);// Number is a object here
//console.log(balanace);

//console.log(balance.toString());
//console.log(balance.toString().length);
console.log(balance.toFixed(1)); // it shows the 1 fixed decimal value



const anotherNum = 123.7789;

//console.log(anotherNum.toPrecision(4));

const rs = new Number(100000000);

console.log(rs.toLocaleString('en-IN'));
// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)









