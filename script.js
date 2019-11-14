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

  // starting the game with options to restart

  {
    id: 1,
    text: "Welcome to Cosmic! A text-based adventure game set in the far reaches of space. --Instructions: Refresh your browser at any time to restart the game. Select options to advance in your adventure. Thanks for playing! *Created and owned by Little Guyz Entertainment. Copyright 2019",
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

  //player has chosen START the game with options to restart

  {
    id: 3,
    text: 'You wake up in your room to the sound of an incoming message.',
    options: [
      {
        text: 'Speak command to check messages.',
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
    text: "INCOMING MESSAGE FROM THE TSCA -- CONTRACT: MANORA PRIME, 'ACCEPT' FOR MISSION DETAILS",
    options: [
      {
        text: 'ACCEPT',
        setState: { message: true },
        nextText: 7
      },
      {
        text: 'Ignore for now', 
        nextText: 6
      },
    ]
  },

  //player has ignored messages and is laying in the bed in the dark

  {
    id:6,
    text: 'You ignore the message. What do you want to do?',
    options: [
      {
        text: 'Look around',
      nextText: 8
      },
    ]
  },
  {
    id: 8,
    text: "You look around your quarters. It's very dark. You can't see. Your personal viewing monitor on your desk, to the left, is blinking with a new message.",
    options: [ 
      {
        text: "Speak command to turn light on",
        nextText: 11
      },
      {
        text: "Speak command to check messages",
        nextText: 12
      },
    ]
  },

  //room state for when the player initialy turns the lights on

  {
    id: 11,
    text: "You say 'lights on' and the flourescent light illuminates. You see your room in all it's bachelor glory. It's nothing special, just what you can afford and a place to rest your head. It's a single room with a bathroom. There is a main viewing monitor in front of you on the wall. A sink to your right. One closet. The bathroom is beside the sink. You have a fridge and freezer combo in the corner. The door to exit is on your left. You have a desk, to your left, that doubles as a dresser. Your personal viewing monitor sits upon your desk, blinking with a new undread message.",
    options: [
      {
        text: "Look in closet",
        nextText: 13
      },
      {
        text: "Look in bathroom",
        nextText: 14
      },
      {
        text: "Check the fridge",
        nextText: 15
      },
      {
        text: "Speak command to check messages",
        nextText: 12
      },
    ]
  },
  {
    id: 14,
    text: "The flourescent light illuminates as you open the bathroom door and an exhaust fan turns on. You see a toilet in front of you and a shower to the right.",
    option: [
      {
        text: "leave bathroom",
        nextText: 20
      },
    ]
  },

  // id 13 for initially looking in closet, equipping and inspecting gear 

  {
    id: 13,
    text: "You open the door and a flourescent light automatically illuminates. You see your clothes hanging on a rack. There are boots on the floor. Your utility belt is on a shelf above the rack. There is an open box of charge plugs next to the belt.",
    options: [
      {
        text: "Inspect and equip clothing",
        setState: {adventureClothes: true}, 
        nextText: 16
      },
      {
        text: "Inspect and equip utility belt",
        setState: {utilityBelt: true},
        nextText: 17
      },
      {
        text: "Inspect charge plug box",
        nextText: 18
      },
      {
        text: "Leave closet",
        nextText: 19
      },
    ]
  },

  //inspecting and equipping gear

  {
    id: 16,
    text: "You put on a button up, mustard-yellow long-sleeve shirt with the collar flipped up. You tie a black tie, around your neck, that you like to wear loosely just for show. You dawn a navy blue jacket and slacks. You lace up some black boots.",
    setState: {adventureClothes: false},
    options: [
      {
        text: "Inspect and equip utility belt",
        setState: {utilityBelt: true},
        nextText: 17
      },
      {
        text: "Inspect and equip clothing",
        requiredState: (currentState) => currentState.adventureClothes,
          nextText: 16 
        },
      {
        text: "Leave closet",
        nextText: 19
      },
    ]  
  },
  {
    id: 17,
    text: "You strap on a utility belt that contains a charge pistol, charge pistol plugs, your I.D. and other credentials, and your key cards for your apartnemt and ship.",
    setState {utilityBelt: false},
    options: [
      text: "Leave closet",
    ]
  },


  // id 21 for closet after player has taken something
  {
    id: 21,
    text: "You're in the closet",
    options: [ 
      {
      text: "Inspect and equip clothing",
      requiredState: (currentState) => currentState.adventureClothes,
        nextText: 16 
      },
      {
        text: "Inspect and equip utility belt",
        requiredState: (currentState) => currentState.utilityBelt,
        nextText: 17
      },
    ]
  },

  // id 19 for room after player has already turned lights on

  {
    id: 19,
    text: "You're in your room",
    options: [
      {
        text: "Look in closet",
         requiredState: (currentState) => currentState.adventureClothes,
        requiredState: (currentState) => currentState.utilityBelt,
        nextText: 13
      },
      {
        text: "Look in bathroom",
        nextText: 14
      },
      {
        text: "Check the fridge",
        nextText: 15
      },
      {
        text: "Speak command to check messages",
        nextText: 12
      },
    ]
  },

  // id 12 for checked message 



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