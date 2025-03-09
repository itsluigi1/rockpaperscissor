//user imputs choice
//Computer makes a random choice out of three options
const choices = ["rock","paper","scissor "]


function game() {
    playRound();
    //play the game
    // play five rounds
    //console based

}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computeChoice();
}

function playerChoice() {
    let input = prompt('Type Rock, Paper, Scissor')
}

function computeChoice() {
return choices[Math.floor(Math.random()*choices.lenght)]
}

game ();