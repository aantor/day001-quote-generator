const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');
const loader = document.querySelector('#loader');

function showLoading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoading() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

async function getQuote() {
  showLoading();
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
    hideLoading();
  } catch (error) {}
}

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote();
