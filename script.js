// Function to clear the entire display
function clearDisplay() { 
    // Set the value of the element with id "display" to an empty string
    document.getElementById("display").value = "";
}

// Function to clear the last entered character (like a backspace)
function clearEntry() {
    // Get the element with id "display"
    const display = document.getElementById('display');
    // Remove the last character from the current value
    display.value = display.value.slice(0, -1);
}

// Function to append a symbol (number or operator) to the display
function appendSymbol(symbol) {
    // Add the provided symbol to the end of the current display value
    document.getElementById("display").value += symbol;
}

// Function to evaluate the mathematical expression in the display
function calculate() {
    // Get the element with id "display"
    const display = document.getElementById("display");
    try {
        // Use eval() to evaluate the expression entered by the user
        display.value = eval(display.value);
    } catch (error) {
        // If there is an error in the expression, show "Error"
        display.value = "Error";
    }
}

// Function to toggle the sign of the current number
function toggleSign() {
    // Get the element with id "display"
    const display = document.getElementById("display");
    // If the display is not empty, change the sign of the number
    display.value = display.value ? String(-parseFloat(display.value)) : "";
}
