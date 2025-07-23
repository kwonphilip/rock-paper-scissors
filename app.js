let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.random();
    
    if (choice < 0.33) return 'rock';

    if (choice < 0.66) return 'paper';

    return 'scissors';
}

function getWinner(computer, human) {
    if (computer == 'rock' && human == 'rock') return 'tie';
    if (computer == 'rock' && human == 'paper') return 'human';
    if (computer == 'rock' && human == 'scissors') return 'computer';
    if (computer == 'paper' && human == 'rock') return 'computer';
    if (computer == 'paper' && human == 'paper') return 'tie';
    if (computer == 'paper' && human == 'scissors') return 'human';
    if (computer == 'scissors' && human == 'rock') return 'human';
    if (computer == 'scissors' && human == 'paper') return 'computer';
    if (computer == 'scissors' && human == 'scissors') return 'tie';

    return 'error';
}

function updateScore(winner) {
    if (winner == 'human') humanScore++;
    if (winner == 'computer') computerScore++;
}

function declareWinner(winner, humanChoice, computerChoice) {
    if (winner == 'human') result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    if (winner == 'computer') result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    if (winner == 'tie') result.textContent = `Tie! You both chose ${humanChoice}`;
}

function playRound(humanChoice) {
    // Reset after game winner (i.e. game win = first to 5 points)
    if (humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
    }

    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, humanChoice);
    updateScore(winner);
    declareWinner(winner, humanChoice, computerChoice);
    score.textContent = `Human Score: ${humanScore}   |   Computer Score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        declareGameWinner();
    }
}

function declareGameWinner() {
    if (humanScore > computerScore) winner.textContent = 'You won the game!';
    if (computerScore > humanScore) winner.textContent = 'Computer won the game!';
}

const score = document.querySelector('#score');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
const winner = document.querySelector('#winner');

score.textContent = `Human Score: ${humanScore}   |   Computer Score: ${computerScore}`;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});