// 1️⃣ Initial Scores aur HTML elements ko access kiya
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".images");  // Sare choices (rock, paper, scissors)
const msg = document.querySelector("#msg");            // Message display karne ka div

const userScorePara = document.querySelector("#user-score");  // User score ka span
const compScorePara = document.querySelector("#comp-score");  // Computer score ka span

// 2️⃣ Function: Computer ki choice randomly generate karega
const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"]; // Possible choices
    const randIdx = Math.floor(Math.random() * 3); // 0, 1, ya 2 generate hoga
    return option[randIdx]; // Random choice return karega
};

// 3️⃣ Function: Agar game draw ho jaye
const drawgame = () => {
    console.log("Game was draw.");
    msg.innerText = "Draw Game, Play again."; // Message update kiya
    msg.style.backgroundColor = "rgb(82, 30, 130)"; // Purple background for draw
};

// 4️⃣ Function: Winner decide karega aur score update karega
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // Agar user jeeta
        userScore++; // User ka score increment kiya
        userScorePara.innerText = userScore; // HTML me score update kiya
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`; // Winning message
        msg.style.backgroundColor = "green"; // Green color for win
    } else {
        // Agar computer jeeta
        compScore++; // Computer ka score increment kiya
        compScorePara.innerText = compScore; // HTML me score update kiya
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`; // Losing message
        msg.style.backgroundColor = "red"; // Red color for loss
    }
};

// 5️⃣ Function: Game logic handle karega (User aur Computer ke choices ko compare karega)
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    // Generate computer's choice
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    // Agar dono choices same hain, to draw hoga
    if (userChoice === compChoice) {
        drawgame();  // Calling drawgame function
    } else {
        let userWin = true; // Assume user wins

        // Winning conditions check ki
        if (userChoice === "rock") {
            // Rock vs Paper/Scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // Paper vs Rock/Scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // Scissors vs Rock/Paper
            userWin = compChoice === "rock" ? false : true;
        }

        // Winner ka result show kiya
        showWinner(userWin, userChoice, compChoice);
    }
};

// 6️⃣ Event Listener: Jab user kisi option pe click kare
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Button ka id (rock, paper, scissors)
        playGame(userChoice); // Game start kiya
    });
});
