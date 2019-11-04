//console functionality

const inputElement = document.getElementById("textinput");
const consoleText = document.getElementById("consoletext");

function checkInput() {
  const event = window.event || event.which;

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
    var start = prompt("You've just woken up and you're lying in bed. Do you want to get up? If So, type 'start'");
    
    if(start == true) {
        // we get out of bed
        var outOfBed = prompt("You get out of your bed.");
    }
}

playGame();




