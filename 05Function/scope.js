let add =40; // there is a variable declared globally. we can access it from anywhre from the code

function sum(a,b){
    let add = a+b; // this fuction scope it is accessible only inside the functions
    console.log(add);
    
}
sum(20,40);
console.log(add);
