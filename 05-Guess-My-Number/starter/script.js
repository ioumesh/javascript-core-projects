'use strict';
// Define variable for storing data 
let score = 20;
let highScore = 0;

// function for text message
const displayText = (text) => {
    document.querySelector('.message').textContent = text
}
// random number generator

let number = Math.trunc(Math.random() * 20 + 1);

// check button handler
document.querySelector('.check').addEventListener('click', function () {
    const check = Number(document.querySelector('.guess').value);
    console.log(typeof check, check)
    // when no input is there
    if (!check) {
        displayText('Enter Number⛔')
    }
    // when correct answer
    else if (check === number) {
        displayText('Correct Number 🥇')
        score = score + 10;
        document.querySelector('.score').textContent = score;

        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = number;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    else if (check !== number) {
        if (score > 1) {
            displayText(check > number ? "Too high ❗" : "Too low")
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayText("You Lost the game😭");
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }

})

// reset game

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    displayText("Start guessing...")
    document.querySelector('.guess').value = "0"

})