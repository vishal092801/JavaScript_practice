// here we go , learn how to create object of objects

const stdInfo ={
    Vishal :{
        grade: "A+",
        city: "Pakhanjore"
    },
    Hashi :{
        grade: "A",
        city: "Kapsi"
    },
    Biraj: {
        grade: "B+",
        city: "Raipur"
    }

};

console.log(stdInfo.Biraj.city);
// and also do operations like add property , delete and so on.


// similarly we can also create a array of object 

const arrOfObj =[
    {
        Name: "Vishal",
        age: 24,
        city: "bhopal"
    },
    {
        Name: "Biraj",
        age: 22,
        city: "Pakhanjore"
    },
    {
        Name: "Hashi",
        age: 21,
        city: "Kapsi"
    },

];

console.log(arrOfObj);
console.log(arrOfObj[0].Name);


