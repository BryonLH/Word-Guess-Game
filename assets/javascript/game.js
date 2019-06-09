//Variables here


// function getAllIndices(arr, val) {
//     var indices = [], i = -1;
//     while ((i = arr.indexOf(val, i + 1)) != -1) {
//         indices.push(i);
//     }
//     return indices;
// }

//Randomize word here



// var word = wordList[Math.floor(Math.random() * wordList.length)];
// console.log(word);
// document.getElementById("word-display-letters").innerText = word;

var wins = 0;
var losses = 0;
var maxGuesses = 9;
var availableLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var underScoreArray = ["_", "_", "_", "_", "_", "_"];
var wordList = ["jarjar", "farfar"];
var anyKeyToStart = ["press any key to start"];
var anyKeyToReset = ["press any key to reset"];

var youWin = ["you win!"];
var youLose = ["you lose!"];

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

getRandomWord()
console.log(word);


