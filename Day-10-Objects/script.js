// Day 10: Objects

const learner = {
    name: "Bunny",
    course: "JavaScript Fundamentals",
    progress: 10,
    introduce: function() {
        return `${this.name} is learning ${this.course}.`;
    }
};

console.log(learner.name);
console.log(learner.introduce());

document.getElementById("output").innerHTML = `
    <p>Name: ${learner.name}</p>
    <p>Course: ${learner.course}</p>
    <p>Current Day: ${learner.progress}</p>
    <p>${learner.introduce()}</p>
`;
