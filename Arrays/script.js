// Interiew qstn: string are immutable while array are mutable 

// let marks = [45, 64, 76, 86, 21];
// console.log(marks);
// console.log(marks.length);  // It is a property, not method

// let superhero = ["superman", "spiderman", "thor", "ironman", "hulk", "captain America"]
// console.log(superhero);
// console.log(typeof superhero);   // array type is object
// console.log(superhero[3], superhero[5]);

// superhero[3] = "antman";  //// arary are meutable

// *** looping over an array
// let marks = [10, 20, 30, 40, 50];
// for (let i=0; i<marks.length ; i++){
//     console.log(marks[i]);
// } 
// console.log(marks.length);

// // for-of 
// for (let i of marks){
//     console.log(i);
// }


// let cities = ["Lahore", "Kasur", "Multan", "Islamabad", "Karachi"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

//// ***** practice qstn
/* For a give array marks of students -> [85,97, 44,37,76,60]
   Find the average of marks */
// let marks = [85,97, 44,37,76,60];
// let sum = 0;
// *** using for loop
// for (let i=0; i<marks.length; i++){
//     sum = sum + marks[i];
// }
// console.log("Average =", sum/marks.length);

// *** using for-of loop
// for (let i of marks ){
//     sum += i;
// }
// console.log("Average =", sum/marks.length);


//// ***** practice qstn2
/* for the given with price of 5 item -> [250, 645, 300, 900, 50]
   All items have an offer of 10% OFF on them. Change the arrray to store final price after applying offer. */

// let items = [250, 645, 300, 900, 50];
// for (let i=0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;
//    console.log(`Value after offer = ${items[i]}`);
// }
// console.log(items); // ye print kro ya uper wli line.


// **** Array method: Push(), pop(), toString(), concat(), unshift(), shift(), slice(), splice()
// let fruit = ["apple", "mango", "onange", "grapes", "banana"];

// console.log(fruit);
// fruit.push("Strawberry");      //push()-> add to end
// console.log(fruit);

// let deletedItem = fruit.pop();   // pop()-> delete end & return
// console.log(fruit);
// console.log("Deleted item:", deletedItem );

// * tostirng
// console.log(fruit);
// console.log(fruit.toString());   // convert array in string 

// * concat
// let marvelHeroes = ["thor", "ironman", "antman"];
// let dcHeroes = ["superman", "spiderman", "batman"];
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// * unshift method: add to start (work as push but in start)
// let fruit = ["apple", "bananna"]
// fruit.unshift("mango");
// console.log(fruit);

// let deletedItem = fruit.shift();  // work like pop remove from start
// console.log(deletedItem);


// * slice() -> return a piece of array note: it is immutable
// let marvelHeroes = ["thor", "spiderman", "antman", "superman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(0,2));

//* splice method <splice(startidx, delcount, newele1,2...)> -> change original array (add, remove, replace)
let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101,102);
// console.log(arr);

arr.splice(2, 0, 101)
console.log(arr);