//selects texts
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

//keeps track of inventory on player
let state = {}

//starts game, empty object, and shows next text node
function startGame() {
  state = {}
  showTextNode(1)
}

//displays the option player is on
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

//shows options
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

//selects our options
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

//defined textNodes or options the player chooses and what happens next

const textNodes = [
  {
    id: 1,
    text: "Welcome to Cosmic! A text-based adventure game set in the far reaches of space. --Instructions: Refresh your browser at any time to restart the game. Select options to advance in your adventure. Thanks for playing! **Created and owned by Little Guyz Entertainment. Copyright 2019",
    options: [
      {
        text: 'START',
        nextText: 3
      },
      {
        text: 'No, Thanks.',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: "You choose not to play Cosmic and never experience it's glory.",
    options: [
      {
        text: 'Restart if you regret your decision',
        nextText: -1
        },
    ]
  },
  {
    id: 3,
    text: 'You wake up in your room to the sound of an incoming message.',
    options: [
      {
        text: 'Check your message.',
        nextText: 5
      },
      {
        text: 'Go back to sleep.',
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: 'You fall back to sleep, dreaming of traveling the galaxy only to wake up the next day and live a normal life.',
    options: [
      {
      text: 'Restart',
      nextText: -1
      },
    ]
  },
  {
    id: 5,
    text: 'INCOMING MESSAGE FROM THE TSCA -- CONTRACT: 8000 CREDITS, MANORA PRIME, ACCEPT FOR MISSION DETAILS',
    options: [
      {
        text: 'ACCEPT',
        setState: { message: true },
        nextText: 7
      },
      {
        text: 'IGNORE', // check message stays an option, but can't access 
        setState: { message: true },
        nextText: 6
      },
    ]
  },
  {
    id:6,
    text: 'You ignore the message. What do you want to do?',
    options: [
      {
        text: 'Look around',
      nextText: 8
      },
      {
        text: 'Eat some food',
      nextText: 9
      },
      {
        text: 'Get Dressed',
        setState: { adventureClothes: true },
      nextText: 10
      },
      {
        text: '(1) UNDREAD MESSAGE',
      nextText: 7
      },
    ]
  },


// examples 
 /* },
  {
    id: 2,
    text: "You venture forth in search of answers to where you are, when you come across a merchant.",
    options: [
      {
        text: 'Trade the goo for a sword',
        requiredState: (currentState) => currentState.blueGoo,
        setState: {blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        requiredState: (currentState) => currentState.blueGoo,
        setState: {blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignore the merchant.',
        nextText: 3
      },
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant, you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      { 
        text: 'Explore castle',
        nextText: 4
      },
      { 
        text: 'Find a room to sleep in the town',
        nextText: 5
      },
      { 
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      },
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
      text: 'Restart',
      nextText: -1
      }
    ]
  },*/
]

//calls startGame as soon as page loads
startGame()