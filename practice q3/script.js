let gameNumber = 25;
let userNumber = prompt("Guess the game Number :");

while(userNumber != gameNumber){
    userNumber = prompt("You enter wrong number. Guess again:");
}

console.log("Congratulations you enter the right number.");