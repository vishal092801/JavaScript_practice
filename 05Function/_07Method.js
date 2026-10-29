// what is method , methods are the functions which is define inside the object

let calculator = {
    num: 55,
    add: function (a,b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    mul: function (a,b){
        return a*b;
    }
};

 let a = calculator.add(3,5);
 console.log(a);
 
