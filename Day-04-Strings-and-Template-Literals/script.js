// Day 4: Strings and Template Literals

const firstName = "Bunny";
const skill = "JavaScript";
const sentence = `${firstName} is learning ${skill}.`;

console.log(sentence);
console.log(sentence.length);
console.log(sentence.toUpperCase());

document.getElementById("output").innerHTML = `
    <p>Original: ${sentence}</p>
    <p>Length: ${sentence.length}</p>
    <p>Uppercase: ${sentence.toUpperCase()}</p>
    <p>Does it include JavaScript? ${sentence.includes("JavaScript")}</p>
`;
