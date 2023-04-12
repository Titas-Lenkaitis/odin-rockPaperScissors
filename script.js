let playerWins = 0;
let computerWins = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const selections = document.querySelector(".selections");
let playerScore = document.querySelector(".playerWins");
let computerScore = document.querySelector(".pcWins");
let winner = document.querySelector(".winner");

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection == 0) {
        computerSelection = "rock";
    } else if (computerSelection == 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function decideWinner() {
    if (playerWins == 5) {
        winner.classList.add("winnerStyle");
        winner.textContent = "The Player wins the game!";
        playerWins = 0;
        computerWins = 0;
        playerScore.textContent = "Player Wins : 0";
        computerScore.textContent = "Computer Wins: 0";
    } else if (computerWins == 5) {
        winner.classList.add("winnerStyle");
        winner.textContent = "The Computer wins the game!";
        playerWins = 0;
        computerWins = 0;
        playerScore.textContent = "Player Wins : 0";
        computerScore.textContent = "Computer Wins: 0";
    }
}

function playRound(playerSelection, computerSelection) {
    winner.classList.remove("winnerStyle");
    winner.textContent = "";
    if (playerSelection == computerSelection) {
        result.classList.add("resultStyle");
        result.textContent = "It is a tie!";
        decideWinner();
        return;
    } else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock"
    ) {
        result.classList.add("resultStyle");
        result.textContent = "The Player Wins!";
        playerWins += 1;
        playerScore.textContent = "Player Wins: " + playerWins;
        decideWinner();
        return playerWins;
    } else {
        result.classList.add("resultStyle");
        result.textContent = "The Computer Wins!";
        computerWins += 1;
        computerScore.textContent = "Computer Wins: " + computerWins;
        decideWinner();
        return computerWins;
    }
}

rock.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
}); 

paper.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
}); 

scissors.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
}); 