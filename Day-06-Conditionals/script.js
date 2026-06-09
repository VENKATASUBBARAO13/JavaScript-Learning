// Day 6: Conditionals

const marks = 82;
let grade;

if (marks >= 90) {
    grade = "A+";
} else if (marks >= 75) {
    grade = "A";
} else if (marks >= 60) {
    grade = "B";
} else {
    grade = "Keep practicing";
}

console.log("Grade:", grade);

document.getElementById("output").innerHTML = `
    <p>Marks: ${marks}</p>
    <p>Grade: ${grade}</p>
`;
