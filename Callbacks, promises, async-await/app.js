// *** This is synchronous programming, sequence by sequence ***
// console.log("one");
// console.log("two");
// console.log("three");


// *** Asychronous ***

// function hello(){
//     console.log("Hello World!");
// }
// console.log("one");
// console.log("two");
// setTimeout(hello, 2000);   // *** 2s = 2000mile sec 
// console.log("three");  // *** This will not wait for 2s 
    

// *** callback ***
// function sum(a, b){
//     console.log(a+b);
// }
// function calculator(a, b, sumCallBack){
//     sumCallBack(a, b);
// }
// calculator(5,5, sum); // callBack will not pass with parenthsis

// *** setTimeout is also callback function
// setTimeout((a,b) =>{
//     console.log(a+b);
// }, 2000, 5, 3);  // settimeout takes an optional third, fourth etc, argument which are passed as argument to the callback function.
 


// ** Callback hell
// function getData(dataId, getNextData){
//     setTimeout( () =>{
//         console.log("Data ID:", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
//       // this is nested callback (callback hell)
// getData(2, ()=>{
//     getData(4, ()=>{
//         getData(10, ()=>{
//             getData(20);
//         });
//     });
// });


// *** promises (solution to callback hell)
