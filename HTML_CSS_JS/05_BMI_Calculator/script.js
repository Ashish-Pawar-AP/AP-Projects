// Get references to DOM elements
const heightValue = document.getElementById("height"); // input for height (cm or m)
const weightValue = document.getElementById("weight"); // input for weight (kg)
const calculateBtn = document.getElementById("calculateBtn"); // button to trigger calculation
const displayResult = document.getElementById("result"); // element where result / message is shown
const getCmOrM = document.getElementById("CmOrM"); // select or input that indicates "CM" or "M"

let convertedCmToM; // will hold height in meters if input was given in centimeters

// Add click handler for the calculate button
calculateBtn.addEventListener("click", () => {
  // If the user indicated the height was entered in centimeters, convert to meters
  if (getCmOrM.value === "CM") {
    convertedCmToM = heightValue.value / 100;
  }

  // Validate height input
  // Note: heightValue.value is a string; using isNaN on it will coerce to Number in a way that can be surprising.
  // Also the empty-string check should ideally come before isNaN. This code keeps original checks but they are fragile.
  if (isNaN(heightValue.value)) {
    displayResult.innerHTML = "Invalid height";
  } else if (heightValue.value === "") {
    displayResult.innerHTML = "Please enter height";
  }

  // Validate weight input
  // Same caveats apply here about string input and isNaN
  if (isNaN(weightValue.value)) {
    displayResult.innerHTML = "Invalid weight";
  } else if (weightValue.value === "") {
    displayResult.innerHTML = "Please enter weight";
  }

  // Calculate BMI: weight (kg) / (height (m))^2
  // Note: if getCmOrM was not "CM", convertedCmToM could be undefined -> this will produce NaN.
  const calc = weightValue.value / convertedCmToM ** 2;

  // Show numeric BMI rounded to one decimal place
  displayResult.innerHTML = calc.toFixed(1);
  console.log(displayResult.innerHTML);

  // Classify BMI into categories and update the displayed text
  // IMPORTANT: comparisons below use displayResult.innerHTML (a string) instead of the numeric calc value.
  // That can lead to incorrect behavior. It's better to compare calc (a Number).
  if (displayResult.innerHTML < 18.5) {
    displayResult.innerHTML = `Underweight ${calc.toFixed(1)} `;
  } else if (displayResult.innerHTML < 24.9) {
    displayResult.innerHTML = `Normal weight ${calc.toFixed(1)}`;
  } else if (displayResult.innerHTML < 29.9) {
    displayResult.innerHTML = `Overweight ${calc.toFixed(1)}`;
  } else if (displayResult.innerHTML > 24.9) {
    displayResult.innerHTML = `Obesity ${calc.toFixed(1)}`;
  }
});
