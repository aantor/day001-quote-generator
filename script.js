const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');

async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://goquotes-api.herokuapp.com/api/v1/random?count=10';
  try {
    const response = await fetch(apiUrl);
    const { quotes } = await response.json();

    quotes.forEach((quote) => {
      authorText.innerText = quote.author;
      quoteText.innerText = quote.text;

      if (quote.author === '') {
        authorText.innerText = 'Unknown';
      } else {
        authorText.innerHTML = quote.author;
      }
      if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
      } else {
        quoteText.classList.remove('long-quote');
      }
    });
  } catch (error) {
    console.log(error);
  }
}

newQuoteBtn.addEventListener('click', () => {
  getQuote();
});

getQuote();
