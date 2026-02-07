function checkAge() {
  const ageInput = document.getElementById("ageInput").value;
  const result = document.getElementById("result");

  console.log("Raw input:", ageInput);

  if (ageInput === "") {
    result.textContent = "Please enter your age";
    result.className = "invalid";
    return;
  }

  const age = Number(ageInput);

  console.log("Converted age:", age);

  if (isNaN(age)) {
    result.textContent = "Invalid age - please enter a number";
    result.className = "invalid";
  } else if (age < 0 || age > 150) {
    result.textContent = "Invalid age - please enter a realistic age (0-150)";
    result.className = "invalid";
  } else if (age < 18) {
    result.textContent = `You are ${age} years old - You are a minor`;
    result.className = "minor";
  } else {
    result.textContent = `You are ${age} years old - You are an adult`;
    result.className = "adult";
  }
}