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
    var txt = "start";
    
    if(txt == start) {
        // we get out of bed
        var getUp = alert("You get out of bed");
    }
}

playGame();




