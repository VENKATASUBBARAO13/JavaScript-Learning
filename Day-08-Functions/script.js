// Day 8: Functions

function greetLearner(name) {
    return `Hello, ${name}! Keep learning JavaScript.`;
}

function addNumbers(a, b) {
    return a + b;
}

const greeting = greetLearner("Bunny");
const total = addNumbers(15, 25);

console.log(greeting);
console.log(total);

document.getElementById("output").innerHTML = `
    <p>${greeting}</p>
    <p>15 + 25 = ${total}</p>
`;
