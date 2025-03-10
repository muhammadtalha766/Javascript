let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=> {
    console.log("button was clicked");
    // alert("welcome");

    let a = 25;
    a++;
    console.log(a); 
};

let box = document.querySelector("div");
box.onmouseover= () => {
    console.log('you are innside the div.');
}


// event object (evt) it is a valable
let btn2 = document.querySelector("#btn2");
// btn2.onclick = (evt)=> {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// };

// *** using event listner method btn.addEventlistener (event, callback(function))
// envet lister k through hum same event py multiple kaam krwa skty hn

btn2.addEventListener("click", () =>{
    console.log("Button 2 was clicked..")
});

btn2.addEventListener("click", (evt) =>{
    console.log("Button 2 was clicked - handler..")
    console.log(evt);
    console.log(evt.type);
});


// *** remove event lister serach on mdn/googel for more 
// * the callback reference should be same to remove
btn2.removeEventListener("click", () =>{
    console.log("Button 2 was clicked..")
});