// function myfun(){
//     console.log("Hello world!");
//     console.log("This is function in js");
// }
// myfun();

// * NaN error : Not a number 
// function funmsg(msg, n){
//     console.log(msg + n);
// }
// funmsg("Hello world ", 555);

// function sum(x, y){ //* parameters (x and y) is local variables -> block scope: curli braces k andr hi
//     s = x + y;
//     return s;  // *return ka baad function ma koi b code run ni hoga
// }
// let val = sum(5, 10);
// console.log(val);

// *** Arrow Function : it is use for small functions
//   *simple sum function 
// function sum(a, b){
//     return a + b;
// }
// let val = sum(5, 5);
// console.log(val);

// ** sum using arrow function
// const sum = (a, b)=>{  // *here "sum" is variable
//     console.log(a + b);
// };
// sum(10, 30);

// * for multiply
// const multiply = (a, b)=>{  
//     return a * b;
// };
// console.log(multiply(10, 30));


// practice qstn : create a function that takes string and return the number of vowels in the string.

// function countVowels(str){
//     let count = 0;
//     for (const char of str){
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" || 
//             char === "o" || 
//             char === "u" )
//             {
//             count++ ;
//             }
//     }
//     return count;
// }
// console.log(countVowels("pakistan"));


// qstn 2 : create same work with arrow-function

const countVow = (str)=>{
    let count = 0;
    for (const char of str){
        if (char === "a" ||
            char === "e" ||
            char === "i" || 
            char === "o" || 
            char === "u" )
            {
            count++ ;
            }
    }
    return count;
}
console.log(countVow("educaion"));