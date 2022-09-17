const choices = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0;
let result = "";
let playerInput, userChoice, computerChoice;

const player_wins = document.querySelector('#player-wins');
const computer_wins = document.querySelector('#computer-wins');
const input_btns = document.querySelectorAll('.input-btns');
const resultText = document.querySelector('#result-text');
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
        playerScore++;
      } else if (computerSelection == "paper") {
        playerIcon.src = 'images/rock.png';
        computerIcon.src = 'images/paper.png';
        result = "Paper beats rock. You lose.";
        computerScore++;
      } else {
        playerIcon.src = 'images/rock.png';
        computerIcon.src = 'images/rock.png';
        result = "Tie";
      }
      break;
    case "paper":
      if (computerSelection == "rock") {
        playerIcon.src = 'images/paper.png';
        computerIcon.src = 'images/rock.png';
        result = "Paper beats rock. You win.";
        playerScore++;
      } else if (computerSelection == "scissors") {
        playerIcon.src = 'images/paper.png';
        computerIcon.src = 'images/scissors.png';
        result = "Scissors beats paper. You lose.";
        computerScore++;
      } else {
        playerIcon.src = 'images/paper.png';
        computerIcon.src = 'images/paper.png';
        result = "Tie";
      }
      break;
    case "scissors":
      if (computerSelection == "paper") {
        playerIcon.src = 'images/scissors.png';
        computerIcon.src = 'images/paper.png';
        result = "Scissors beats paper. You win."
        playerScore++;
      } else if (computerSelection == "rock") {
        playerIcon.src = 'images/scissors.png';
        computerIcon.src = 'images/rock.png';
        result = "Rock beats scissors. You lose.";
        computerScore++;
      } else {
        playerIcon.src = 'images/scissors.png';
        computerIcon.src = 'images/scissors.png';
        result = "Tie";
      }
      break;
  }
}

function game() {
  input_btns.forEach((button) => {

    button.addEventListener('click', () => {
      playRound(button.id, choices[getComputerChoice()]);

      player_wins.textContent = playerScore;
      computer_wins.textContent = computerScore;

      resultText.textContent = result;
      if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5) {
          resultText.textContent = "Game Over. You Won!";
        } else {
          resultText.textContent = "Game Over. You Lost.";
        }
        playerScore = 0;
        computerScore = 0;
        playerIcon.src = 'images/player.png';
        computerIcon.src = 'images/bot.png';
      }
    });
  });
}

game();

