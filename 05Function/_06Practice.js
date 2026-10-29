function evenOddFactory(request){
    if(request== "odd"){
        return function(n){
            console.log(!(request%2==0));}
        
    }
    if(request== "even"){
        return function(n){console.log((request%2==0));}
        
    }
    else{
        console.log("Invalid request");
        
    }
}

let request = "odd";

