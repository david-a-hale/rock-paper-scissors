function getComputerChoice() {
    const computerChoice = (Math.floor(Math.random() * 3))
    if (computerChoice === 0) {
        return 'Rock!';
    } else if (computerChoice === 1) {
        return 'Paper!';
    } else if (computerChoice === 2) {
        return 'Scissors!';
    }
}

//console.log(getComputerChoice())



function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();