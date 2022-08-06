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

function game(e) {
    let result = 0;
    let message = document.querySelector('.message');
    let player = e.target.alt;
    let computer = getComputerChoice();
    result = playRound(player, computer);
    if (result === 1) {
        message.textContent = `player ${player} beats computer ${computer}`;
        playerScore++;
        scoreboardPlayer.textContent = playerScore;
    } else if (result === -1) {
        message.textContent = `player ${player} loses to computer ${computer}`;
        computerScore++;
        scoreboardComputer.textContent = computerScore;
    } else {
        message.textContent = `player ${player} ties computer ${computer}`;
    }
    
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            alert('player won!');
        } else {
            alert('computer won!');
        }
        playerScore = 0;
        computerScore = 0;
        scoreboardPlayer.textContent = playerScore;
        scoreboardComputer.textContent = computerScore;
        message.textContent = 'Let the game begin!!!'
    }   
}

let scoreboardPlayer = document.querySelector('.player .score');
let scoreboardComputer = document.querySelector('.computer .score');
let playerScore = 0;
let computerScore = 0;
window.addEventListener('click', game);
