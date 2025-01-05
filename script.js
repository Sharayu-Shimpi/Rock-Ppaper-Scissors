
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  updateScore(result);
  displayResult(playerChoice, computerChoice, result);
}


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function determineWinner(player, computer) {
  if (player === computer) {
    return 'draw';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}


function updateScore(result) {
  if (result === 'player') {
    playerScore++;
    document.getElementById('player-score').textContent = playerScore;
  } else if (result === 'computer') {
    computerScore++;
    document.getElementById('computer-score').textContent = computerScore;
  }
}


function displayResult(player, computer, result) {
  const resultDiv = document.getElementById('result');
  if (result === 'draw') {
    resultDiv.textContent = `It's a draw! You both chose ${player}.`;
  } else if (result === 'player') {
    resultDiv.textContent = `You win! ${player} beats ${computer}.`;
  } else {
    resultDiv.textContent = `You lose! ${computer} beats ${player}.`;
  }
}
