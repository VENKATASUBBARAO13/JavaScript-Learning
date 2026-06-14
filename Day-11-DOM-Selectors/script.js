// Day 11: DOM Selectors
// DOM means Document Object Model. JavaScript can select and change HTML elements.

const heading = document.querySelector("h1");
const info = document.querySelector(".info");
const button = document.querySelector("button");

heading.style.color = "#2563eb";
info.textContent = "This text was selected and changed using JavaScript.";
button.textContent = "DOM Button";

console.log(heading, info, button);
