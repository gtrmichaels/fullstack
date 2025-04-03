// Initialize the scores for both the human and the computer
let humanScore = 0;
let computerScore = 0;

// Function to generate the computer's choice (rock, paper, or scissors)
function getComputerChoice() {
    // Math.random() generates a random decimal between 0 and 1.
    // Multiply it by 3 to get a number between 0 and just below 3.
    // Math.floor() then rounds it down to an integer: 0, 1, or 2.
    const randomNum = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    // Map the random number to one of the three choices:
    if (randomNum === 0) return "rock";    // If the number is 0, return "rock"
    if (randomNum === 1) return "paper";   // If the number is 1, return "paper"
    return "scissors";                     // If the number is 2, return "scissors"
}

// Function to get the human player's choice
function getHumanChoice() {
    // Use prompt() to ask for input from the player. The prompt returns a string.
    // .trim() removes any extra spaces at the beginning or end.
    // .toLowerCase() makes the input case-insensitive by converting it to lowercase.
    return prompt("Enter rock, paper, or scissors:").trim().toLowerCase();
}

// Function to play a single round of the game
function playRound(humanChoice, computerChoice) {
    // Display the choices made by both players
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
   
    // Check if both players chose the same option (it's a tie)
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        // Check if the human wins (Rock beats Scissors, Paper beats Rock, Scissors beats Paper)
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // Human wins the round
        console.log("You win this round!");
        humanScore++;  // Increment the human's score by 1
    } else {
        // Computer wins the round
        console.log("You lose this round!");
        computerScore++;  // Increment the computer's score by 1
    }
    // Display the current scores after each round
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
}

// Function to manage the full game (5 rounds)
function playGame() {
    // Loop 5 times to play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Get the player's choice and the computer's random choice for each round
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        // Play the round using the human and computer choices
        playRound(humanChoice, computerChoice);
    }
    // After 5 rounds, display the final score
    console.log("Final Score:");
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
   
    // Determine the winner based on the final scores
    if (humanScore > computerScore) {
        // Human wins the game
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        // Computer wins the game
        console.log("Better luck next time! The computer won.");
    } else {
        // It's a tie overall
        console.log("It's a tie overall!");
    }
}

// Start the game immediately when the script runs
playGame();
