//Global Variables
// =========================================================
// words array
const words = ['hero', 'quatre', 'duo', 'wufei', 'trowa'];
// Choose word randomly
let randNum = Math.floor(Math.random() * words.length);
let choosenWord = words[randNum];
let correctWord = [];
let incorrectWord =[];
let underScore = [];

// Dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docCorrectGuess = document.getElementsByClassName('correctGuess');
let docincorrectGuess = document.getElementsByClassName('incorrectGuess');

//Main
// =========================================================
console.log(choosenWord);
// Creates underscores based on word length
let generateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
}

// Aquires users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// If users guess is correct
    if(choosenWord.indexOf(keyword) > -1) {
// adds to correctWord array
        correctWord.push(keyword);
// replace underscore with correct letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docCorrectGuess[0].innerHTML = correctWord;
// Checks to see if user word matches guesses
        if(underScore.join('') == choosenWord) {
            alert("You're a Gundam EXPERT!!");
        }
  }
  else {
    incorrectWord.push(keyword);
    docincorrectGuess[0].innerHTML = incorrectWord;
  }
});
docUnderScore[0].innerHTML = generateUnderscore().join(' ');