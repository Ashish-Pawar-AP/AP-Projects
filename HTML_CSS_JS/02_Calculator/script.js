// GitHub Copilot

// Get reference to the calculator display (input element)
const displayCal = document.getElementById("inputBox");
// Select all calculator buttons
const buttons = document.querySelectorAll("button");

let inputString = ""; // stores the current expression as a string
const buttonArray = Array.from(buttons); // convert NodeList to array for iteration

buttonArray.forEach((button) => {
  // Add click listener to each button
  button.addEventListener("click", (e) => {
    const btn = e.target.innerHTML; // the text on the clicked button

    // If "=" clicked, evaluate the expression
    if (btn === "=") {
      try {
        // Using eval to compute the result (be cautious with untrusted input)
        inputString = eval(inputString);
        displayCal.value = inputString;
      } catch (error) {
        // If evaluation fails, show error and reset the input
        displayCal.value = "Error";
        inputString = "";
      }
    } else if (btn === "AC") {
      // Clear all: reset expression and display
      inputString = "";
      displayCal.value = inputString;
    } else if (btn === "DEL") {
      // Delete last character from the expression
      inputString = inputString.substring(0, inputString.length - 1);
      displayCal.value = inputString;
    } else {
      // For regular number/operator buttons, prevent consecutive operators
      const operators = ["+", "-", "*", "/", "%"];
      const lastChar = inputString[inputString.length - 1];
      const currentChar = btn;

      // Append the character only if it doesn't create two operators in a row
      if (!(operators.includes(lastChar) && operators.includes(currentChar))) {
        inputString += currentChar;
        displayCal.value = inputString;
      }
    }
  });
});
