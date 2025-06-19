let randomNum = parseInt(Math.random()*100 + 1)

const Input = document.querySelector('#Guess')
const Submit = document.querySelector('#Submit')
const displayGuesses = document.querySelector('#GuessList')
const Remaining = document.querySelector('#Remaining')
const Message = document.querySelector('.displayMessage')

const addedMessage = document.createElement('p')
Message.appendChild(addedMessage)

let numGuesses = 10
const guesslist = []
let playGame = true

Remaining.innerHTML = numGuesses

if (playGame) {
    Submit.addEventListener('click', function(e){
        e.preventDefault()
        const userInput = parseInt(Input.value)

        if (isNaN(userInput)) {
            addedMessage.innerHTML = "Please enter a valid number";
            return;
        }
        validateGuess(userInput)
    });
}

function validateGuess(userInput){
    if(userInput<1 || userInput>100 || userInput==''){
        addedMessage.innerHTML = "Please enter a number between 1 and 100"
    }
    else{
        checkGuess(userInput)
    }
}

function checkGuess(userInput){
    numGuesses--
    guesslist.push(userInput)
    displayGuesses.innerHTML = guesslist
    Remaining.innerHTML = numGuesses

    if(userInput===randomNum){
        Message.innerHTML = `<h2>Congratulations, you have guessed the number right! <br/> Number of attempts took : ${10 - numGuesses}</h2>`
        endGame()
    }
    else if(numGuesses === 0){
        addedMessage.innerHTML = `No more guesses left, the number was ${randomNum}`
        endGame()
    }
    else{
        if(userInput<randomNum) addedMessage.innerHTML = "Too low, you gotta go higher"
        if(userInput>randomNum) addedMessage.innerHTML = "Too high, you gotta go lower"
    }
    Input.value = ''
}

function endGame (){
    Input.disabled = true
    Submit.disabled = true

    const button = document.createElement('button')
    button.textContent = "Start new Game"
    button.className = "newGame"
    Message.appendChild(button)
    playGame = false
    button.addEventListener('click', newGame);
}

function newGame() {
    randomNum = parseInt(Math.random() * 100 + 1);
    numGuesses = 10;
    guesslist.length = 0; // Clear array correctly
    Remaining.innerHTML = numGuesses;
    displayGuesses.innerHTML = '';
    addedMessage.innerHTML = '';
    Input.disabled = false;
    Submit.disabled = false;
    Input.value = '';

    // Safely remove new game button and win message
    const button = Message.querySelector('button');
    if (button) button.remove();

    const winMessage = Message.querySelector('h2');
    if (winMessage) winMessage.remove();

    playGame = true;
}
