//Global Variables
// =========================================================
// words array
const words = ['heero', 'quatre', 'duo', 'wufei', 'trowa'];
// Choose word randomly
var randNum = Math.floor(Math.random() * words.length);
var choosenWord = words[randNum];
var win = 0;
var loss = 0;
var correctWord = [];
var incorrectWord =[];
var underScore = [];
var remainingLives = 5;
var winSound = new Audio('./assets/sounds/gundamWin.mp3');
var loseSound = new Audio('./assets/sounds/gundamLose.mp3');

// Dom manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docNewUnderScore = document.getElementsByClassName('underscore');
var docCorrectGuess = document.getElementsByClassName('correctGuess');
var docincorrectGuess = document.getElementsByClassName('incorrectGuess');
var docwinCondition = document.getElementsByClassName('wins');
var docLossCondition = document.getElementsByClassName('losses');
var docSubtractLife = document.getElementsByClassName('lives');
var docWinSound = document.getElementById('winSound');
var docloseSound = document.getElementById('loseSound');

//Main
// =========================================================
console.log(choosenWord);
// Creates underscores based on word length
function generateUnderscore(){
    for (let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
    }
    // prints the number of underscores to the page
    docUnderScore[0].innerHTML = underScore.join(' ');
}
generateUnderscore();
// function to reset the lives/guess boxes
function reset(){
    remainingLives = 5;
    correctWord = [];
    underScore.length = 0;
    randNum = Math.floor(Math.random() * words.length);
    choosenWord = words[randNum];
    console.log(choosenWord);
    docSubtractLife[0].innerHTML = "Lives Left: 5";
    docCorrectGuess[0].innerHTML = "Correct Guess: ";
    docincorrectGuess[0].innerHTML = "Incorrect Guess: ";
    generateUnderscore(); 
}
// Aquires users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    // If users guess is correct
for (var i = 0; i <choosenWord.length; i++) {
    if (choosenWord[i] === keyword){
        console.log(keyword);
        underScore[i] = keyword;
        console.log(underScore);
    }
}
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
        // plays the lose audiofile and show pic
        setTimeout(function(){document.getElementById("picNoo").setAttribute("style", "display: block;");}, 1000);
        // fadeout the image
        window.setTimeout("document.getElementById('picNoo').style.display='none';", 5500); 
          
        loseSound.play();
        // resets the lives and guesses after a loss
        reset();
        // generates new word after a loss
        docLossCondition[0].innerHTML = "Losses: " + loss;
    }
    //   else if to add a win if you guess the word
    else if(underScore.join('') === choosenWord){
        // adds a win to the win box
        win++;
        // plays the win audio file and shows pic
        document.getElementById('picHeero').setAttribute("style", "display: block;");
        // fadeout img
        window.setTimeout("document.getElementById('picHeero').style.display='none';", 12000); 

        winSound.play();
      // resets the lives and guesses
    reset();
    // makes a new word to guess
    docwinCondition[0].innerHTML = "Wins: " + win;

}
});


