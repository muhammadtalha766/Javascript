// aithmatic opr (+, _, *, /, %, **)
let a =10;
let b = 20;
console.log("a =", a, "& b =", b);
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);  //modules
console.log("a ** b =", a**b);  //Exponention means 10^20

/* unary operator 
1- Increment(++) 2-Decrement (--) */
a++;
console.log(a);

// pre or post 
console.log("++a =", ++a);
console.log("a++ =", a++);
console.log("a =", a);

// Assignment opr (=, +=, -=, *=, %=, **= )
a += 4; // a = a + 4
console.log(a);


//comparison opr (==, ===, !=, !==, >, <, >=, <=)
console.log("a==b", a==b); //false
console.log("a!=b", a!=b); //true

a = 5; // number
b = "5"; // string -> number
console.log("a==b", a==b); //true first is convert string into number.
console.log("a===b", a===b); //false bcz it chk datatype strictly

// Logical operator (&&(AND), ||(OR), !(NOT))

// Ternary opr (condition ? b(true output) : c(false output))
age = 25; // "let" is liya ni lagaya qn k phley hi 2sri condition.js wali file ma likh liya ha.
let result = age>=18 ? "adult" : "not adult";
console.log(result);            