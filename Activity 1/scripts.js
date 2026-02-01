console.log("Hello, World!");
document.getElementById("output").textContent = "Hello, World!";
let studentName = "Jonathan"
const age = 19;
let isStudent = true;
let emptyValue = null;
let notAssigned;
console.log("Student Name:", studentName);
console.log("Type of studentName:", typeof studentName);

console.log("Age:", age);
console.log("Type of age:", typeof age);

console.log("Is Student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

console.log("Empty Value:", emptyValue);
console.log("Type of emptyValue:", typeof emptyValue);

console.log("Not Assigned:", notAssigned);
console.log("Type of notAssigned:", typeof notAssigned);

studentName = "Casper";
console.log("Updated Student Name:", studentName);

//tried age = 25, caused an error, const can not be reassigned 