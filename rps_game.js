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
        alert("Rock beats scissors. You win.");
        playerScore++;
      } else if (computerChoice == "paper") {
        alert("Paper beats rock. You lose.");
        computerScore++;
      } else {
        alert("Tie");
      }
      break;
    case "paper":
      if (computerChoice == "rock") {
        alert("Paper beats rock. You win.");
        playerScore++;
      } else if (computerChoice == "scissors") {
        alert("Scissors beats paper. You lose.");
        computerScore++;
      } else {
        alert("Tie");
      }
      break;
    case "scissors":
      if (computerChoice == "paper") {
        alert("Scissors beats paper. You win.");
        playerScore++;
      } else if (computerChoice == "rock") {
        alert("Rock beats scissors. You lose.");
        computerScore++;
      } else {
        alert("Tie");
      }
      break;
    default:
      alert("String error");
  }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    alert(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    playerInput = prompt("Enter rock, paper, or scissors:");
    userChoice = playerInput.toLowerCase();
    computerChoice = choices[getComputerChoice()];

    playRound(userChoice, computerChoice);
  }
}

game();