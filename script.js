const OPTIONS = ["rock","paper","scissors"];

function getPlayerChoice() {
    let choice = prompt("Choose!").toLowerCase();
    return choice;
}

function getComputerChoice() {
    let choice = OPTIONS[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let winner;
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                winner = "tie"
            } else if (computerSelection == "paper") {
                winner = "computer"
            } else if (computerSelection == "scissors") {
                winner = "player"
            }
            break;
        case "paper":
            if (computerSelection == "rock") {
                winner = "player"
            } else if (computerSelection == "paper") {
                winner = "tie"
            } else if (computerSelection == "scissors") {
                winner = "computer"
            }
            break;
        case "scissors":
            if (computerSelection == "rock") {
                winner = "computer"
            } else if (computerSelection == "paper") {
                winner = "player"
            } else if (computerSelection == "scissors") {
                winner = "tie"
            }
            break;
        default:
            break;
    }

    return winner;
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i = 0; i <= 5; i++) {
        let winner = playRound(getPlayerChoice(), getComputerChoice())
        if (winner == "player") {
            console.log("Player wins this round!")
            playerCounter++;
        } else if (winner == "computer") {
            console.log("Computer wins this round!")
            computerCounter++;
        } else console.log("Tie!")
        if (i < 5) {
            console.log(`Rounds left: ${4 - i}`);
        }
    }
    if (playerCounter > computerCounter) {
        console.log("Player wins the game!");        
    } else if (playerCounter < computerCounter) {
        console.log("Computer wins the game!");        
    } else if (playerCounter == computerCounter) {
        console.log("Tie game!");
    }
}

game();