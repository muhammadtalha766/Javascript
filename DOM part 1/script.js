// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let button = document.getElementById("mybutton");
// console.dir(button);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

//  *** queaySelector()  return nodelist
// let elements = document.querySelector("p");  // 1st element
// console.dir(elements);


// let allEle = document.querySelectorAll(".heading-class"); // all element
// console.dir(allEle);

// *** DOM properties: tagName, innerText, InnerHtml, textContent
let elements = document.querySelector("p");  // 1st element
console.dir(elements);
//* this is called getter
console.dir(elements.tagName);
console.dir(elements.innerText); // it will return inner text only
console.dir(elements.innerHTML);  // it will return innerHtml tag content aslo
//* textContant work like innerText but it return hidden content aslo
//* setter code dynamically change tag and contant
// let setter = elements.innerText = "Talha";
let setter = elements.innerHTML = "<div><i> Talha </i><div/>";
console.dir(setter);

// console.dir(document.body.firstChild);  // this will return text node but in DOM tree generally focus on element node
// console.dir(document.querySelector("div").children);  
