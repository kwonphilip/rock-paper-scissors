let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.random();
    
    if (choice < 0.33) return 'rock';

    if (choice < 0.66) return 'paper';

    return 'scissors';
}

function getHumanChoice() {
    const choice = prompt('Choose rock, paper, or scissors: ');

    return choice.toLowerCase();
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
    if (winner == 'human') console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    if (winner == 'computer') console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    if (winner == 'tie') console.log(`Tie! You both chose ${humanChoice}`);
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const winner = getWinner(computerChoice, humanChoice);
    updateScore(winner);
    declareWinner(winner, humanChoice, computerChoice);
}

function declareGameWinner() {
    if (humanScore > computerScore) return console.log('You won the game!');
    if (computerScore > humanScore) return console.log('Computer won the game!');
    return console.log('Tie game!');
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for(let i = 1; i < 6; i++) {
        console.log(`Round ${i}`)
        playRound();
        console.log(`Human Score: ${humanScore}   |   Computer Score: ${computerScore}`);
    }

    declareGameWinner();
}

playGame();