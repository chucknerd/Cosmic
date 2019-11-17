/* NOTES: 
11/16/2019 - SET STATES AND REQUIRED STATES ARE COMMENTED OUT FOR NOW /  
NEED TO RECONGIFURE NODES SO PLAYER CAN CHOOSE DIFFERNT PATHS WITHOUT MANAGING STATES  */


//selects texts
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

//keeps track of inventory on player
let state = {}

//starts game, empty object, and shows next text node
function startGame() {
  state = {
    show14: true,
  }
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
    text: "Welcome to Cosmic! A text-based adventure game set in the far reaches of space. --Instructions: Refresh your browser at any time to restart the game. Select options to advance your adventure. Thanks for playing! *Created and owned by Little Guyz Entertainment. Copyright 2019",
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
        text: 'Speak command to check messages.',
       // setState: { message: true},
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
        text: 'ACCEPT AND ENCRYPT',
       // setState: {message: false},
        nextText: 6
      },
    ]
  },
  
     {
    id: 6,
    text: "Contract Invitation > Contreact Bounty> Bounty Info: NO INFO AVAILABLE. Report to TSCA Station 'Endora' for further information. Advancement 1000 Credits. By accepting advancement, you are hearby liable for the amount, if not delivered, under TSCA Code 38, Section 2, Paragraph 7 of the Unified Galactic Consortium Agreement.",
    options: [
      {
        text: "AGREE AND ACCEPT TERMS",
        nextText: 7
      },
    ]
  },


  {
    id: 7,
    text: "You have agreed to take the bounty. A copy of the agreement and deposit slip have been transmitted to your account. Your advancement funds are available immediately. Please report in 24 hours or less or we will be forced to place a warrant out and will litigate for any funds and costs for your extradition. Thank you!",
    options: [
      {
        text: "Close message.",
        nextText: 8
      },
    ]
  },

  {
    id: 8,
    text: "You're laying in your bed, in the dark, still tired from the late night at the Ra-sta space station. Ramen Nebula is your kryptonite.",
    options: [
      {
        text: "Do nothing",
        nextText: 9
      },
      {
        text: "Speak command to turn lights on.",
        nextText: 10
      }, 
    ]
  },

  {
    id: 9,
    text: "You choose to stay in the dark like a bat.",
    options: [
      {
        text: "Speak command to turn lights on.",
        nextText: 10
      },
    ]
  },


  {
    id: 10,
    text: "You say 'lights on' and the flourescent light illuminates. You see your room in all it's bachelor glory. It's nothing special, just what you can afford and a place to rest your head. It's a single room with a bathroom. There is a main viewing monitor in front of you on the wall. A sink to your right. One closet. The bathroom is beside the sink. You have a fridge and freezer combo in the corner. The door to exit is on your left. You have a desk, to your left, that doubles as a dresser. Your personal viewing monitor sits upon your desk, blinking with a new undread message.",
    options: [
      {
        text: "Look in the closet",
        nextText: 11
      },
      {
        text: "Look in the fridge",
        nextText: 12
      },
      {
        text: 'Look in the bathroom',
        nextText: 13
      },
    ]
  },

  {
    id: 11,
    text: "You open the door and a flourescent light automatically illuminates. You see your clothes hanging on a rack. There are boots on the floor. Your utility belt is on a shelf above the rack. There is an open box of charge plugs next to the belt.",
    options: [
      {
        text: "Put on clothes and belt",
        nextText: 14
      },
    ]
  },

  {
    id: 12,
    text: "You open the fridge door and the light comes on inside. The cold air pours out as you peek inside to see what's there. The fridge is empty. So is the freezer, except some ice trays. You haven't had a job in weeks so, there hasn't been much food in your apartment.",
    options: [
      {
        text: "Close fridge door",
        nextText: 15
      },
    ]
  },

  {
    id: 13,
    text: "The flourescent light illuminates as you open the bathroom door and an exhaust fan turns on. You see a toilet in front of you and a shower to the right.",
    options: [
      {
        text: "Leave bathroom",
        nextText: 15
      },
    ]
  },

  {
    id: 14,
    text: "You put on a button up, mustard-yellow long-sleeve shirt with the collar flipped up. You tie a black tie, around your neck, that you like to wear loosely just for show. You dawn a navy blue sport coat and slacks. You lace up some black boots. You also strap on a utility belt that contains a charge pistol, charge pistol plugs, your I.D. and other credentials, and your key cards for your apartnemt and ship.",
    options: [
      {
        text: "Leave closet",
        nextText: 16
      },
    ]
  },

  {
    id: 15,
    text: "You're in your room, still in your pajamas.",
    options: [
      {
        text: "Look in the closet",
        nextText: 11
      },
      {
        text: "Look in the fridge",
        nextText: 12
      },
      {
        text: 'Look in the bathroom',
        nextText: 13
      },
    ]
  },

  {
    id: 16,
    text: "You're in your room, fully dressed for exploring the galaxy.",
    options: [
      {
        text: "Stand there, awkwardly, like an idiot, not really knowing what to do with your hands.",
        nextText: 17
      },
      {
        text: "Leave apartment",
        nextText: 18
      },
    ]
  },

  {
    id: 17,
    text: "You do exactly that. Now, will you stop torturing yourself and get out of here?",
    options: [
      {
        text: "Leave apartment",
        nextText: 18
      },
      {
        text: "If you choose this option, and don't leave at this point, so help me, I will restart the game.",
        nextText: -1
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