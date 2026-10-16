const std ={
    name: "vishal",
    marks: 99,
    age:24,

};
// here we are learing how to do operations. like add, update and delete;
std.gender = "male"; // its insert the new key and value in the object;
console.log(std.gender);

// if we want to update any key then we do same thing like 
std.name= " Hashi";
console.log(std.name);

// if we want to delete any key then we use a delete operator
delete std.gender;

console.log(std);

