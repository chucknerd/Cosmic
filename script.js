//console functionality

const inputElement = document.getElementById("textinput");
const consoleText = document.getElementById("consoletext");

function checkInput() {
  

  if (event.keyCode == 13) {
    event.preventDefault();
    addLine(inputElement.value);
    inputElement.value = "";
  }
}

function addLine(line) {
  const newLine = document.createElement("DIV");
  newLine.innerText = line;
  consoleText.appendChild(newLine);

  consoleText.scrollTop = consoleText.scrollHeight;
}

//start screen

    document.getElemendById("startscreen") = "";

// play game

//help
document.getElemendById("help") = "";

//play game
function playGame() {
if(event.target.value.toLowerCase() === "start");

var startGame = prompt("You wake up from a restful nights sleep in your quarters");

}

playGame();






