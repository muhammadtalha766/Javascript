// *** Method one
let fullName = prompt("Enter Full-Name");
console.log("Your fullName is",fullName);
let removeSpace = fullName.replace(/\s+/g, ""); //  \s+ means spaces "/" ye start kerny k lye use hota koi b next character "/g" means global
let result = `Your username will be ${"@"+removeSpace.toLowerCase()+removeSpace.length}`;
console.log(result);

// *** 2nd method
// let fullName = prompt("Enter Your Full Name :");
// let removeSpace = fullName.replaceAll(/\s+/g ,"");
// let nameLength = removeSpace.length;
// let userName = "@" + removeSpace.toLowerCase() + nameLength;
// let result = `Your username is : ${userName}`;
// console.log(result);