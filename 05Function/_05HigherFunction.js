// which function is called higher order function 
// function which take a function as a argument is called higher order function.

function HigherFunc(func,n){
    for(let i= 0; i<n; i++){
        func();
        
    }
}

function greet(){
    console.log("hello beta !");
}

HigherFunc(greet, 5); // in the parameter we can not call the function like greet(); 