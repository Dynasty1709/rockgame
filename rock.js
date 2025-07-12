console.log("Lets Play Rock Paper Scissors")
console.log("Please Choose Rock Paper or Scissor")
console.log("Enter 0 for Paper, 1 for Rock, and 2 for Scissor")
let winner = ""
const paper = 0
const rock = 1
const scissors = 2
let playerScore = 0
let computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let playerChoice = button.id
    });
});


function getComputerChoice(){
num = Math.Random * 100
if (num <20){
    return 1;}
else if(num < 50){
    return 2;
}
else{
    return 0;
}
}

let rounds = 0;

let compChoice = getComputerChoice()


if (playerChoice == 1){
    console.log("Player has chosen Rock")
}
if (playerChoice == 0){
    console.log("Player has chosen Paper")
}
if (playerChoice == 2){
    console.log("Player has chosen Scissor")
}
if (compChoice== 1){
    console.log("Computer has chosen Rock")
}
if (compChoice == 0){
    console.log("Computer has chosen Paper")
}
if (compChoice == 2){
    console.log("Computer has chosen Scissor")
}
else if (playerChoice == compChoice){
    console.log("it is a tie")
    winner = "nobody"
}
else if(playerChoice == 0 && compChoice == 1){
    console.log("Paper beats rock")
    winner = "Playerr"
    playerScore += 1
}
else if(playerChoice == 0 && compChoice == 2){
    console.log("Scissor beat paper")
    winner = "Computerr"
    computerScore +=1
}
else if(playerChoice == 1 && compChoice == 0){
    console.log("Paper beats rock")
    winner = "Computer"
    computerScore +=1
}
else if(playerChoice == 1 && compChoice == 2){
    console.log("Rocks beat scissors")
    winner = "Player"
    playerScore += 1}

else if(playerChoice == 2 && compChoice == 0){
    console.log("Scissor beat Paper")
    winner = "Player"
playerScore += 1}
else if(playerChoice == 2 && compChoice == 1){
    console.log("Rock beat Scissor")
    winner = "Computer"
computerScore +=1}      
rounds +=1
console.log(winner + " has won the game");
console.log("Current Score: " + "Computer: "+computerScore +" Player: "+ playerScore)



