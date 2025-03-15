// let student= {
//     name : "Talha",
//     marks : 100,
//     printmark : function(){
//         console.log("Marks is equal to", this.marks);
//     }
// }

// object 1
const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    }
};

// object 2
const talha = {
    salary : 500000,
};

// object 2 .__proto__ = object 1
talha.__proto__ = employee;

// let call 
console.log(talha);
console.log(talha.calcTax());