let computerPossibleChoice = {Value: ""};
let playerPossibleChoice;
let computerSelectionInt = 0;
let playerSelectionInt = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#output-text");
output.textContent = "May the Best Player Win!";

buttons.forEach((button) => {button.addEventListener('click', () => {
    playerPossibleChoice = button.id;
    if (playerPossibleChoice == "rock") {
        playerSelectionInt = 0;
    }
    else if (playerPossibleChoice == "paper") {
        playerSelectionInt = 1;
    }
    else if (playerPossibleChoice == "scissors") {
        playerSelectionInt = 2;
    }
    computerSelectionInt = computerGamePlay(computerPossibleChoice);
    playGame();
    })
})

function computerGamePlay(computerPossibleChoice) {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0) {
        computerPossibleChoice.Value = "rock";
    }
    else if (choiceNum == 1) {
        computerPossibleChoice.Value = "paper";
    }
    else if (choiceNum == 2) {
        computerPossibleChoice.Value = "scissors";
    }
    return choiceNum;
}

function playRound() {
    let win_array = [[0, 2, 1], [1, 0, 2], [2, 1, 0]];
    let result = win_array[playerSelectionInt][computerSelectionInt];
    if (result == 0) {
        output.textContent = `It's a tie! You selected ${playerPossibleChoice} and The Computer selected ${computerPossibleChoice.Value}`;
    }
    else if (result == 1) {
        output.textContent = `You won! You selected ${playerPossibleChoice} and The Computer selected ${computerPossibleChoice.Value}`;
        playerScore++;
    }
    else if (result == 2) {
        output.textContent = `You lost! You selected ${playerPossibleChoice} and The Computer selected ${computerPossibleChoice.Value}`;
        computerScore++;
    }
}

function playGame() {
    output.textContent = "Select Rock, Paper or Scissors";
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        output.textContent = "Excellent! You Won! Congratulations! 👏👏👏";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    else if (computerScore == 5) {
        output.textContent = "Try Again! You Lost! 🙁👎👎";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
}
