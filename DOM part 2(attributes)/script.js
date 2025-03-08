// *** getAttribute(attr)
// let div = document.querySelector("div");  // this is for div
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);


// let para = document.querySelector("p");       // this is for paraghaph
// console.log(para.getAttribute("class"));

// *** setAttritube(attr, value)
// let para = document.querySelector("p"); // this is for paraghaph
// console.log(para.setAttribute("class", "newpara"));


// style attribute 
// let div = document.querySelector("div");
// div.style.backgroundColor = "yellow";
// div.style.color = "black";
// div.innerText = "New text"
// // div.innerText = div.innerText + " new text"



// *** Insert new Element (button, heading etc)
// * first we have to create new element
let newbtn = document.createElement("button");
newbtn.innerText = "Click me!";
console.log(newbtn);
// * now select location where we want to add
let div = document.querySelector("div"); 
// div.append(newbtn);  // * add at the end of node (inside)
// div.prepend(newbtn); // * add at the start of the node (inside)
// div.before(newbtn); //* add before the node (outside)
div.after(newbtn); //* add after the node (outside)


//*** delete node */
let para = document.querySelector("p");
para.remove();