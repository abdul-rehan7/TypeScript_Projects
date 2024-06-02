const choices = ["Rock", "Paper", "Scissors"];
const PlayerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
function playGame(playerChoice = "Choose ") {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (computerChoice === playerChoice) {
    result = "It's a TIE 🔗";
  } else {
    switch (playerChoice) {
      case "Rock":
        result = computerChoice == "Scissors" ? "YOU WIN 😀" : "YOU LOSE☹️";

        break;
      case "Paper":
        result = computerChoice == "Rock" ? "YOU WIN 😀" : "YOU LOSE☹️";
        break;
      case "Scissors":
        result = computerChoice == "Paper" ? "YOU WIN 😀" : "YOU LOSE☹️";
        break;
    }
  }

  PlayerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText", "tieText");
  switch (result) {
    case "YOU WIN 😀":
      resultDisplay.classList.add("greenText");
      break;
    case "YOU LOSE☹️":
      resultDisplay.classList.add("redText");
      break;
    case "It's a TIE 🔗":
      resultDisplay.classList.add("tieText");
      break;
  }
}

playGame();
