let playerWins = 0;
let computerWins = 0;
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
    let rockLose = (playerSelection == 'rock' && computerSelection == 'paper');
    let paperLose = (playerSelection == 'paper' && computerSelection == 'scissors');
    let scissorsLose = (playerSelection == 'scissors' && computerSelection == 'rock');

    return rockLose || paperLose || scissorsLose
}

function playRound(playerSelection, computerSelection) {



    let result;
    if (playerSelection == computerSelection) {
        result = 'draw';

    } else if (isLose(playerSelection, computerSelection)) {
        computerWins++;
        result = 'computer'

    } else {
        playerWins++;
        result = 'player'
    }

    return result;
}

const buttons = document.querySelectorAll('.choice');
const container = document.querySelector('.container');
const title = document.querySelector('.title')
const btns = Array.from(buttons);

for (const button of btns) {
    button.addEventListener('click', (e) => {

        let playerSelection = e.target.classList.value;
        let computerSelection = getComputerChoice();
        let compImg = document.querySelector('.comp');
        let playerImg = document.querySelector('.player');
        compImg.setAttribute('src', `./imgs/${computerSelection}.svg`)
        playerImg.setAttribute('src', `./imgs/${playerSelection}.svg`)
        playRound(playerSelection, computerSelection);
        updateResult();
        if (gameOver()) {
            title.classList.add('hidden');
            container.classList.add('hidden')
            winMessage();
        }
    })
}

function updateResult() {
    let playerScore = document.querySelector('.player-score');
    let compScore = document.querySelector('.computer-score');

    playerScore.textContent = `Player score: ${playerWins}`;
    compScore.textContent = `Computer score: ${computerWins}`;
}

function gameOver() {
    return computerWins == 5 || playerWins == 5;
}

function winMessage() {
    const announce = document.querySelector('.announce')
    const finish = document.querySelector('.finish');
    const refresh = document.querySelector('.refresh');


    if (computerWins > playerWins) {

        announce.textContent = 'Computer wins try again';
    } else {
        announce.textContent = 'Congratulations you win!';
    }
    finish.classList.remove('hidden')
    refresh.classList.remove('hidden');
    refresh.addEventListener('click', () => window.location.reload());
}
// function game() {
//     let playerSelection;
//     let computerSelection;
//     let playerWins = 0;
//     let computerWins = 0;

//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i + 1}`);
//         playerSelection = getPlayerChoice();
//         computerSelection = getComputerChoice();
//         let winner = playRound(playerSelection, computerSelection);

//         if (winner == 'player') {
//             console.log(`Congratulations you won round ${i + 1}`);
//             playerWins++;
//         } else if (winner == 'computer') {
//             console.log(`Bad luck! Computer won round ${i + 1}`);
//             computerWins++;
//         } else {
//             console.log(`Round ${i + 1} is draw!`);
//         }

//     }

//     finalWinner(playerWins, computerWins);


// }

// function finalWinner(playerWins, computerWins) {
//     if (computerWins > playerWins) {
//         console.log('The winner is computer!');
//     } else if (playerWins > computerWins) {
//         console.log('Congratulations you won!');
//     } else {
//         console.log('It\'s draw!');
//     }
// }