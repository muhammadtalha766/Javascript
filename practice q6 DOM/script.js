// *** 1st qstn ans
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " from apna college student."
// console.dir(h2.innerText);


// ** 2nd qstn ans
let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
    div.innerText = `new unique did ${idx}`;
    idx++;
}

// using basic method
// divs[0].innerText = "new unique div 1" ;
// divs[1].innerText = "new unique div 2" ;
// divs[2].innerText = "new unique div 3" ;