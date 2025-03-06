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
for (let i=0; i<=10; i++){
    if (i%2 === 0){
        console.log("Even no. are:", i)
    }
}