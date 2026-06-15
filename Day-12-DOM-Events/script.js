// Day 12: DOM Events

const button = document.getElementById("change-button");
const message = document.getElementById("message");
let clicks = 0;

button.addEventListener("click", function() {
    clicks++;
    message.textContent = `You clicked the button ${clicks} time(s).`;
});
