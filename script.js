let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == "Paper") ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        playerScore += 1;
        result = ('<br>You win! ' + playerSelection + ' beats ' + computerSelection +
        '<br><br>Your score: ' + playerScore + '<br>Computer score: ' + computerScore);

        if (playerScore == 5) {
            result += '<br><br>You won the game! Congratulations!';
            disableButtons();
        }
    } else if (playerSelection == computerSelection) {
        result = ('<br>You tied! You both chose ' + playerSelection +
        '<br><br>Your score: ' + playerScore + '<br>Computer score: ' + computerScore);
    } else {
        computerScore += 1;
        result = ('<br>You lose! ' + computerSelection + ' beats ' + playerSelection + 
        '<br><br>Your score: ' + playerScore + '<br>Computer score: ' + computerScore);

        if (computerScore == 5) {
            result += '<br><br>The computer won the game! Try again!';
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    })
})