function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (randomNum) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors'
            break;
    }

    return computerChoice
}

function getPlayerChoice() {

    let playerChoice;
    while (playerChoice != 'paper' && playerChoice != 'rock' && playerChoice != 'scissors') {
        playerChoice = prompt('Enter "paper" or "rock" or "scissors"').trim().toLowerCase();
    }
    return playerChoice
}

function isLose(playerSelection, computerSelection) {
    rockLose = (playerSelection == 'rock' && computerSelection == 'paper');
    paperLose = (playerSelection == 'paper' && computerSelection == 'scissors');
    scissorsLose = (playerSelection == 'scissors' && computerSelection == 'rock');

    return rockLose || paperLose || scissorsLose
}

function playRound(playerSelection, computerSelection) {

    console.log(`Your choice is: ${playerSelection}`);
    console.log(`Computer choice is: ${computerSelection}`);



    let result;
    if (playerSelection == computerSelection) {
        result = 'draw';

    } else if (isLose(playerSelection, computerSelection)) {
        result = 'computer'

    } else {
        result = 'player'
    }

    return result;
}

