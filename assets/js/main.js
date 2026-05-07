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


const marsIcon = document.getElementById("marsIcon");
marsIcon.addEventListener("click", () => {
  let modal = new bootstrap.Modal(document.getElementById('infoModal'));
  modal.show();
});


function openCard(tileNumber) {
  console.log("Clicked tile:", tileNumber);

  let modal = new bootstrap.Modal(document.getElementById('infoModal'));
  modal.show();
}


function openCard(tileNumber) {
  const messages = {
    1: "Trapped in Black Hole: You got sucked into a black hole. Consequences of journeying through deep dark space. Spacetime is warping, time is lost. At least you're not spending more money.",
    2: "Jupiter Moons: Buy a few moons, just because you can. They weren't yours, but now you can feel like they are. In reality, nothing has changed.",
    3: "Saturn: You reach Saturn. You can't get through its massive rings of ice and rock. You were here, but nobody will know. You could return home, but nobody will believe you. Conquer on.",
    4: "Saturn Moons: Jupiter moons weren't enough to satisfy you. Buy a few more, maybe you'll feel accomplished then.",
    5: "Uranus: You've traveled so far you have reached Uranus. A distant, humongous, icy giant indifferent to your presence.",
    6: "Oxygen Loss: Malfunction on your spaceship. Oxygen tanks lost. You face rapid asphyxiation and unconsciousness within 10 seconds.",
    7: "Uranus Ice Extraction: Using very rare and expensive technology, you extract the icy materials of the planet as proof of your greatness. Too bad it'll probably melt by the time you can show people.",
    8: "Neptune: So far away from home, it's dark and cold as ice. The supersonic winds stop you from trekking in deeper. A single orbit takes roughly 165 Earth years. Move on, or be stuck for the rest of your life.",
    9: "Kuiper Belt: You drifted off to far distances, many resources spent in the process. The region of the Kuiper Belt, remnants of icy leftovers that never formed planets float. Debris field of the forgotten, you are among fragments of nothing.",
    10: "Pluto: You see Pluto, the once beloved planet, stripped of its planethood and left alone as a ghost asset. You have more in common than you think. Claim Pluto as your own, maybe people will care again.",
    11: "Black Hole: Gravity collapses all around you. Falling into the endless trapped void.",
    12: "Andromeda Galaxy: You've spent so much time conquering the Milky Way, why stop there? There is no entry to Andromeda, yet. Invest money to have the first expedition.",
    13: "Venus: Earth's hot next door neighbor, but not a friendly one. The atmosphere is too thick and too toxic for survival. That doesn't stop you from conquering the rocky landscape, pay to name volcanoes after yourself.",
    14: "Mercury: Closest to the sun. No protection, no reward.",
    15: "Sun: Expansion overheats. Everything melts.",
    16: "Launch Origin: You set off to conquer beyond the world. Why not, you have the money. But what do you really own? What are you losing? Consider this, and continue on.",
    17: "Moon Landing: Pit stop on the moon. You're not the first person here, but people will know you. Buy the dark side and name it after yourself. The dark side of the moon is now yours, theoretically.",
    18: "Mars: You land on the red planet. You claim the area for possible future construction. But no life is viable here, so you wasted your money.",
    19: "Asteroid Belt: On your way to Jupiter, you must cross and conquer the asteroid belt. But you're rich, buy your way through. Many resources spent to pass the rocky bodies.",
    20: "Jupiter: You finally make it to the gas giant. Storms raging below, you cannot stand on it. You trademark your visit as proof. More money wasted for false progress."
  };

  document.getElementById("modalText").innerText =
    messages[tileNumber] || "Unknown region in space.";

  const modal = new bootstrap.Modal(document.getElementById("infoModal"));
  modal.show();
}

