// main.js
console.log("Hello from main.js");

let targetElement = document.querySelector("h1");
console.log(targetElement.outerHTML);
targetElement.addEventListener("mouseover", function () {
	console.log(this.innerText);
	this.innerText = "NO SPACE";
	this.style = "cursor: wait";
});
targetElement.addEventListener("mouseout", function () {
	this.innerText = "MY SPACE";
	this.style = "cursor: pointer";
});


const tileMap = {
  1: 16,
  2: 17,
  3: 18,
  4: 19,
  5: 20,
  6: 1,
  7: 2,
  8: 3,
  9: 4,
  10: 5,
  11: 6,
  12: 7,
  13: 8,
  14: 9,
  15: 10,
  16: 11,
  17: 12,
  18: 13,
  19: 14,
  20: 15
};

function openCard(tileNumber) {
  console.log("Clicked tile:", tileNumber);
  let modal = new bootstrap.Modal(document.getElementById('infoModal'));
  modal.show();
}

function openCard(tileNumber) {
  const messages = {
    1: "LAUNCH ORIGIN: You set off to conquer beyond the world. Why not, you have the money. But what do you really own? What are you losing? Consider this, and continue on.",
    2: "MOON LANDING: Pit stop on the moon. You're not the first person here, but people will know you. Spend money to name the dark side after yourself. The dark side of the moon is now yours, theoretically.",
    3: "MARS: You land on the red planet. You claim the area for possible future construction. But no life is viable here, guess you wasted your money.",
    4: "ASTEROID BELT: On your way to Jupiter, you must cross and conquer the asteroid belt. But you're rich, buy your way through. Many resources spent to pass the rocky bodies.",
    5: "JUPITER: You make it to the gas giant. Storms raging below, you cannot stand on it. You've came so far, but there is still so much beyond. Will the expidition ever be enough?",
    6: "BLACK HOLE VOID: You got sucked into a black hole. Consequences of trying to conquer the infinite. Spacetime is warping, time is lost. At least you're not spending more money.",
    7: "JUPITER MOONS: Buy a few moons, just because you can. They weren't yours, but now you can feel like they are. In reality, nothing has changed.",
    8: "SATURN: You reach Saturn. You can't get through its massive rings of ice and rock. You were here, but nobody will know. You could return home, but nobody will believe you.",
    9: "SATURN MOONS: Jupiter moons weren't enough to satisfy you. Buy a few more, maybe you'll feel accomplished then.",
    10: "URANUS: Your expansion traveled so far you have reached Uranus. A distant, humongous, icy giant indifferent to your presence. Its cold, dark, and lonely, will you ever return home?",
    11: "OXYGEN LOSS: Malfunction on your spaceship. Oxygen tanks lost. You face rapid asphyxiation and unconsciousness within 10 seconds.",
    12: "URANUS ICE EXTRACTION: Using very rare and expensive technology, you extract the icy materials from Uranus as proof of your greatness. Too bad it'll probably melt by the time you travel home.",
    13: "NEPTUNE: So far away from home, it's dark and cold as ice. The supersonic winds stop you from trekking in deeper. A single orbit takes roughly 165 Earth years. Move on, or be stuck for the rest of your life.",
    14: "KUIPER BELT: Your expidition drifts off to far distances, many resources spent in the process. In the Kuiper Belt, remnants of icy planet leftovers float. A debris field of the forgotten, you are among fragments of nothing.",
    15: "PLUTO: You see Pluto, the once beloved planet, stripped of its planethood and left alone as a ghost asset. You have more in common than you think. Claim Pluto as your own, maybe people will care again.",
    16: "BLACK HOLE: You're near a black hole. It sucks you in, gravity collapses all around you. Falling into the trapped void.",
    17: "ANDROMEDA GALAXY: You've spent so much time conquering the Milky Way, why stop there? There is no entry to Andromeda, yet. Invest money to have the first expedition.",
    18: "THE SUN: Flew too close to the sun. You tried to attain an eternal energy source, but your expansion cannot conquer the power of nuclear heat.",
    19: "MERCURY: The first planet, but also the smallest. Add it to the collection anyway. You are so close to the sun, temperatures are too extreme and depleting resources.",
    20: "VENUS: Earth's hot next door neighbor, but not a friendly one. The atmosphere is too thick and too toxic for survival. That won't stop you from conquering the rocky landscape, pay to name volcanic landmarks after yourself.",   
  };
  const buttonLabels = {
    1: "CONTINUE EXPANSION",
    2: "PURCHASE: $10M",
    3: "CLAIM: $10M",
    4: "EXPEND RESOURCES: $10M",
    5: "CONQUER ON",
    6: "ACCEPT FATE",
    7: "PURCHASE: $10M",
    8: "CONQUER ON",
    9: "PURCHASE: $10M",
    10: "CONQUER ON",
    11: "INSTANT DEATH",
    12: "EXPEND RESOURCES: $10M",
    13: "MOVE FORWARD",
    14: "EXPEND RESOURCES: $10M",
    15: "CLAIM: $10M",
    16: "FACE THE DARKNESS",
    17: "INVEST: $10M",
    18: "INSTANT DEATH",
    19: "CLAIM: $10M",
    20: "PURCHASE: $10M"
  };

  const fullText = messages[tileNumber] || "Unknown region in space.";
  const splitText = fullText.split(":");
  const title = splitText[0];
  const body = splitText.slice(1).join(":");

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = body;

  const modal = new bootstrap.Modal(document.getElementById("infoModal"));
   clearHighlight();
   modal.show();
   document.getElementById("modalText").innerText =
   messages[tileNumber];
   document.getElementById("modalButton").innerText =
   buttonLabels[tileNumber];
}


let firstRoll = true;
let currentTile = 16;
const forbiddenTile = 6;

function roll() {
  let number;
  if (firstRoll) {
    number = 1;
    firstRoll = false;
  } 
  else {
    do {
      number = Math.floor(Math.random() * 20) + 1;
    } while (number === forbiddenTile);
  }
  currentTile = number;
  document.getElementById("rollResult").innerText =
    "CLICK TILE " + number;
  highlightTile(number);
}

function highlightTile(tileNumber) {
  document.querySelectorAll(".tile").forEach(tile => {
    tile.classList.remove("active-tile");
  });
  const tiles = document.querySelectorAll(".tile");
  const index = tileMap[tileNumber] - 1;
  const target = tiles[index];
  if (target) {
    target.classList.add("active-tile");
  }
}

function clearHighlight() {
  document.querySelectorAll(".tile").forEach(tile => {
    tile.classList.remove("active-tile");
  });
}
