//         for loop
// for (let i=1; i<=5; i++){
//     console.log("Hello world!");
// }


//     sum of 1 to 5
// let sum =0;
// for (let i=1; 1<=2; i++){
//     sum=sum+1;
// }
// console.log("Sum =", sum);


//     while loop
// let i=1;
// while (i<=5){
//     console.log("Hello world!");
//     i++;
// }

//    do while loop run at least one time
// let i = 20;
// do{
//     console.log("Hello world!");
//     i++
// }while(i<=10);

//   for-of loop (string or array ma use hoti ha)
// "strings" mai space ko bhi count kerta hai h for-of loop

// let str = "Hello world";
// for (let i of str){
//     console.log("i =", i);
// }

// let str = "Hello world";
// size = 0;
// for (let i of str){
//     console.log("i =", i);
//     size++;
// }
// console.log("Size of str =", size);


//   for-in loop (use for objects and array)
// let student = {
//     name : "Talha",
//     age : 21,
//     school : "SIR",
// };
// for (let key in student){
//     console.log("key =", key, "Value =", student[key]);
// }

// practice qs1 print even number 0 to 10
// for (let i=0; i<=10; i++){
//     if (i%2 === 0){
//         console.log("Even no. are:", i)
//     }
// }


// *** forEach loop in array it is only use in array not string. it is higher order function/method in js.
// let arr = [1, 3, 4, 6, 7];
// arr.forEach(function printVal(val){  
//     console.log(val);
// });

// gerenally function call in forEach in the form of arraw-function 
// arr.forEach((val)=> {
//     console.log(val);
// });


// ** we can pass 3 thing in forEach (val, idx, arr) -> value, index and array itself
// let arr = ["Lahore", "Kasur", "Murree"];
// arr.forEach((val, idx, arr)=>{
//     console.log(val.toUpperCase(), idx, arr)
// });


// *** map method on array it is similar to forEach
 // map: create a new array with the result of some operation. The value its callback returns are used to form new array.
// let nums = [34, 43,53];
// nums.map((val)=>{
    //     console.log(val);
    // });
    
// *new arary create using map
// let nums = [34, 43,53];
// let newArray = nums.map((val)=>{
//     return val * 5;
// });
// console.log(newArray); // this is new array
// console.log(nums);  // this is origin array


// *** filter method: also create a new array ye array k 1, 1 indiviual element ko filter krna 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter((val)=>{
//     // return val % 2 === 0;  // return even num
//     // return val % 2 !== 0; // reuturn odd num
//     return val > 3; // condition 
// });
// console.log(evenArr);  // new array
// console.log(arr); // origin array


// *** reduce method: It perforn some operation & reduces the array to a single value. It returns that single value.
// let arr = [1, 3, 4, 5];
// const output = arr.reduce((prev, val)=>{
//     return prev + val;
// });
// console.log(output);