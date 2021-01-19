let rockButton = document.querySelector('.btn1');
let paperButton = document.querySelector('.btn2');
let scissorsButton = document.querySelector('.btn3');
let userInput = "";
let result = "";
let computerScore = 0;
let playerScore = 0;
let playerPoints = document.querySelector('#playertotal');
let computerPoints = document.querySelector('#computertotal');
let gameBoard = document.querySelector('#round')
gameBoard.textContent = "The round result will be displayed here when you've made your selection."


function playGame() {


    let computerSelection = computerPlay(result);

    function computerPlay(result) {

        let randomNumber = (Math.floor(Math.random() * 3));

        if (randomNumber === 0) {
            console.log('Computer has chosen rock!');
            return result = "rock";
        } else if (randomNumber === 1) {
            console.log('Computer has chosen paper!');
            return result = "paper";
        } else if (randomNumber === 2) {
            console.log('Computer has chosen scissors!');
            return result = "scissors";
        }
    }

    function playerSelection(userInput) {
        return userInput.toLowerCase();
    }


    function playRound(computerSelection, playerSelection) {
        if (computerSelection == "rock" && playerSelection == "rock") {
            return gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. It's a tie.`;
        } else if (computerSelection == "paper" && playerSelection == "rock") {
            gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Computer wins!`;
            computerScore++;
            return computerPoints.innerText = `Computer Score: ${computerScore}`;
        } else if (computerSelection == "scissors" && playerSelection == "rock") {
            gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. You win!`;
            playerScore++;
            return playerPoints.textContent = `Your Score: ${playerScore}`;
        } else if (computerSelection == "scissors" && playerSelection == "scissors") {
            return gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. It's a tie.`;
        } else if (computerSelection == "rock" && playerSelection == "scissors") {
            gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Computer wins!`;
            computerScore++;
            return computerPoints.innerText = `Computer Score: ${computerScore}`;
        } else if (computerSelection == "paper" && playerSelection == "scissors") {
            gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. You win!`;
            playerScore++;
            return playerPoints.textContent = `Your Score: ${playerScore}`;
        } else if (computerSelection == "paper" && playerSelection == "paper") {
            return gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. It's a tie.`;
        } else if (computerSelection == "scissors" && playerSelection == "paper") {
            gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. Computer wins!`;
            computerScore++;
            return computerPoints.innerText = `Computer Score: ${computerScore}`;
        } else if (computerSelection == "rock" && playerSelection == "paper") {
            gameBoard.textContent = `Computer has thrown ${computerSelection} and you have thrown ${playerSelection}. You win!`;
            playerScore++;
            return playerPoints.textContent = `Your Score: ${playerScore}`;
        }
    }

    function computerWins() {
        playerScore = 0;
        computerScore = 0;
        alert("Computer has won the game! Make a selection to play again.");
        gameBoard.textContent = "Make a selection to play again.";
    }

    function playerWins() {
        playerScore = 0;
        computerScore = 0;
        alert("You have won the game! Make a selection to play again.");
        gameBoard.textContent = "Make a selection to play again.";
    }

    if (computerScore == 5) {
        return computerWins();
    } else if (playerScore == 5) {
        return playerWins();
    }


    return playRound(computerSelection, playerSelection(userInput));
}

playerPoints.textContent = `Your Score: ${playerScore}`;
computerPoints.textContent = `Computer Score: ${computerScore}`;

rockButton.onclick = () => {
    userInput = "rock";
    playerPoints.textContent = `Your Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
    playGame();
}

paperButton.onclick = () => {
    userInput = "paper";
    playerPoints.textContent = `Your Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
    playGame();
}

scissorsButton.onclick = () => {
    userInput = "scissors";
    playerPoints.textContent = `Your Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
    playGame();
}