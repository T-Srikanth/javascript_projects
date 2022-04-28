// create function to randomly pick 
function computerPlay(){
    const options = ["rock","paper","scissors"]
    const computerSelection = options[Math.floor(Math.random()*3)]
    console.log(computerSelection)
    return computerSelection
}

// create function to compare user selection with computer selection
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if(playerSelection === computerSelection){
        console.log("It's a tie!")
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock")
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors")
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats Rock")
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Scissors beats Paper")
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissors")
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors beats Paper")
    }else{
        console.log("Please input valid option")
    }
}

const computerSelection = computerPlay()
const playerSelection = prompt("Enter your selection(Rock, Paper, Scissors): ") // take input from user
playRound(playerSelection,computerSelection)