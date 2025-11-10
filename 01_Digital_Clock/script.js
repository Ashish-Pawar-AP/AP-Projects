// Get DOM elements
const btn = document.getElementById("enter-btn");
const displayTime = document.getElementById("show-time");

// Add click event listener to the button
btn.addEventListener("click", () => {
  // Update time every second (1000ms)
  setInterval(() => {
    // Create new Date object to get current time
    const currDate = new Date();
    console.log(currDate);
    
    // Extract hours, minutes and seconds
    const hours = currDate.getHours();
    const minutes = currDate.getMinutes();
    const seconds = currDate.getSeconds();
    
    // Display time in HH:MM:SS format
    displayTime.innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 1000);
});
