'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// display message
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // we need to compare between two numbers.
  //console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('โ๏ธ No number!');
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('๐ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // wehen guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage( guess > secretNumber ? '๐คจ Too High!' : '๐ Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     displayMessage('๐ฅ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
