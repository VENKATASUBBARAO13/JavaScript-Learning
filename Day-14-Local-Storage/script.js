// Day 14: Local Storage

const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");
const savedName = document.getElementById("saved-name");

function showSavedName() {
    const name = localStorage.getItem("learnerName");
    savedName.textContent = name ? `Saved name: ${name}` : "No name saved yet.";
}

saveButton.addEventListener("click", function() {
    localStorage.setItem("learnerName", nameInput.value);
    nameInput.value = "";
    showSavedName();
});

clearButton.addEventListener("click", function() {
    localStorage.removeItem("learnerName");
    showSavedName();
});

showSavedName();
