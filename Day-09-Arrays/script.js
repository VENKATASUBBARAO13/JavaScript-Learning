// Day 9: Arrays

const skills = ["HTML", "CSS", "JavaScript"];
skills.push("GitHub");

const skillList = skills.map(function(skill) {
    return `<li>${skill}</li>`;
}).join("");

console.log(skills);
console.log("First skill:", skills[0]);

document.getElementById("output").innerHTML = `
    <p>Total Skills: ${skills.length}</p>
    <ul>${skillList}</ul>
`;
