"use strict"

function getComputerChoice() {
    const choices = {
        1: 'rock',
        2: 'paper',
        3: 'scissors',
    };
    let idx = Math.floor(Math.random()*3+1);
    return choices[idx];
}

function playRound(playerSelection, computerSelection) {
    const guide = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper',
    };
    if (playerSelection === computerSelection) {
        return 0;
    } else if (guide[playerSelection] === computerSelection) {
        return 1;
    } else {
        return -1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    for (let i=0; i<5; i++) {
        let player = prompt('enter choice').toLowerCase();
        let computer = getComputerChoice();
        result = playRound(player, computer);
        if (result === 1) {
            console.log(`player ${player} beats computer ${computer}`);
            playerScore++;
        } else if (result === -1) {
            console.log(`computer ${computer} beats player ${player}`);
            computerScore++;
        } else {
            console.log(`player ${player} ties computer ${computer}`);
        }
        console.log(`round ${i+1} >> player score ${playerScore} :: computer score ${computerScore}`);
    }
    if (playerScore === computerScore) {
        console.log('it\'s a tie!');
    } else if (playerScore > computerScore) {
        console.log('player won!');
    } else {
        console.log('computer won!');
    }
}

game();