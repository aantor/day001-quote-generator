const quoteContainer = document.querySelector('#quote-container')
const quoteText = document.querySelector('#quote')
const authorText = document.querySelector('#author')
const twitterBtn = document.querySelector('#twitter')
const newQuoteBtn = document.querySelector('#new-quote')

async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl =
    'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    authorText.innerText = data.quoteAuthor;
    quoteText.innerText = data.quoteText;
    console.log(data);
  } catch (error) {
    //   getQuote()
      console.log(error);
  }
}

getQuote();
