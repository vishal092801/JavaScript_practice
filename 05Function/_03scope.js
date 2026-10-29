let add =40; // there is a variable declared globally. we can access it from anywhre from the code

function sum(a,b){
    let add = a+b; // this fuction scope it is accessible only inside the functions
    console.log(add);
    
}
sum(20,40);
console.log(add);

// similarlly block scope also work like this.
{
    let no = 34;
}
//console.log(no); // it will through a error

// lexical scope 

function outer(){
    let x=9;
    let y=99;
    function inner(){
        let a=9;
        console.log(x); // in this case uper outer funtion ke varible ko inner me use kr skte hai
    }
  //  console.log(a); // but when we will try to access the value of inner fuction to the outside its not possible
    
}


