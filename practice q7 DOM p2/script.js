let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector("body").prepend(newbtn);
console.log(newbtn);

// // q2 dynamic styling k liya clasList use hoti ha
let para = document.querySelector(".mypara");
console.log(para);
para.classList.add("newclass");  // add new classes

// para.classList.remove("newclass");  // remvoe classes