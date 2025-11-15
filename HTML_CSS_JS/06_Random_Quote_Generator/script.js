// Selecting DOM elements
const newQuoteBtn = document.querySelector('.new-quoteBtn')
const quoteContaint = document.querySelector('.quote-containt')
const voice = document.getElementById('voice')
const author = document.querySelector('.quote-author')
const copy = document.getElementById('copy')

// Event listener for generating new quotes
newQuoteBtn.addEventListener('click',newQuoteGenerator)

// Function to fetch and display a new quote from Kanye.rest API
function newQuoteGenerator(){
    fetch('https://api.kanye.rest')
        .then(res=>res.json())
        .then(data => quoteContaint.innerHTML = data.quote)
}

// Event listener for text-to-speech functionality
voice.addEventListener('click', addVoiceOnClick)

// Function to convert quote text to speech
function addVoiceOnClick(){
    const Utterance = new SpeechSynthesisUtterance(`${quoteContaint.innerHTML} by ${author.innerHTML}`)
    speechSynthesis.speak(Utterance)
}

// Event listener for copying quote to clipboard
copy.addEventListener('click', copyQuote)

// Function to copy quote text to clipboard
function copyQuote(){
    navigator.clipboard.writeText(quoteContaint.innerHTML)
}