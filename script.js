const quotes = [
  "JavaScript makes websites interactive and attractive lookwise good.",
  "Practice typing daily to improve  .",
  "Coding is the language of the future.",
  "Web development is fun and creative.",
  "The quick brown fox jumps over the lazy dog near the river bank.", 
"Typing every word carefully helps improve accuracy and builds strong muscle memory",
  
];

let timer = 60;
let interval;
let currentQuote = "";

const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

function startGame() {

    inputElement.disabled = false;
    inputElement.value = "";
    inputElement.focus();

    timer = 60;
    timeElement.innerText = timer;

    currentQuote =
      quotes[Math.floor(Math.random() * quotes.length)];

    quoteElement.innerText = currentQuote;

    clearInterval(interval);

    interval = setInterval(() => {

        timer--;
        timeElement.innerText = timer;

        calculateResults();

        if(timer <= 0){
            clearInterval(interval);
            endGame();
        }

    },1000);
}

function calculateResults(){

    let typedText = inputElement.value;

    let words = typedText.trim().split(" ").length;

    if(typedText.length === 0){
        words = 0;
    }

    wpmElement.innerText = words;

    let correctChars = 0;

    for(let i=0;i<typedText.length;i++){

        if(typedText[i] === currentQuote[i]){
            correctChars++;
        }
    }

    let accuracy = 0;

    if(typedText.length > 0){
        accuracy =
        Math.floor((correctChars / typedText.length) * 100);
    }

    accuracyElement.innerText = accuracy + "%";
}

function endGame(){

    inputElement.disabled = true;

    alert(
      "Game Over!\nWPM: " +
      wpmElement.innerText +
      "\nAccuracy: " +
      accuracyElement.innerText
    );
}

function restartGame(){

    clearInterval(interval);

    inputElement.value = "";

    wpmElement.innerText = 0;
    accuracyElement.innerText = "0%";
    timeElement.innerText = 60;

    startGame();
}