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
// let promise = new Promise ((resolve, reject) => {
//     console.log("I'm a promise.");
//     resolve("success");
//     // reject("failed");
// });


// **promise   
// let promise = getData(432);
// function getData(dataId){
//     return new Promise ((resolve, reject)=>{
//        setTimeout(()=>{
//         console.log("data", dataId);
//         resolve("success");
//        }, 5000);
//     });
// }

// ** .then() and .catch()
// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a Promise..");
//         resolve("success....");
//         // reject("rejected....");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise done..", res);
// });
// promise.catch((err) =>{
//     console.log("errro", err);
// });


// *** promises chaining
// function asyncFun1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data1")
//             resolve("success data 1");  
//         }, 3000);
//     });
// }

// function asyncFun2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data2")
//             resolve("success data2");  
//         }, 3000);
//     });
// }
// *method one
// console.log("fetching data1....");
// let p1 = asyncFun1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2....");
//     let p2 = asyncFun2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// }); 

// * method two
// console.log("fetching data 1...");
// asyncFun1().then((res) =>{
//     console.log("fetching data 2...");
//     asyncFun2().then((res) =>{});
// });

// ** example 2 promise chaining
// function getData(dataId){
//     return new Promise((resolve, reject) =>{
//         setTimeout( () =>{
//             console.log("Data ID:", dataId);
//             resolve("succes");
//         }, 2000);
//     });
// }
// console.log("getting data 1");

// getData(1).then(() =>{
//     console.log("Getting data 2");
//     return getData(2);
// })
// .then((res)=>{
//     console.log("Getting data 2");
//     return getData(3);  // 3rd/last k liya ,then lagany ki zarorat ni ha
// });



// *** Async await  ye function k sath use hota h or ye 1 promise return krta ha

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather api");
//             resolve(200);
//         }, 2000);
//     });
// }
// async function getWeatherData(){
//     await api();  // await siraf async function k andr use hoga is liya ye new function banya ha
//     await api(); // 2nd time call
// }
// getWeatherData();


// ** use async await in previous example
function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout( () =>{
            console.log("Data ID:", dataId);
            resolve(200);    // 200 means success.
        }, 2000);
    });
}

async function getAllData(){ 
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
    console.log("getting data 4");
    await getData(4);
    console.log("getting data 5");
    await getData(5);
}
getAllData();