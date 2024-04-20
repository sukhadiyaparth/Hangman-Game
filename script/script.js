const hangmanImage = document.querySelector(".hangman-box img");

const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const gamemodel = document.querySelector(".game-modal")
const playAgainBtn = document.querySelector(".play-again")
const keyboardDiv = document.querySelector(".keyboard")



let  currentword,correctLetters =[], wrongGuessCount;
const maxGuess = 6;
const resetGame=()=>{
    correctLetters =[], wrongGuessCount=0;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`

guessesText.innerHTML = `${wrongGuessCount}/ ${maxGuess}`
keyboardDiv.querySelectorAll("button").forEach(btn=>btn.disabled = false);

    wordDisplay.innerHTML = currentword.split("").map(()=>`<li class="letter  "></li>`).join("") 
    gamemodel.classList.remove("show")

}
const getRandom=()=>{
    const {word,hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentword = word
    console.log(word)   
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}
const gameOver = (isvictory)=>{
    setTimeout(() => {
        const modalText = isvictory ? "you founded the word":"the correct word was:";
        gamemodel.querySelector("img").src = `images/${isvictory?'victory':'lost' }.gif`;
        gamemodel.querySelector("h4").innerText = `${isvictory?'Congrats':'Game Over!' }`;
        gamemodel.querySelector("p").innerHTML = `${modalText } <b>${currentword}</b>`;

        gamemodel.classList.add("show")
    }, 300);
}

const hangmangame=(a1,b1)=>{
if(currentword.includes(b1)){
    [...currentword].forEach((letter,index)=>{
    if(letter === b1){
        correctLetters.push(letter)
        wordDisplay.querySelectorAll("li")[index].innerHTML = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");

    }
    })
}else{
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`
}
a1.disabled = true
guessesText.innerHTML = `${wrongGuessCount}/ ${maxGuess}`
if(wrongGuessCount === maxGuess) return gameOver(false)
if(correctLetters.length === currentword.length) return gameOver(true)
}

for (let index = 97; index <= 122; index++) {
    const button = document.createElement("button");
    button.innerText =  String.fromCharCode(index);
    document.querySelector(".keyboard").appendChild(button)
        button.addEventListener("click", e => hangmangame(e.target, String.fromCharCode(index)))


    }
    playAgainBtn.addEventListener("click",getRandom)


    getRandom()