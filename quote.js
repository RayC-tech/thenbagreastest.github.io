const quotes = [
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "I can accept failure, everyone fails at something. But I can't accept not trying. – Michael Jordan",
  "Hard work beats talent when talent fails to work hard. – Tim Notke",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love. – Pelé",
  "Don’t count the days, make the days count. – Muhammad Ali"
];

function showQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").innerText = quote;
}
