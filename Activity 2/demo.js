// Part A: Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

console.log("Precedence:", a + b * 2);
console.log("With parentheses:", (a + b) * 2);

// Part B: Comparison Operators
let num = 5;
let str = "5";
let ten = 10;

console.log("Loose equality (==):", num == str);
console.log("Strict equality (===):", num === str);
console.log("Greater than:", ten > num);
console.log("Less than:", num < ten);
console.log("Greater or equal:", num >= 5);
console.log("Less or equal:", num <= 4);

// Part C: Logical Operators
let isAdult = true;
let hasID = false;

console.log("AND:", isAdult && hasID);
console.log("OR:", isAdult || hasID);
console.log("NOT:", !isAdult);

console.log("Compound condition:", num > 3 && ten > num);

// Part D: Conditional Statements
let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Grade:", grade);

// Part E: Switch Statement
let dayOfWeek = 2;
let dayName;

switch (dayOfWeek) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Day:", dayName);

// Part F: Display a Message
document.getElementById("output").textContent =
  "Check the console to see JavaScript operator demonstrations!";