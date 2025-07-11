console.log("Lets Play Rock Paper Scissors")
let winner = ""
const paper = 0
const rock = 1
const scissors = 2
let playerScore = 0
let computerScore = 0;


function getComputerChoice(){
num = Math.Random * 100
if (num <20){
    return 1;}
else if(num >=20 && num <=50){
    return 2;
}
else if(num >50){
    return 0;
}
}

function getPlayerChoice(){
    console.log("Please Choose Rock Paper or Scissor")
    console.log("Enter 0 for Paper, 1 for Rock, and 2 for Scissor")
    return prompt("Enter Choice Now: ")
}
let rounds = 0;
while(rounds <=5){
let compChoice = getComputerChoice()
let playerChoice = playerChoice()
if (compChoice == 1){
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
    winner = "Playerr"
    playerScore += 1
}
else if(playerChoice == 0 && compChoice == 2){
    winner = "Computerr"
    computerScore +=1
}
else if(playerChoice == 1 && compChoice == 0){
    winner = "Computer"
    computerScore +=1
}
else if(playerChoice == 1 && compChoice == 2){
    winner = "Player"
    playerScore += 1}

else if(playerChoice == 2 && compChoice == 0){
    winner = "Player"
playerScore += 1}
else if(playerChoice == 2 && compChoice == 1){
    winner = "Computer"
computerScore +=1}      
rounds +=1
console.log(winner + "has won the game");
console.log("Current Score: " + "Computer: "+computerScore +"Player: "+ playerScore)
}

