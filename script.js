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