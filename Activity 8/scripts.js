console.log("\n=== QUOTE API INTEGRATION ===");

const API_URL = "https://dummyjson.com/quotes/random";

let appState = {
    currentQuote: null,
    isLoading: false
};

async function fetchQuote() {
    try {
        showLoading(true);
        hideError();

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching quote:", error);
        showError("Failed to fetch quote.");
        return null;

    } finally {
        showLoading(false);
    }
}

async function getNewQuote() {
    const quote = await fetchQuote();

    if (quote) {
        appState.currentQuote = quote;
        displayQuote(quote);
    }
}

function displayQuote(quote) {
    const container = document.getElementById("quoteContainer");

    const card = document.createElement("div");
    card.className = "quote-card";

    card.innerHTML = `
    <p class="quote-text">${quote.quote}</p>
    <p class="quote-author">— ${quote.author}</p>
  `;

    container.innerHTML = "";
    container.appendChild(card);
}

function showLoading(show) {
    const loader = document.getElementById("loadingIndicator");
    const btn = document.getElementById("getQuoteBtn");

    loader.classList.toggle("hidden", !show);
    btn.disabled = show;
}

function showError(message) {
    document.getElementById("errorMessage").textContent = message;
    document.getElementById("errorDisplay").classList.remove("hidden");
}

function hideError() {
    document.getElementById("errorDisplay").classList.add("hidden");
}

function initializeApp() {
    document.getElementById("getQuoteBtn").addEventListener("click", getNewQuote);
    document.getElementById("retryBtn").addEventListener("click", getNewQuote);

    console.log("Quote Generator application initialized successfully!");
}

initializeApp();