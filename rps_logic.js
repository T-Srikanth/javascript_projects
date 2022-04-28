let playerScore = 0
let computerScore = 0

// create function to randomly pick 
function computerPlay(){
    const options = ["rock","paper","scissors"]
    const computerSelection = options[Math.floor(Math.random()*3)]
    console.log(computerSelection)
    return computerSelection
}

// create function to compare player selection with computer selection
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1;
        return "You Lose! Paper beats Rock";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        return "You Win! Rock beats Scissors";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        return "You Win! Paper beats Rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        computerScore += 1;
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        computerScore += 1;
        return "You Lose! Rock beats Scissors";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        return "You Win! Scissors beats Paper";
    }else{
        return "Please input valid option";
    }
}

// create function to play best of five rounds
function game(){
    for(let round=0; round<5; round++){
        const computerSelection = computerPlay()
        const playerSelection = prompt("Enter your selection(Rock, Paper, Scissors): ") // take input from user
        console.log(playRound(playerSelection,computerSelection))
    }
    return (playerScore>computerScore)?"You won the series!!!":(playerScore==computerScore)?"Series tied!!!":"You lost the series, better luck next time."
    
}
console.log(game())