console.log("Hello, GTR!");

const choices = ["rock", "paper", "scissors"];

const humanScore = getHumanScore();
const computerScore = getComputerScore();

function playRound(humanChoice, computerChoice) {
// code here
}

function playGame() {
    
}


function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
  let choice;
  do {
    choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
  } while (!choices.includes(choice));
  return choice;
}
console.log(getHumanChoice());