// Array of options
const option = ["ROCK", "PAPER", "SCISSORS"]
let userPoints = 0
let computerPoints = 0


// function getUserInput(rock, paper, scissors) {
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('rock').addEventListener('click', () => {
        let userOptionUpper = "ROCK";
        let computerChoice = getComputerChoice()
        playRounds(userOptionUpper, computerChoice)
        console.log("your points: ", userPoints, " computer points: ", computerPoints)
    });
    document.getElementById('paper').addEventListener('click', () =>  {
        let userOptionUpper = "PAPER";
        let computerChoice = getComputerChoice()
        playRounds(userOptionUpper, computerChoice)
        console.log("your points: ", userPoints, " computer points: ", computerPoints)
    });
    document.getElementById('scissors').addEventListener('click', () => {
        let userOptionUpper = "SCISSORS";
        let computerChoice = getComputerChoice()
        playRounds(userOptionUpper, computerChoice)
        console.log("your points: ", userPoints, " computer points: ", computerPoints)
    });
});
// }

// getUserInput()

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    if (num == "0") {
        let computerChoice = "rock"
        return computerChoice
    }
    else if (num == "1") {
        let computerChoice = "paper"
        return computerChoice
    }
    else if (num == "2") {
        let computerChoice = "scissors"
        return computerChoice
    }
}

function playRounds(userOptionUpper, computerChoice) {
    const status = document.getElementById('status');
    if (userOptionUpper == "PAPER" && computerChoice == "scissors") {
        status.innerHTML = "PAPER VS SCISSORS"
        computerPoints++
    }
    else if (userOptionUpper == "PAPER" && computerChoice == "rock") {
        status.innerHTML = "PAPER VS ROCK"
        userPoints++     
    }
    else if (userOptionUpper == "PAPER" && computerChoice == "paper") {
        status.innerHTML = "PAPER VS PAPER"
    }
    else if (userOptionUpper == "ROCK" && computerChoice == "rock") {
        status.innerHTML = "ROCK VS ROCK"
    }
    else if (userOptionUpper == "ROCK" && computerChoice == "paper") {
        status.innerHTML = "ROCK VS PAPER" 
        computerPoints++
    }
    else if (userOptionUpper == "ROCK" && computerChoice == "scissors") {
        status.innerHTML = "ROCK VS SCISSORS" 
        userPoints++
    }
    else if (userOptionUpper == "SCISSORS" && computerChoice == "rock") {
        status.innerHTML = "SCISSORS VS ROCK"
        computerPoints++
    }
    else if (userOptionUpper == "SCISSORS" && computerChoice == "paper") {
        status.innerHTML = "SCISSORS VS PAPER"
        userPoints++
    }
    else {
        status.innerHTML = "SCISSORS VS SCISSORS"
    }
    document.getElementById('points1').innerHTML = userPoints;
    document.getElementById('points2').innerHTML = computerPoints;

    return userPoints, computerPoints
}

function checkWinner(userPoints, computerPoints) {
    if (userPoints < computerPoints) {
        console.log("Computer wins, with ", computerPoints, " points!")
    }
    else if (userPoints > computerPoints) {
        console.log("You win, with ", userPoints, " points!")
    }
    else {
        console.log("There has been a draw, both of you have ", userPoints, " points!")
    }
}

function playGame() {
    for (let i = 0; i <= 4; i++) {
        let userOptionRandom = prompt("Choose your weapon")
        let userOptionUpper = userOptionRandom.toUpperCase()
        if (option.includes(userOptionUpper)) {
            let computerChoice = getComputerChoice()
            playRounds(userOptionUpper, computerChoice)
        }
        else {
            console.log("Choose from rock, paper or scissors")
        }
    }
    checkWinner(userPoints, computerPoints)
}
// playGame()
