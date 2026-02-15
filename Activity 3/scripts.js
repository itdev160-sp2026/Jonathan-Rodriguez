
const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const buttons = document.querySelectorAll(".controls button");
const cardContainer = document.querySelector(".card-container");

console.log("Greeting Message Element:", greetingMessage);
console.log("Greeting Image Element:", greetingImage);
console.log("All Buttons:", buttons);
console.log("Card Container:", cardContainer);


// Demonstrate textContent
greetingMessage.textContent = "Welcome to Your Greeting Card!";

// Demonstrate innerHTML difference
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<p><strong>DOM Loaded Successfully!</strong></p>";


// getAttribute example
console.log("Default Image Source:", greetingImage.getAttribute("src"));

// setAttribute example
greetingImage.setAttribute("title", "Dynamic Greeting Card Image");


function birthdayGreeting() {
    greetingMessage.textContent = "🎉 Happy Birthday! 🎂";
    greetingImage.setAttribute("src", "https://picsum.photos/400/250?random=2");
    greetingImage.setAttribute("alt", "Birthday Image");
    console.log("Birthday greeting selected.");
}

function holidayGreeting() {
    greetingMessage.textContent = "🎄 Happy Holidays! ❄️";
    greetingImage.setAttribute("src", "https://picsum.photos/400/250?random=3");
    greetingImage.setAttribute("alt", "Holiday Image");
    console.log("Holiday greeting selected.");
}

function thankYouGreeting() {
    greetingMessage.textContent = "💖 Thank You So Much! 💖";
    greetingImage.setAttribute("src", "https://picsum.photos/400/250?random=4");
    greetingImage.setAttribute("alt", "Thank You Image");
    console.log("Thank You greeting selected.");
}

// Random greeting function
function randomGreeting() {
    const greetings = [
        { message: "🎉 Happy Birthday!", image: "https://picsum.photos/400/250?random=5" },
        { message: "🎄 Happy Holidays!", image: "https://picsum.photos/400/250?random=6" },
        { message: "💖 Thank You!", image: "https://picsum.photos/400/250?random=7" }
    ];

    const randomIndex = Math.floor(Math.random() * greetings.length);
    greetingMessage.textContent = greetings[randomIndex].message;
    greetingImage.setAttribute("src", greetings[randomIndex].image);

    console.log("Random greeting selected:", greetings[randomIndex]);
}


function personalizeGreeting() {
    const name = prompt("Enter your name:");

    if (name) {
        greetingMessage.textContent = `Hello ${name}, Have a Wonderful Day! 😊`;
        greetingImage.setAttribute("src", "https://picsum.photos/400/250?random=8");
        console.log("Personalized greeting for:", name);
    } else {
        console.log("No name entered.");
    }
}