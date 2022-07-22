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

function game() {
    let playerSelection;
    let computerSelection;
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);

        if (winner == 'player') {
            console.log(`Congratulations you won round ${i + 1}`);
            playerWins++;
        } else if (winner == 'computer') {
            console.log(`Bad luck! Computer won round ${i + 1}`);
            computerWins++;
        } else {
            console.log(`Round ${i + 1} is draw!`);
        }

    }

    finalWinner(playerWins, computerWins);


}

function finalWinner(playerWins, computerWins) {
    if (computerWins > playerWins) {
        console.log('The winner is computer!');
    } else if (playerWins > computerWins) {
        console.log('Congratulations you won!');
    } else {
        console.log('It\'s draw!');
    }
}