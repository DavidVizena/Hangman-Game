//Global Variables
// =========================================================
// words array
const words = ['hero', 'quatre', 'duo', 'wufei', 'trowa'];
// Choose word randomly
var randNum = Math.floor(Math.random() * words.length);
var choosenWord = words[randNum];
var win = 0;
var loss = 0;
var correctWord = [];
var incorrectWord =[];
var underScore = [];
var remainingLives = 5;

// Dom manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docNewUnderScore = document.getElementsByClassName('underscore');
var docCorrectGuess = document.getElementsByClassName('correctGuess');
var docincorrectGuess = document.getElementsByClassName('incorrectGuess');
var docwinCondition = document.getElementsByClassName('wins');
var docLossCondition = document.getElementsByClassName('losses');
var docSubtractLife = document.getElementsByClassName('lives');
//Main
// =========================================================
console.log(choosenWord);
// Creates underscores based on word length
generateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
}
// prints the number of underscores to the page
docUnderScore[0].innerHTML = generateUnderscore().join(' ');
// function to reset the lives/guess boxes
function reset(){
    remainingLives = 5;
    docSubtractLife[0].innerHTML = "Lives Left: 5";
    docCorrectGuess[0].innerHTML = "Correct Guess: ";
    docincorrectGuess[0].innerHTML = "Incorrect Guess: ";
    docNewUnderScore.innerHTML = generateUnderscore().join(' ');
    generateUnderscore();
    docUnderScore[0].innerHTML = generateUnderscore().join(' ');
    var randNum = Math.floor(Math.random() * words.length);
    var choosenWord = words[randNum];
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
        docCorrectGuess[0].innerHTML = "Correct Gueses:" + correctWord;
// Checks to see if user word matches guesses
        if(underScore.join('') == choosenWord) {
    }
  }
//   if word is incorrect it will take a life away
  else {
    incorrectWord.push(keyword);
    remainingLives--;
    docSubtractLife[0].innerHTML = "Lives left: " + remainingLives;
    docincorrectGuess[0].innerHTML = "Incorrect Guesses: " + incorrectWord;
  }
//   when all lives are spent you lose the game
  if(remainingLives === 0){
    // adds a loss to the loss box  
    loss++;
    // resets the lives and guesses after a loss
    reset();
    // generates new word after a loss
      docLossCondition[0].innerHTML = "Losses: " + loss;
  }
//   else if to add a win if you guess the word
  else if(correctWord.join('') === choosenWord){
    // resets the lives and guesses
    reset();
    // adds a win to the win box
    win++;
    // makes a new word to guess
    docwinCondition[0].innerHTML = "Wins: " + win;

}
});


