let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");  // using classlist (css file)
        body.classList.remove("light");  // must be remove other wise it will run just 1 time.
    }
    else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }   

    console.log(currMode);
});
