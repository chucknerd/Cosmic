/* NOTES: 
11/18/2019 / NEED TO GO BACK AND EDIT ALL DIALOGUE RESPONSES TO HAVE ' ' LIKE THEY ARE TALKING TO YOU */


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
    text: "Welcome to Cosmic! A text-based adventure game set in the far reaches of space. --Instructions: Refresh your browser at any time to restart the game. There are no saves, so choose wisely...Depending on your choices, your penalty will be more or less severe. You may go back one space, or have to restart the game. Select options to advance your adventure. Thanks for playing! *Created and owned by Little Guyz Entertainment. Copyright 2019",
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
      text: 'Wake up the next day and Start Over',
      nextText: 3
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
    text: "Contract Invitation > Contreact Bounty> Bounty Info: NO INFO AVAILABLE. Report to TSCA Station 'Endora' for further information. Advancement 1000 Woolongs. By accepting advancement, you are hearby liable for the amount, if not delivered, under TSCA Code 38, Section 2, Paragraph 7 of the Unified Galactic Consortium Agreement.",
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
  
  {
    id: 18,
    text: "You open the door to the blinding light of day. You hear the sounds of the city around you. There's a black cat purring at your feet and rubbing on your ankles.",
    options: [
      {
        text: "Look around",
        nextText: 19
      },
      {
        text: "Pet the kitty",
        nextText: 20
      },
      {
        text: "Walk down the stairs",
        nextText: 21
      },
    ]
  },

  {
    id: 19,
    text: "You see the city of Tibed. It's a very busy and crowded city. There are no houses, only apartments stacked on top of each other like blocks. You look at the sky and see the sun and the TSCA space station, hazy and blue off in the distance. You also see ship traffic going in and out of the atmosphere.",
    options: [
      {
        text: "Walk down the stairs",
        nextText: 21
      },
    ]
  },
  {
    id: 20,
    text: "You pet the little black cat. She's short haired and has yellow eyes.",
    options: [
      {
        text: "Look around",
        nextText: 19
      },
      {
        text: "Walk down the stairs",
        nextText: 21
      },
    ]
  },
  {
    id: 21,
    text: "You head down the stairs and walk towards the launch pad where your ship is parked. You see a sign that says 'Star Casino. Free ramen until 7pm!.",
    options: [
      {
        text: "Go to the casino.",
        nextText: 22
      },
      {
        text: "Keep heading to launch pad.",
        nextText: 23
      },
    ]
  },

  {
    id: 22,
    text: "You go to the casino and they treat you like a king. You spent the advance that the TSCA sent you. You now have no money to fuel your ship and do not make the deadline for the meeting. The TSCA apprehands you and all your licences are revoked and you spend the next months in the Tibed County Detention Center.",
    options: [
      {
        text: "Serve your time and go back a few spaces",
        nextText: 18
      },
    ]
  },

  {
    id: 23,
    text: "You reach the launchpad and see your ship parked where you left it.",
    options: 
    [
      {
        text: "Jump in and fly off",
        nextText: 24
      },
      {
        text: "Inspect ship",
        nextText: 25
      },
    ]
  },

  {
    id: 24,
    text: "You jump in, fire up the engines, and burn off to exit the atmosphere. However, you have no fuel left to exit and you run out mid-air. You ship crashes with you in it and you die.",
    options: [
      {
        text: "Go to pilot school, retake your test, and go back a few spaces",
        nextText: 23
      },
    ]
  },

  {
    id: 25,
    text: "You do a pre-flight walk-around and inspect your ship. It's a remodeled Mono-racer you had built by an old friend. There's a nameplate on the side that says 'Swordfish II.'",
    options: [
      {
        text: "Check exterior of the ship",
        nextText: 26
      },
      {
        text: "Get in pilot-station and check systems",
        nextText: 27
      },
    ]
  },

  {
    id: 26,
    text: "You do an inepction of the outside of your ship and notice nothing out of the ordinary. You see the chipped and scratched red paint and wish you had the money for some touchups.",
    options: [
      {
        text: "Get in pilot-station and check systems",
        nextText: 27
      },
    ]
  },

  {
    id: 27,
    text: "You flip the battery switch on and you hear the computers and systems boot up. Flight clearance is a negative. Weather conditions show nominal. There are no obscrutcions for take-off. The fuel core indicator says empty.",
    options: [
      {
        text: "Obtain flight clearance.",
        nextText: 28
      },
      {
        text: "Get out and refuel",
        nextText: 29
      },
      {
        text: "Take off already!",
        nextText: 30
      },
    ]
  },

  {
    id: 28,
    text: "You speak the flight clearance command and the computers relay your request to the federal flight systems relays. You recieve a return message that states 'Clear to launch. Expiration 1 hour. Launch Code: 19AAA987C.",
    options: [
      {
        text: "Get out and refuel",
        nextText: 29
      },
      {
        text: "Take off already!",
        nextText: 24
      },
    ]
  },

  {
    id: 29,
    text: "You jump out of your pilot station and walk over to the fuel core pump. Core charges are rediculous nowadays.",
    options: [
      {
        text: "Swipe your account card and fuel your jet.",
        nextText: 32
      },
    ]
  },

  {
    id: 30,
    text: "You take off without flight clearance or any fuel. You slam into an oncoming freighter ship. You didn't explode because you had almose zero fuel to begin with, so you only died upon impact.",
    options: [
      {
        text: "Go to pilot school, retake your test, and go back a few spaces",
        nextText: 23
      },
    ]
  },

  {
    id: 31,
    text: "You take off, fully fueled, and with no flight clearance. You slam into an air bus that has just returned from the senior citizens center in downtown Tibed. Luckily it was empty and the bus flights are automated. You are the only one killed in the firey crash as your completely full fuel core ignites.",
    options: [
      {
        text: "Go to pilot school, retake your test, and go back a few spaces",
        nextText: 23
      },
    ]
  },

  {
    id: 32,
    text: "You swipe your card and the pump begins it's sequence. You grab the charging connector from the pump and unravel it. You open the fuel core charging port and shove that sucker in. Once connection is made, it automatically begins charging. You wait a bit and have a smoke out of shear boredome. Once it's completed charging, you do everything you just did, but in reverse order.",
    options: [
      {
        text: "Get in pilot station and fire it up.",
        nextText: 33
      },
    ]
  },

  {
    id: 33,
    text: "You ignite the engines. You check all systems and see green GO signs accross the board. You move your stick around and check flight controls. Everything seems fine. You punch in your flight clearance number and get a return message stating you are clear for takeoff and your number is still valid for the remainder of the hour. You throttle up your verticle thrusters to clear the pad. Once you're in the air, you engage forward thrust and send power to your rear engines and speed off into the sky toward the designated atmopsheric exit flight path that's been assigned to you.",
    options: [
      {
        text: "Look out the window",
        nextText: 34
      },
    ]
  },

  {
    id: 34,
    text: "You see the curviture of Perseus start t become very clear as you speed off higher and higher above the planet's surface. You still love the view and it always brings you back the the first time you saw it as a child.",
    options: [
      {
        text: "Keep flying.",
        nextText: 35
      },
    ]
  },

  {
    id: 35,
    text: "You keep flying onward to the TSCA space station 'Endora.' As you exit the atmopshere, you feel the ship shaking as it rips through to the void of space. Your computer advises that you've left the atmosphere and has switched from atmospheric thrusters to main core thrusters.",
    options: [
      {
        text: "Look ahead",
        nextText: 36
      },
    ]
  },

  {
    id: 36,
    text: "You see the TSCA Space Station 'Endora.' It's a massive structure that maintains it's presence outside of the orbit of Perseus. The station is shaped almost like a galaxy. There is a central core that everything revolves around. You see ship traffic coming in and out of the ship's transport hatches. You also see flashes of light coming from warp drive runways, designated for warp drive take-off and landing.",
    options: [
      {
        text: "Land in space station.",
        nextText: 37
      },
      {
        text: "Request clearance to land in space station.",
        nextText: 39
      },
    ]
  },

  {
    id: 37,
    text: "You approach to land without clearance and a warning blares from your systems that you have been targeted by many weapons. The TSCA says 'STOP IMMEDIATELY AND REQUEST CLEARANCE OR YOUR SHIP WILL BE SHOT. YOU HAVE TEN SECONDS TO COMPLY.'",
    options: [
      {
        text: "Keep flying forward",
        nextText: 38
      },
      {
        text: "Stop ship and request clearance",
        nextText: 39
      },
    ]
  },

  {
    id: 38,
    text: "You continue to fly forward and the TSCA auto-turret system cuts you down like a watermellon under a guillotine.",
    options: [
      {
        text: "Brush up on your TSCA protocols and go back a space",
        nextText: 36
      },
    ]
  },

  {
    id: 39,
    text: "You tell your computer to scan for landing clearance frequencies and it brings up a list. You choose the TSCA frequency and request clearance through their automated system. You get a return message stating 'Landing Clearance granted for public landing docks aboard TSCA Space Station Endora. Use caution when entering and exiting dock bay doors. Your confirmation number is 87965458. Your space is reserved indefinitely.' You are surprised because, normally it's only good for a few hours and you have to renew or get approval for longer stays.",
    options: [
      {
        text: "Land ship",
        nextText: 40
      },
    ]
  },

  {
    id: 40,
    text: "You land your ship in the designated public landing bay. You shut off all your systems and open the hatch. You jump out, onto the landing bay floor and activate your hatch locks and alarms.",
    options: [
      {
        text: "Look around",
        nextText: 41
      },
      {
        text: "Exit the landing dock",
        nextText: 42
      },
    ]
  },

  {
    id: 41,
    text: "You're in the middle of a cold, large, metal room. There are many large panels running along the walls and you see the interior of the room is pretty banged up from people bashing into the hull with their ships. There's a fuel core pump to the right of your landing pad. The exit door is to the left. The landing bay doors are behind you.",
    options: [
      {
        text: "Exit the landing dock",
        nextText: 42
      },
    ]
  },

  {
    id: 42,
    text: "You walk toward the exit and see a sign above the door that says 'To Time and Space Control Agency Public Access Lobby.' You walk toward the door and it slides open to a large bay.",
    options: [
      {
        text: "Look around",
        nextText: 43
      },
      {
        text: "Ask someone where to go.",
        nextText: 44
      },
    ]
  },

  {
    id: 43,
    text: "The bay contains many people and TSCA agents. Some are standing, some are doing various tasks and speaking with each other. There are large view hatches all around the room and you can see the emptyness of the space, the stars, and ships flying around. You can also see Perseus through a window. There are many signs above desks that say 'Recieving.'",
    options: [
      {
        text: "Ask someone where to go.",
        nextText: 44
      },
    ] 
  },

  {
    id: 44,
    text: "Who do you ask?",
    options: [
      {
        text: "The nearest TSCA Security Police officer",
        nextText: 45
      },
      {
        text: "Go to the recieving desk and ask the agent",
        nextText: 46
      },
      {
        text: "Ask the Asturian with the scar on their face smoking a cigar.",
        nextText: 47
      },
      {
        text: "Ask a Helpful Desk Terminal",
        nextText: 48
      },
    ]
  },

  {
    id: 45,
    text: "You approach the nearest TSCA Security Police Officer that's currently beating a handcuffed suspect.",
    options: [
      {
        text: "Ask if you can help",
        nextText: 49
      },
      {
        text: "Tell the officer to stop",
        nextText: 50
      },
      {
        text: "Ask where new contractors go for work.",
        nextText: 51
      },
    ]
  },

  {
    id: 46,
    text: "You go to the nearest recieving desk",
    options: [
      {
        text: "Ask where new contractors go for work",
        nextText: 52
      },
    ]
  },

  {
    id: 47,
    text: "You walk up to the Asturian with the mean looking face.",
    options: [
      {
        text: "Ask where new contractors should go for work",
        nextText: 53
      },
    ]
  },

  {
    id: 48,
    text: "You walk up to the Helpful Desk Terminal to your left and it says 'Hello. I'm Helpful Desk. How may I help you?",
    options: [
      {
        text: "Ask where new contractors should go for work",
        nextText: 54
      },
      {
        text: "Ask where the bathroom is",
        nextText: 55
      },
      {
        text: "Ask where the food court is",
        nextText: 56
      },
      {
        text: "Ask what kind of bear is best.",
        nextText: 57
      },
    ]
  },

  {
    id: 49,
    text: "You ask the officer if you can help beat the suspect and the officer enhtusiastically says 'Yes!' and you both engage in police brutality together.",
    options: [
      {
        text: "Ask where new contractors go for work.",
        nextText: 51
      },
    ]
  },

  {
    id: 50,
    text: "You tell the officer to stop and they believe that you are trying to help the suspect escape. They pull their charge pistol, hit you accross the temple, and turn your lights off.",
    options: [
      {
        text: "Become less naive and go back a few spaces.",
        nextText: 45
      },
    ]
  },

  {
    id: 51,
    text: "You ask the officer and he stops beating the suspect and happily tells you to go to receiving, then goes back to the beating.",
    options: [
      {
        text: "Go to recieving",
        nextText: 52
      },
    ]
  },

  {
    id: 52,
    text: "The recieving clerk takes your I.D. and hands you a contractor's badge. They tell you you've been granted full access. Again, like your parking spot, you're confused because contractors normally don't get full access to anything. The clerk tells you to head right in and hands you your badge.",
    options: [
      {
        text: "Take the badge and walk in.",
        nextText: 58
      },
    ]
  },

  {
    id: 53,
    text: "They say 'Fuck off'",
    options: [
      {
        text: "Press the issue and tell him not to talk to you like that.",
        nextText: 59
      },
      {
        text: "Leave him alone.",
        nextText: 60
      },
    ]
  },

  {
    id: 54,
    text: "The helpful desk tells you to go to any recieving desk in the TSCA Public Lobby, located in this sector, Sector 5.",
    options: [
      {
        text: "Go to recieving",
        nextText: 52
      },
    ]
  },

  {
    id: 55,
    text: "'Relief rooms are located on the forward and aft locations of each sector'.",
    options: [
      {
        text: "Ask where new contractors should go for work",
        nextText: 54
      },
      {
        text: "Ask where the food court is",
        nextText: 56
      },
      {
        text: "Ask what kind of bear is best.",
        nextText: 57
      },
    ]
  },

  {
    id: 56,
    text: "'The TSCA Public Cafeteria is located in Sector 4.'",
    options: [
      {
        text: "Ask where new contractors should go for work",
        nextText: 54
      },
      {
        text: "Ask where the bathroom is",
        nextText: 55
      },
      {
        text: "Ask what kind of bear is best.",
        nextText: 57
      },
    ]
  },

  {
    id: 57,
    text: "'A black bear.'",
    options: [
      {
        text: "Ask where new contractors should go for work",
        nextText: 54
      },
      {
        text: "Ask where the bathroom is",
        nextText: 55
      },
      {
        text: "Ask where the food court is",
        nextText: 56
      },
    ]
  },
  
  {
    id: 58,
    text: "You walk to the door and swipe your badge. The light turns green and the door slides open. The huge room is full of desks and agents working. You see a sign above a desk that says 'Contractors.'",
    options: [
      {
        text: "Go to contractor desk.",
        nextText: 61
      },
    ]
  },


  {
    id: 59,
    text: "You kindly advise the mean person that you don't appreciate the tone they used toward you. Before you can finish educating him on ettiquite, a bolt of electricity shoots from his belt and you black out.",
    options: [
      {
        text: "Keep your dignity and go back a space.",
        nextText: 60
      },
    ]
  },

  {
    id: 60,
    text: "Who do you ask?",
    options: [
      {
        text: "The nearest TSCA Security Police officer",
        nextText: 45
      },
      {
        text: "Go to the recieving desk and ask the agent",
        nextText: 46
      },
      {
        text: "Ask a Helpful Desk Terminal",
        nextText: 48
      },
    ]
  },

  {
    id: 61,
    text: "You go to the contractor desk and tell them you're here for a job. They scan your badge and tell you to walk into the briefing room, they are waiting for you.",
    options: [
      {
        text: "Go to briefing room.",
        nextText: 62
      },
    ]
  },

  {
    id: 62,
    text: "You walk into the briefing room and there is a gigantic table. It's empty except two men in suits, sitting on one end. They ask you to have a seat in front of a folder on the other end of the table.",
    options: [
      {
        text: "Tell them you'd prefer to stand. Less blood clots.",
        nextText: 63
      },
      {
        text: "Have a seat and listen.",
        nextText: 64
      },
    ]
  },

  {
    id: 63,
    text: "One of the men respond 'No, that's weird. You're going to sit.",
    options: [
      {
        text: "Have a seat and listen.",
        nextText: 64
      },
    ]
  },

  {
    id: 64,
    text: "'We've contracted you today, not because you are the best, but because you are not. We need someone who's not flashy and is able to stay below the radar of any circle. We need you. There is a new threat to the galaxy that's operating on Manora Prime. They call themselves Zorgoth. We need you to eliminate their leadership either by apprehension or elimination. You'll have no personal expenses, your contractor's I.D. is wired to TSCA accounts, so spend whatever it takes. We will be monitoring expenses though, so only necessities for the job. You'll also get paid personal money on top of your advance. 50,000 Woolongs. Half now, half after you're done. Any questions, ask dispatch with the frequency in the file in front of you. Zorgoth works in the shadows now, after the war, but we still show activity of units trying to revive their cause. Good luck.",
    options: [
      {
        text: "Read file.",
        nextText: 65
      },
    ]
  },

  {
    id: 65,
    text: "You open the electronic file. 'Visa System, Manora Prime. Desert planet. Terror cells that call themselves 'Zorgoth' are remnents from an army led accross the galaxy that ended it's march on Perseus when they were defeated and eliminated by it's inhabitants. They were known to have disbanded as a whole, but there are still some who operate under the name. Travel to Manora Prime and eliminate or detain the cell. Hire locals to help. Your budget is unlimited. 25,000 Woolongs will be deposited into your personal account and your badge will be wired for expenses once you accept the contract.",
    options: [
      {
        text: "Accept contract.",
        nextText: 66
      },
    ]
  },

  {
    id: 66,
    text: "You accept and get all kinds of notifications on your wrist monitor with funds, accounts, locations, passes, clearances, everything you could possibly want and need for a job and your life. You feel great.",
    options: [
      {
        text: "Leave and start job.",
        nextText: 67
      },
    ]
  },

  {
    id: 67,
    text: "You get up to leave and the suits interrupt you. 'One more thing. If you're captured or decide to go rogue, we revoke all clearances and lisencure and garnish all funds and expenses from you. You'll essentially be stranded with whatever you have on hand. This is standard procedure to cover our asses. The personal advance is yours though.",
    options: [
      {
        text: "Start the job.",
        nextText: 68
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