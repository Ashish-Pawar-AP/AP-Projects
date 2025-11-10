const getDate = document.getElementById("input-date");
const calcBtn = document.getElementById("calc-btn");
const result = document.getElementById("result");

calcBtn.addEventListener("click", () => {
  let birthDate = new Date(getDate.value);
  let today = new Date();
  console.log(birthDate.toLocaleDateString());
  console.log(today.toLocaleDateString());

  if (birthDate > today) {
    error.textContent = "❌ Date of birth cannot be in the future!";
    result.textContent = "";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old 🎉`;
});
