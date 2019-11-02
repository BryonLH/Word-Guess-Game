// Variables here
var wins = 0;
var losses = 0;
var maxGuesses = 9;
var userGuesses = [];
var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blanks = 0;
var letterArray = [];
var wordAfterGuess = [];
var wordList = ["rampage", "unbreakable", "armageddon"];
var word = '';


for (var i = 0; i < wordList.length; i++) {
    console.log(wordList[i]);
}

function checkGuess(letter) {
    var letterExists = false;
    for (var i = 0; i < blanks; i++) {
        if (word[i] === letter) {
            letterExists = true;
        }
    }
    if (letterExists) {
        for (var j = 0; j < blanks; j++) {
            if (word[j] === letter) {
                wordAfterGuess[j] = letter;
            }
        }
        console.log(wordAfterGuess);
    } else {
        userGuesses.push(letter);
        maxGuesses--;
    }
}

// This is the function to run when the user clicks the button to start a new game
function newGame() {
    gameOver = false;
    console.log(gameOver);
    word = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    var letterArray = word.split("");
    console.log(letterArray);
    blanks = letterArray.length;
    console.log("blanks = " + blanks);
    wordAfterGuess = [];
    userGuesses = [];
    for (var i = 0; i < blanks; i++) {
        wordAfterGuess.push("_");
    }
    console.log(wordAfterGuess);
    // This section updates and displays he score and guesses remaining
    document.getElementById("remaining-guesses").innerHTML = maxGuesses;
    document.getElementById("word-display-letters").innerHTML = wordAfterGuess.join(" ");
    document.getElementById("guessed-letters").innerHTML = userGuesses.join(" ");
}

function updateGame() {
    // This section updates and displays he score and guesses remaining
    document.getElementById("remaining-guesses").innerHTML = maxGuesses;
    document.getElementById("word-display-letters").innerHTML = wordAfterGuess.join(" ");
    document.getElementById("guessed-letters").innerHTML = userGuesses.join(" ");
    // determine if the user wins or losses
    if (letterArray.toString() === wordAfterGuess.toString()) {
        wins++;
        alert("You win!");
        document.getElementById("win-count").innerHTML = wins;
    }
    else if (maxGuesses === 0) {
        losses++;
        alert("You lose");
        document.getElementById("loss-count").innerHTML = losses;
    }
}

// function for when user clicks a key
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    // userGuesses.splice(1, 0, event.key);
    checkGuess(userGuess);
    updateGame();
}



