let randomNum = Math.floor(Math.random() * 100) + 1;
const input = document.querySelector('#Guess');
const submitBtn = document.querySelector('#Submit');
const displayGuesses = document.querySelector('#GuessList');
const remaining = document.querySelector('#Remaining');
const feedback = document.querySelector('#feedback');
let numGuesses = 10;
let guessList = [];

remaining.textContent = numGuesses;

document.querySelector('.guess-form').addEventListener('submit', e => {
  e.preventDefault();
  const userGuess = parseInt(input.value);
  if (isNaN(userGuess)) {
    feedback.textContent = "🚫 Please enter a valid number.";
    feedback.classList.add('pulse');
    resetPulse();
    return;
  }
  validateGuess(userGuess);
});

function validateGuess(guess) {
  if (guess < 1 || guess > 100) {
    feedback.textContent = "⚠️ Enter a number between 1 and 100.";
    feedback.classList.add('pulse');
    resetPulse();
  } else {
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  numGuesses--;
  guessList.push(guess);
  displayGuesses.textContent = guessList.join(', ');
  remaining.textContent = numGuesses;

  if (guess === randomNum) {
    feedback.innerHTML = `🎉 Correct! The number was ${randomNum}.`;
    gameOver(true);
  } else if (numGuesses === 0) {
    feedback.innerHTML = `💥 Game over! It was ${randomNum}.`;
    gameOver(false);
  } else {
    const hint = guess < randomNum ? 'Too low!' : 'Too high!';
    feedback.textContent = `❌ ${hint} Try again.`;
    feedback.classList.add('pulse');
    resetPulse();
  }
}

function resetPulse() {
  setTimeout(() => feedback.classList.remove('pulse'), 600);
}

function gameOver(won) {
  input.disabled = true;
  submitBtn.disabled = true;

  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = "Start New Game";
  newGameBtn.className = 'new-game slide-in';
  document.querySelector('.game-container').appendChild(newGameBtn);

  newGameBtn.addEventListener('click', newGame);
}

function newGame() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  numGuesses = 10;
  guessList = [];
  input.disabled = false;
  submitBtn.disabled = false;
  input.value = '';
  displayGuesses.textContent = '';
  remaining.textContent = numGuesses;
  feedback.textContent = '';
  document.querySelector('button.new-game').remove();
  input.focus();
}
