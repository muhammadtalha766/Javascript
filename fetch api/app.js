const dragonBall = "https://dragonball-api.com/api/characters/1";

const name = document.querySelector("#name");
const img = document.querySelector("#image");
const btn = document.querySelector("#btn")

async function getData() {
    let response = await fetch(dragonBall); // fetch-api returns promises
    console.log(response);
    let data = await response.json();  // data ko readable form ma banay k liya json() use hota ha, it is important to use.
    console.log(data);
    name.innerText = data.name;

    img.src = data.image;
    // img.src = data.transformations[2].image;
    img.alt = data.name;   

}

btn.addEventListener("click", getData);
