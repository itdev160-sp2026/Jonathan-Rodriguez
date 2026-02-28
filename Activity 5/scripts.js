// ============================
// Part A: Element Selection
// ============================

const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const buttons = document.querySelectorAll(".operation");
const resultDiv = document.getElementById("result");

console.log("Number 1:", number1Input);
console.log("Number 2:", number2Input);
console.log("Buttons:", buttons);
console.log("Result Div:", resultDiv);


// ============================
// Part B: Event Object Helper
// ============================

function logEventDetails(event) {
    console.log("Event Type:", event.type);
    console.log("Target:", event.target);
    console.log("Tag Name:", event.target.tagName);
    console.log("Button Text:", event.target.textContent);
    console.log("Current Target:", event.currentTarget);
}


// ============================
// Part C: Math Operations
// ============================

function getValidatedNumbers() {
    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Please enter valid numbers.";
        return null;
    }

    return { num1, num2 };
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero.";
    }
    return a / b;
}


// ============================
// Part D: Event Listeners
// ============================

buttons.forEach(button => {
    button.addEventListener("click", function(event) {

        logEventDetails(event);

        // Visual feedback
        buttons.forEach(btn => btn.classList.remove("active"));
        event.target.classList.add("active");

        const values = getValidatedNumbers();
        if (!values) return;

        const { num1, num2 } = values;

        let result;

        switch (event.target.textContent) {
            case "Add":
                result = add(num1, num2);
                break;
            case "Subtract":
                result = subtract(num1, num2);
                break;
            case "Multiply":
                result = multiply(num1, num2);
                break;
            case "Divide":
                result = divide(num1, num2);
                break;
        }

        resultDiv.textContent = result;
    });
});