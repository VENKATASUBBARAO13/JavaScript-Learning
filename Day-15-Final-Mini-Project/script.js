// Day 15: Final Mini Project - To-Do App

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.addEventListener("click", function() {
        listItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = "";
});
