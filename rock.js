console.log("Lets Play Rock Paper Scissors")
let winner = ""
const paper = 0
const rock = 1
const scissors = 2



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

let compChoice = getComputerChoice()
if (compChoice == 1){
    console.log("Computer has chosen Rock")
}
if (compChoice == 0){
    console.log("Computer has chosen Paper")
}
if (compChoice == 2){
    console.log("Computer has chosen Scissor")
}
console.log(winner + "has won the game");

