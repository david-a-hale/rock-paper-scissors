function getComputerChoice() {
    const computerChoice = (Math.floor(Math.random() * 3))
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else if (computerChoice === 2) {
        return 'scissors';
    }
}

//console.log(getComputerChoice())

function getPlayerChoice(userInput) {
    userInput = prompt('Rock, Paper or Scissors?: ');
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Please choose Rock, Paper or Scissors.')
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose!';
    }
}

const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice()
