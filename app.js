let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getCompChoice(){
    const choice = ['r', 's', 'p'];
    const randomNumber = Math.floor(Math.random()*3);
    return choice[randomNumber];
}

function convertToWord(letter){
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    if(letter == "s") return "Scissor";
}

// console.log(getCompChoice());
function win(user, comp){
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_div.innerHTML = convertToWord(user) +smallUserWord+ " beats " + convertToWord(comp)+smallCompWord + " . You win !😊😊😊"; 
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 500);
}

function lose(user, comp){
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_div.innerHTML = convertToWord(user) +smallUserWord+ " loses to  " + convertToWord(comp)+smallCompWord + ". You Lose !😢😢😢";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 500);
}

function draw(user, comp){
    // userscore_span.innerHTML = userscore;
    // compscore_span.innerHTML = compscore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    result_div.innerHTML = convertToWord(user) +smallUserWord+ " equals " + convertToWord(comp)+smallCompWord + ". Its a draw !👀👀👀 ";
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('gray-glow')},500);
}

function gamefuncntion(userChoice){
    const compNumber = getCompChoice();
    // console.log("User choice : "+ userChoice);
    // console.log("Computer choice : "+compNumber);
    switch (userChoice + compNumber) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compNumber);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, compNumber);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compNumber);
            break;
    }
}


function main(){
    
rock_div.addEventListener('click', function(){
    gamefuncntion("r");
})

scissor_div.addEventListener('click', function(){
    gamefuncntion("s");
})

paper_div.addEventListener('click', function(){
    gamefuncntion("p");
})

}
main();