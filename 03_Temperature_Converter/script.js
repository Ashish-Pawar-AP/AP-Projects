// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to all required DOM elements
  const convertBtn = document.getElementById("convertBtn");
  const tempInput = document.getElementById("tempInput");
  const inputUnit = document.getElementById("inputUnit");
  const outputUnit = document.getElementById("outputUnit");
  const resultDiv = document.getElementById("result");
  const swapBtn = document.getElementById("swapBtn");

  // Add event listener for swap button to exchange input and output units
  swapBtn.addEventListener("click", () => {
    const temp = inputUnit.value;
    inputUnit.value = outputUnit.value;
    outputUnit.value = temp;
  });

  // Add event listener for convert button to perform temperature conversion
  convertBtn.addEventListener("click", () => {
    const tempValue = parseFloat(tempInput.value);
    let convertedValue;

    // Validate input is a number
    if (isNaN(tempValue)) {
      throw new Error("Please enter a valid number for temperature.");
    }

    // Convert from Celsius to other units
    if (inputUnit.value === "celsius") {
      if (outputUnit.value === "fahrenheit") {
        convertedValue = (tempValue * 9) / 5 + 32; // Celsius to Fahrenheit
      } else if (outputUnit.value === "kelvin") {
        convertedValue = tempValue + 273.15; // Celsius to Kelvin
      } else {
        convertedValue = tempValue; // Same unit, no conversion needed
      }
    } 
    // Convert from Fahrenheit to other units
    else if (inputUnit.value === "fahrenheit") {
      if (outputUnit.value === "celsius") {
        convertedValue = ((tempValue - 32) * 5) / 9; // Fahrenheit to Celsius
      } else if (outputUnit.value === "kelvin") {
        convertedValue = ((tempValue - 32) * 5) / 9 + 273.15; // Fahrenheit to Kelvin
      } else {
        convertedValue = tempValue; // Same unit, no conversion needed
      }
    } 
    // Convert from Kelvin to other units
    else if (inputUnit.value === "kelvin") {
      if (outputUnit.value === "celsius") {
        convertedValue = tempValue - 273.15; // Kelvin to Celsius
      } else if (outputUnit.value === "fahrenheit") {
        convertedValue = ((tempValue - 273.15) * 9) / 5 + 32; // Kelvin to Fahrenheit
      } else {
        convertedValue = tempValue; // Same unit, no conversion needed
      }
    }

    // Display the result with capitalized unit name
    resultDiv.textContent = `Result: ${convertedValue} ${
      outputUnit.value.charAt(0).toUpperCase() + outputUnit.value.slice(1)
    }`;
  });
});
