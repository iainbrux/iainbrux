function gameLogic() {

  let player = {
    marker: 'X',
    score: 0,
  }

  let computer = {
    marker: 'O',
    score: 0,
  }

  let boxes = Array(9).fill(null); //This creates an array of null placeholders
  let nextValue = player.marker;
  let status = null; // Will equal 'X' or 'O'

  const elements = document.querySelectorAll('.box');

  function calculateWinner() {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c] && boxes[a] === player.marker) {
        console.log('Player won');
        return playerWon();
      } else if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c] && boxes[a] === computer.marker) {
        console.log('Computer won');
        return computerWon();
      } else if (!status && !boxes.includes(null)) {
        console.log('Tie');
        return endGame();
      }

    }
    
    return null;
  }

  function defaultParameters() { //resets game parameters
    boxes = Array(9).fill(null);
    status = null;
    nextValue = player.marker;
    return elements.forEach(element => {
      element.classList.remove('box--' + player.marker, 'box--' + computer.marker);
    })
  }

  function endGame() {
    const playAgainButton = document.querySelector('.reset-button');
    const container = document.querySelector('.container');
    playAgainButton.style.display = "flex";
    container.style.pointerEvents = "none";
    playAgainButton.addEventListener('click', () => {
      defaultParameters();
      container.style.pointerEvents = "auto";
      return playAgainButton.style.display = "none";
    })
  }

  function playerWon() {
    const playerScoreDisplay = document.querySelector('.user-score');
    player.score++;
    playerScoreDisplay.innerText = `Your score: ${player.score}`;
    return endGame();
  }

  function computerWon() {
    const computerScoreDisplay = document.querySelector('.comp-score');
    computer.score++;
    computerScoreDisplay.innerText = `Computer score: ${computer.score}`;
    return endGame();
  }

  function input() {
    elements.forEach((element, index) => {
      element.addEventListener('click', () => {
        setBoxValue(index); // 
        if (status === null) {
          computerChoice();
        }
      });
    });
  }

  function computerChoice() {
    const availableBoxes = boxes.map((box, index) => {
      if (box === null) {
        return index;
      }
      return -1;
    }).filter(index => index !== -1);
    let r = Math.floor(Math.random() * availableBoxes.length);
    setBoxValue(availableBoxes[r]);
  }

  function setBoxValue(index) {
    if (boxes[index] === null) {
      boxes[index] = nextValue;
      nextValue = nextValue === player.marker ? computer.marker : player.marker; //switches turns
    }

    // Calculate if someone has won
    render();
    status = calculateWinner();
    
  }

  function render() {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i] !== null) {
        elements[i].classList.add('box--' + boxes[i]); //Adds the class 'box--i' when then index status is changed from null
      }
    }
  }

  return {
    input,
    render
  }


}

(function () {
  const {
    prototype
  } = gameLogic();

  const game = gameLogic();

  game.input();
  game.render();
})();