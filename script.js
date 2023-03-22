function getComputerChoice() {
    const computerChoice = (Math.floor(Math.random() * 3))
    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else if (computerChoice === 2) {
        return 'Scissors';
    }
}

//console.log(getComputerChoice())



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You Lose!';
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));