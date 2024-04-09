const wordDisplay = document.querySelector(".word-display");

let  currentword
const getRandom=()=>{
    const {word,hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentword = word
    console.log(word)   
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(()=>`<li class="letter  "></li>`).join("") 
}
const hangmangame=(a1,b1)=>{
if(currentword.includes(b1)){
    console.log(b1,"correct word")
}else{
    console.log(b1,"not correct word ")
}
}

for (let index = 97; index <= 122; index++) {
    const button = document.createElement("button");
    button.innerText =  String.fromCharCode(index);
    document.querySelector(".keyboard").appendChild(button)
        button.addEventListener("click", e => hangmangame(e.target, String.fromCharCode(index)))


    }


    getRandom()