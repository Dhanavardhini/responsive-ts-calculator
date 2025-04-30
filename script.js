var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");
var currentInput = "";
// Loop through each button
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var value = button.dataset.value;
        if (!value)
            return;
        if (value === "=") {
            try {
                // Evaluate the expression entered in the display
                currentInput = eval(currentInput).toString();
            }
            catch (error) {
                // Catch any error (e.g., invalid input)
                currentInput = "Error";
            }
        }
        else if (value === "C") {
            // Clear the display on pressing 'C'
            currentInput = "";
        }
        else {
            // Append the clicked value to the current input
            currentInput += value;
        }
        // Update the display with the current input
        display.value = currentInput;
    });
});
