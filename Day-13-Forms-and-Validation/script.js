// Day 13: Forms and Validation

const form = document.getElementById("signup-form");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        result.textContent = "Please fill in all fields.";
        result.className = "error";
        return;
    }

    result.textContent = `Thanks, ${name}! Your email ${email} was received.`;
    result.className = "success";
    form.reset();
});
