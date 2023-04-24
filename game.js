function computerGamePlay(compChoice) {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0) {
        compChoice.Value = "rock";
    }
    else if (choiceNum == 1) {
        compChoice.Value = "paper";
    } 
    else if (choiceNum == 2) {
        compChoice.Value = "scissors";
    }
    console.log(choiceNum);
    return choiceNum;
}

function playRound(playerSelectionInt, compSelectionInt, playerChoice, compChoice) {
    /* 0 == rock, 1 == paper, 2 == scissors */
    let win_array = [[0, 2, 1],
                     [1, 0, 2],
                     [2, 1, 0]];
    let result = win_array[playerSelectionInt, compSelectionInt];
    if (result == 0) {
        console.log(`It's a tie! You selected ${playerChoice} and the computer selected ${compChoice.Value}`);
    }
    else if (result == 1) {
        console.log(`You selected ${playerChoice} and the computer selected ${compChoice.Value}`);
    }
    else if (result == 2) {
        console.log(`You selected ${playerChoice} and the computer selected ${compChoice.Value}`);
    }
}

function game() {
    let compChoice = {Value: ""};
    let compSelectionInt;
    let playerSelectionInt;
    let playerChoice;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Rock, Paper, or Scissors?")
        if (playerChoice == "rock") {
            playerSelectionInt = 0;
        }
        else if (playerChoice == "player") {
            playerSelectionInt = 1;
        }
        else if (playerChoice == "scissors") {
            playerSelectionInt = 2;
        }
        compChoice = computerGamePlay(compChoice);
        playRound(playerSelectionInt, compSelectionInt, compChoice, playerChoice);
    }
}
