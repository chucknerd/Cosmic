//console functionality

const textInput = document.getElementById("textinput");
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

// game startup, typing start and instrcutions
function checkInput() {
  if (event.keyCode == 13) {
    if(event.target.value.toLowerCase() === "start") {
        //you start the game
      addLine("You hear an alarm sound as you wake up from, somewhat, of a restful night's sleep. It's about as good as you can get these days. The alarm is from a new message. You're still in your bed and it's morning.");
    } else {
    event.preventDefault();
    addLine(inputElement.value);
    }
    inputElement.value = "";
  }
  
};

//play game

const consoleTextObj = {
  look:
  "You look around",
}

function enterCommand(text) {
  if (text === "look") {
    consoleText.innerHTML = "";
    return;
    alert("You look around.")
  }

  if (consoleTextObj[text]) {
    consoletext.innerHTML += "<div>" + consoleTextObj[text] + "</div>";
  } else {
    alert("Invalid command");
  }
}












