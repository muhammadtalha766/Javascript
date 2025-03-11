let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".images");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    // now computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);
 
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});