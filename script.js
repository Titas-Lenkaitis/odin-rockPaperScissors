let playerWins = 0;
let playerLosses = 0;
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        result = "It is a tie!";
        return result;
    } else if (playerSelection == "rock"     && computerSelection == "scissors"  ||
               playerSelection == "scissors" && computerSelection == "paper"     ||
               playerSelection == "paper"    && computerSelection == "rock"      ) {
               result = "You win! " + playerSelection + " beats " + computerSelection;
               playerWins += 1;
               return [result, playerWins];
    } else {
                result = "You lose! " + computerSelection + " beats " + playerSelection;
                playerLosses += 1;
                return [result, playerLosses];
            }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What do you choose?");
        playerSelection = playerSelection.toLowerCase();
        if (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
            return result = "That is not a valid option";
        }
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(result);
    }
    if (playerWins == playerLosses) {
        winner = "There is no winner! it is a tie!";
    } else if (playerWins > playerLosses) {
        winner = "The winner is the player!";
    } else {
        winner = "The winner is the computer!";
    }
    console.log(winner);
    playerLosses = 0;
    playerWins = 0;
}