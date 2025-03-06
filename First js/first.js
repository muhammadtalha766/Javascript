// alert("Hello World!");

//    Datatype in js: We have 7 primitive datatype in js.
//    Primitive datatype: Number, string, boolean, undefined, null, bigint, symbol
//    Non primitive:  objects(collection of values{key: value}) -> array and function
//    null datatype in also object but it is primitive too.

// let fullName = "Muhammad Talha";
// let x = null;
// let age = 21;
// age = 22;     modify age variable
// console.log(fullName);
// console.log(null);
// console.log(age);
// console.log(typeof fullName);  

//    create objst
const student = {
    // key : value 
    fullName : "Muhammad Talha",
    age : 21,
    cgpa : 3.5,
    isPass : true, // js is case-sensitive True🚫(it is use in python) true✅(use in js)
};
console.log(student);
console.log (student.fullName);
console.log (student.age);
console.log (student["age"]);  // 2nd method

student["age"] = student["age"] + 1; // modify age
console.log(student["age"]);

student["fullName"] = "Nouman Ali";
console.log(student["fullName"]);

//   let -> ko update/modify kr skty hn 
//   const -> update/modify ni ho skty 
//   const obj ki key -> update ki ja skti hn

