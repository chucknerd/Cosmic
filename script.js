//console functionality

const inputElement = document.getElementById("textinput");
const consoleText = document.getElementById("consoletext");

function addLine(line) {
  const newLine = document.createElement("DIV");
  newLine.innerText = line;
  consoleText.appendChild(newLine);

  consoleText.scrollTop = consoleText.scrollHeight;
}

//start screen

    document.getElementById("startscreen") = "";


//help
    document.getElementById("help") = "";

//play game

function checkInput() {
    if (event.keyCode == 13) {
      if(event.target.value.toLowerCase() === "start") {
        addLine("You hear an alarm sound as you wake up from, somewhat, of a restful night's sleep. It's about as good as you can get these days. The alarm is from a new message. You're still in your bed and it's morning.");
      } else {
      event.preventDefault();
      addLine(inputElement.value);
      }
      inputElement.value = "";
    }
  }








