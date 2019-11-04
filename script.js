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



