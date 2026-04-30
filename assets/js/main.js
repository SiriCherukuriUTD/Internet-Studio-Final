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