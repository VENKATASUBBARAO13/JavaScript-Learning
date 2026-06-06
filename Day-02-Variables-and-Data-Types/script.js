// Day 2: Variables and Data Types
// Use const when a value should not change. Use let when it can change.

const learnerName = "Bunny";
let age = 18;
let isLearning = true;

console.log("Name:", learnerName);
console.log("Age:", age);
console.log("Learning JavaScript:", isLearning);

document.getElementById("output").innerHTML = `
    <p>Name: ${learnerName}</p>
    <p>Age: ${age}</p>
    <p>Learning JavaScript: ${isLearning}</p>
`;
