const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content")
content.textContent = "Lets Play Rock Paper Scissors. Please Choose Rock Paper or Scissor."
container.appendChild(content)

let winner = ""
const paper = 0
const rock = 1
const scissors = 2
let playerScore = 0
let computerScore = 0;
let playerChoice;
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        playerChoice = button.id
        playGame(playerChoice)
    });
});


function getComputerChoice(){
num = Math.random() * 100
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





function playGame(choice){
let compChoice = getComputerChoice()
if (playerChoice == "rock"){
    playerChoice = 1
}
else if(playerChoice == "scissor"){
    playerChoice = 2
}
else{
    playerChoice = 0
}
const playerchoice = document.querySelector("#playerchoice")
const compchoice = document.querySelector("#compchoice")
const winnerchoice = document.querySelector("#winner")
if (playerChoice == 1){
    playerchoice.textContent = "Player has chosen Rock"
}
if (playerChoice == 0){
    playerchoice.textContent = "Player has chosen Paper"
}
if (playerChoice == 2){
    playerchoice.textContent = "Player has chosen Scissor"
}
if (compChoice== 1){
    compchoice.textContent = "Computer has chosen Rock"
}
if (compChoice == 0){
    compchoice.textContent = "Computer has chosen Paper"
}
if (compChoice == 2){
    compchoice.textContent = "Computer has chosen Scissor"
}
else if (playerChoice == compChoice){
    winnerchoice.textContent = "it is a tie"
    winner = "nobody"
}
else if(playerChoice == 0 && compChoice == 1){
    winnerchoice.textContent = "Paper beats rock"
    winner = "Playerr"
    playerScore += 1
}
else if(playerChoice == 0 && compChoice == 2){
    winnerchoice.textContent = "Scissor beat paper"
    winner = "Computerr"
    computerScore +=1
}
else if(playerChoice == 1 && compChoice == 0){
    winnerchoice.textContent = "Paper beats rock"
    winner = "Computer"
    computerScore +=1
}
else if(playerChoice == 1 && compChoice == 2){
    winnerchoice.textContent ="Rocks beat scissors"
    winner = "Player"
    playerScore += 1}

else if(playerChoice == 2 && compChoice == 0){
    winnerchoice.textContent = "Scissor beat Paper"
    winner = "Player"
playerScore += 1}
else if(playerChoice == 2 && compChoice == 1){
    winnerchoice.textContent = "Rock beat Scissor"
    winner = "Computer"
computerScore +=1}      

const result = document.querySelector("#result");
result.textContent = winner + " has won the game" +" Current Score: " + "Computer: "+computerScore +" Player: "+ playerScore


}


