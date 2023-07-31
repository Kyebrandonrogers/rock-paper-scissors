// Array of options
const option = ["ROCK", "PAPER", "SCISSORS"]
let userPoints = 0
let computerPoints = 0


function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    if (num == "0") {
        let choice = "rock"
        return choice
    }
    else if (num == "1") {
        let choice = "paper"
        return choice
    }
    else if (num == "2") {
        let choice = "scissors"
        return choice
    }
}

function playRounds(userOptionUpper, computerChoice) {
    if (userOptionUpper == "PAPER" && computerChoice == "scissors") {
        console.log("paper vs scissors. Computer wins the round")
        computerPoints++
    }
    else if (userOptionUpper == "PAPER" && computerChoice == "rock") {
        console.log("paper vs rock. You win the round")
        userPoints++     
    }
    else if (userOptionUpper == "PAPER" && computerChoice == "paper") {
        console.log("paper vs paper. Draw")
    }
    else if (userOptionUpper == "ROCK" && computerChoice == "rock") {
        console.log("rock vs rock. Draw")   
    }
    else if (userOptionUpper == "ROCK" && computerChoice == "paper") {
        console.log("rock vs paper. Computer wins the round")   
        computerPoints++
    }
    else if (userOptionUpper == "ROCK" && computerChoice == "scissors") {
        console.log("rock vs scissors. You win the round")   
        userPoints++
    }
    else if (userOptionUpper == "SCISSORS" && computerChoice == "rock") {
        console.log("scissors vs rock. Computer wins the round") 
        computerPoints++
    }
    else if (userOptionUpper == "SCISSORS" && computerChoice == "paper") {
        console.log("scissors vs paper. You win the round")   
        userPoints++
    }
    else {
        console.log("scissors vs scissors. Draw")
    }

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
playGame()
