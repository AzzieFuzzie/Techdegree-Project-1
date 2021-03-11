/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Created an array with objects to create the qoutes.
const quotes= [ 
  {
  quote:'Be yourself; everyone else is already taken.',
  source:'Albert Einstein'
},
  {
    quote:'So many books, so little time.',
    source:'Frank Zappa',
    citation: 'Good Reads'
  },
  {
    quote:'Be the change that you wish to see in the world.',
    source:'Mahatma Gandhi',
    year:2008
  },
  {
    quote:'If you tell the truth, you do not have to remember anything.',
    source:'Mark Twain'
  },
  {
    quote:'All you need is love. But a little chocolate now and then does not hurt.',
    source:'Charles M. Schulz'
  }
];
  

/***
 * `getRandomQuote` function
***/
// This generates a random quote number.The random number chosen will be used to pick a quote according to index
function getRandomQuote() {
  // Generates a number from 1-6
 let num = Math.floor(Math.random() * 5 ) + 1; 
let randomQuote = quotes[num];
  return randomQuote;
}


/***
 * `printQuote` function
***/

function printQuote() {

 let getQuote = getRandomQuote();

 let htmlPrint = `<p class="quote"> ${getQuote.quote}</p>
<p class="source"> ${getQuote.source}`

if(getQuote.citation){
  htmlPrint +=
  `<span class="citation">${getQuote.citation}</span>`;
}

if(getQuote.year){
  htmlPrint +=
  `<span class="year">${getQuote.year}</span></p>`
}
return document.getElementById('quote-box').innerHTML = htmlPrint;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);