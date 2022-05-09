let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
const options = ["rock","paper","scissors"];


// create function to randomly pick 
function computerPlay(){
    computerSelection = options[Math.floor(Math.random()*3)]
    return computerSelection
}

// create function to compare player selection with computer selection
function playRound(playerSelection,computerSelection){
    computerSelection = computerPlay();
    if(playerSelection === computerSelection){
        computerScore += 1
        playerScore += 1
        return "It's a tie!";
    }else if((playerSelection == "rock" && computerSelection == "paper") ||
             (playerSelection == "paper" && computerSelection == "scissors") ||
             (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore += 1
        return "You Lose!";
    }else if((playerSelection == "rock" && computerSelection == "scissors") || 
             (playerSelection == "paper" && computerSelection == "rock") ||
             (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore += 1
        return "You Win!";
    }else{
        return "Please input valid option";
    }
}

function declareResult() {
    finalResult.textContent = (playerScore>computerScore)?"You won the series!!!":
                (playerScore==computerScore)?"Series tied!!!":"You lost the series, better luck next time.";
    body.appendChild(finalResult);
}


let buttons = document.querySelectorAll('button');
let body = document.querySelector('body');
let result = document.createElement('p');
let finalResult = document.createElement('p');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        result.textContent = playRound(playerSelection,computerSelection);
        body.appendChild(result);
        console.log(playerScore+ ' '+computerScore);
        if (playerScore == 5 || computerScore == 5){
            declareResult();
        }
    })
})