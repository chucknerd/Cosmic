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
  state = Object.assign(state, option.setState)
}

//defined textNodes or options the player chooses and what happens next

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        text: 'Take goo.',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Leave the goo.',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "You venture forth in search of answers to where you are, when you come across a merchant.",
    options [
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
      }
    ]
  }
]

//calls startGame as soon as page loads
startGame()