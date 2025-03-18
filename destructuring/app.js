let object = {
    name: "Talha",
    roll: 33,
    school: "SIR"
};

// Destructuring (yeh sirf variables bana raha hai, object ko change nahi kar raha)
let { name, roll, school } = object;

console.log(object); // Pura object print karega
console.log(name);   // "Talha"
console.log(roll);   // 33
console.log(school); // "SIR"




// *** for array
let array = [10, 30, 20, 50];
// let a = array[0];
// let b = array[1];
// let c = array[2];
// let d = array[3];

let [a,b,c,d] = array; // uper wali 4 lines ko 1 line ma likhny k liya, loop b use kr skty hn