// Day 7: Loops

let listItems = "";

for (let day = 1; day <= 5; day++) {
    listItems += `<li>Practice JavaScript for day ${day}</li>`;
}

let countdown = 3;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}

document.getElementById("output").innerHTML = `
    <h2>Practice Plan</h2>
    <ul>${listItems}</ul>
`;
