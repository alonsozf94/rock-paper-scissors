const OPTIONS = ["rock","paper","scissors"];
let playerOptions = document.querySelectorAll(".choice-button");
let resetBtn = document.querySelector(".reset");
let playerChoice = "";
let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice() {
    let choice = OPTIONS[Math.floor(Math.random() * 3)];
    return choice;
}

function changeScore(user, score){
    if (user === "player") playerCounter = score;
    else if (user === "computer") computerCounter = score;
    let userScore = document.querySelector(`#${user} span`);
    userScore.innerText = score;
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
            console.log("Input error");
            break;
    }

    if (winner == "player")  {
        if (!(playerCounter >= 5)) changeScore(winner, playerCounter + 1);
        changeDisplay("Player wins this round!");
    }
    else if (winner == "computer") {
        if (!(computerCounter >= 5)) changeScore(winner, computerCounter + 1);
        changeDisplay("Computer wins this round!");
    }
    else changeDisplay("Tie!")

    return winner;
}
            
function changeDisplay(text){
    let currentDisplay = document.querySelector(`.display`);
    currentDisplay.innerText = text;
}

playerOptions.forEach(choice => {
    choice.addEventListener("click", function eventHandler() {
        playerChoice = choice.id;
        choice.classList.add("active");
        window.setTimeout(() => {
            choice.classList.remove("active");
        }, 50);
        playRound(playerChoice, getComputerChoice());
        if (playerCounter >= 5 || computerCounter >= 5) {
            playerOptions.forEach(optionsToRemove => optionsToRemove.removeEventListener("click", eventHandler));
            if (playerCounter >= 5) changeDisplay("You win!");
            if (computerCounter >= 5) changeDisplay("Computer wins!");
        }
    })
});

resetBtn.addEventListener('click', () => location.reload())