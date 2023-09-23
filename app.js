const nextBtn = document.querySelector(".next-btn");
const quoteText = document.querySelector(".quote-text");
const author = document.querySelector(".author");

nextBtn.addEventListener("click", nextQuote);

let quotes = {
  "Steve Jobs": "The only way to do great work is to love what you do.",
  "Theodore Roosevelt": "Believe you can and you're halfway there.",
  "Winston Churchill":
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Mahatma Gandhi":
    "Your time is limited, don't waste it living someone else's life.",
  "Winston Churchill":
    "Success is walking from failure to failure with no loss of enthusiasm.",
  "Sam Levenson": "Don't watch the clock; do what it does. Keep going.",
  "Franklin D. Roosevelt":
    "The only limit to our realization of tomorrow will be our doubts of today.",
  "Mark Zuckerberg":
    "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
  Anonymous:
    "The harder you work for something, the greater you'll feel when you achieve it.",
};

function nextQuote() {
  let authors = Object.keys(quotes);
  let index = Math.floor(Math.random() * authors.length);
  let randomAuthor = authors[index];

  let randomQuote = quotes[randomAuthor];
  quoteText.textContent = randomQuote;
  author.textContent = randomAuthor;
}
