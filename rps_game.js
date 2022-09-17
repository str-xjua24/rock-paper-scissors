const choices = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0;
let result = "";
let playerInput, userChoice, computerChoice;
const playerIcon = document.querySelector('#player-icon');
const computerIcon = document.querySelector('#bot-icon');

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  switch(playerSelection) {
    case "rock":
      if (computerSelection == "scissors") {
        playerIcon.src = 'images/rock.png';
        computerIcon.src = 'images/scissors.png';
        result = "Rock beats scissors. You win.";
        console.log("You win");
        playerScore++;
      } else if (computerSelection == "paper") {
        playerIcon.src = 'images/rock.png';
        computerIcon.src = 'images/paper.png';
        result = "Paper beats rock. You lose.";
        console.log("You lose");
        computerScore++;
      } else {
        playerIcon.src = 'images/rock.png';
        computerIcon.src = 'images/rock.png';
        result = "Tie";
        console.log("Tie");
      }
      break;
    case "paper":
      if (computerSelection == "rock") {
        playerIcon.src = 'images/paper.png';
        computerIcon.src = 'images/rock.png';
        result = "Paper beats rock. You win.";
        console.log("You win");
        playerScore++;
      } else if (computerSelection == "scissors") {
        playerIcon.src = 'images/paper.png';
        computerIcon.src = 'images/scissors.png';
        result = "Scissors beats paper. You lose.";
        console.log("You lose");
        computerScore++;
      } else {
        playerIcon.src = 'images/paper.png';
        computerIcon.src = 'images/paper.png';
        result = "Tie";
        console.log("Tie");
      }
      break;
    case "scissors":
      if (computerSelection == "paper") {
        playerIcon.src = 'images/scissors.png';
        computerIcon.src = 'images/paper.png';
        console.log("You win");
        playerScore++;
      } else if (computerSelection == "rock") {
        playerIcon.src = 'images/scissors.png';
        computerIcon.src = 'images/rock.png';
        result = "Rock beats scissors. You lose.";
        console.log("You lose");
        computerScore++;
      } else {
        playerIcon.src = 'images/scissors.png';
        computerIcon.src = 'images/scissors.png';
        result = "Tie";
        console.log("Tie");
      }
      break;
  }
}

function game() {
  const player_wins = document.querySelector('#player-wins');
  const computer_wins = document.querySelector('#computer-wins');
  const input_btns = document.querySelectorAll('.input-btns');
  const resultText = document.querySelector('#result-text');

  if (playerScore >= 5 || computerScore >= 5) {
    button.disabled = true;
  }

  input_btns.forEach((button) => {

    button.addEventListener('click', () => {
      playRound(button.id, choices[getComputerChoice()]);

      player_wins.textContent = playerScore;
      computer_wins.textContent = computerScore;

      resultText.textContent = result;
    });
  });
}

game();

