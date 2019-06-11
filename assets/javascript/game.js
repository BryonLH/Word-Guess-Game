//Variables here


function getAllIndices(arr, val) {
    var indices = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
        indices.push(i);
    }
    return indices;
}

// var word = wordList[Math.floor(Math.random() * wordList.length)];
// console.log(word);
// document.getElementById("word-display-letters").innerText = word;

var wins = 0;
var losses = 0;
var maxGuesses = 9;
var userGuesses = [];
var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var underScoreArray = ["_", "_", "_", "_", "_", "_"];
var wordList = ["jammie", "slammy"];
// var wordArray = word.split('');
// var indicies = getAllIndices(wordArray, 'm')
// indicies.forEach(function(i) {
//     underScorwArray[i] = wordArray[i]
// })
// console.log(wordArray);
// console.log(underScoreArray);
var anyKeyToStart = ["press any key to start"];
var anyKeyToReset = ["press any key to reset"];

var youWin = ["you win!"];
var youLose = ["you lose!"];

for(var i = 0; i < wordList.length; i++) {
    console.log(wordList[i]);
}

//Randomize word here
var word = wordList[Math.floor(Math.random() * wordList.length)];

var getRandomWord = function () {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// var indexes = getAllIndices(wordArray)
// indexes.forEach(function(i) {
//     underScoreArray[i] = wordArray[i]
// })
// console.log(wordArray)
// var wordArray = word.split("");

// function for onkeyup
// document.onkeyup = function(event) {
//     console.log(event.key);
// }

// enter wins++ to add to wins

function newGame() {
    getRandomWord();
    console.log(word);
    document.getElementById("word-display").innerHTML = word;
}

function userClicksLetter() {
    var x = document.getElementById("guessed-letters").value;
    userGuesses.push(onclick);
    document.getElementById("guessed-letters").innerHTML = x;

    console.log(userGuesses);
    console.log(x);
}




