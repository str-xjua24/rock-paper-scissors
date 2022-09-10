const choices = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0;
let playerInput, userChoice, computerChoice;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  switch(playerSelection) {
    case "rock":
      if (computerChoice == "scissors") {
        console.log("Rock beats scissors. You win.");
        playerScore++;
      } else if (computerChoice == "paper") {
        console.log("Paper beats rock. You lose.");
        computerScore++;
      } else {
        console.log("Tie");
      }
      break;
    case "paper":
      if (computerChoice == "rock") {
        console.log("Paper beats rock. You win.");
        playerScore++;
      } else if (computerChoice == "scissors") {
        console.log("Scissors beats paper. You lose.");
        computerScore++;
      } else {
        console.log("Tie");
      }
      break;
    case "scissors":
      if (computerChoice == "paper") {
        console.log("Scissors beats paper. You win.");
        playerScore++;
      } else if (computerChoice == "rock") {
        console.log("Rock beats scissors. You lose.");
        computerScore++;
      } else {
        console.log("Tie");
      }
      break;
    default:
      console.log("String error");
  }
}

function game() {
  while (playerScore != 5 || computerScore != 5) {
    alert(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    playerInput = prompt("Enter rock, paper, or scissors:");
    userChoice = playerInput.toLowerCase();
    computerChoice = choices[getComputerChoice()];

    playRound(userChoice, computerChoice);
  }
}

game();