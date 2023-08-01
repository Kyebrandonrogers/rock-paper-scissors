let userPoints = 0
let computerPoints = 0

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('rock').addEventListener('click', () => {
        if (computerPoints < 5 && userPoints < 5) {
            let userOption = "ROCK";
            let computerChoice = getComputerChoice();
            playRounds(userOption, computerChoice)
            if (computerPoints == 5)  {
                document.getElementById('status').innerHTML = "YOU LOSE";
            }
            else if (userPoints == 5) {
                document.getElementById('status').innerHTML = "YOU WIN";
            }
        }
        else {
            if (computerPoints == 5)  {
                document.getElementById('status').innerHTML = "YOU LOSE";
            }
            else {
                document.getElementById('status').innerHTML = "YOU WIN";
            }
        }
    });
    document.getElementById('paper').addEventListener('click', () =>  {
        if (computerPoints < 5 && userPoints < 5) {
            let userOption = "PAPER";
            let computerChoice = getComputerChoice();
            playRounds(userOption, computerChoice)
            if (computerPoints == 5)  {
                document.getElementById('status').innerHTML = "YOU LOSE";
            }
            else if (userPoints == 5) {
                document.getElementById('status').innerHTML = "YOU WIN";
            }
        }
        else {
            if (computerPoints == 5)  {
                document.getElementById('status').innerHTML = "YOU LOSE";
            }
            else {
                document.getElementById('status').innerHTML = "YOU WIN";
            }
        }    });
    document.getElementById('scissors').addEventListener('click', () => {
        if (computerPoints < 5 && userPoints < 5) {
            let userOption = "SCISSORS";
            let computerChoice = getComputerChoice();
            playRounds(userOption, computerChoice)
            if (computerPoints == 5)  {
                document.getElementById('status').innerHTML = "YOU LOSE";
            }
            else if (userPoints == 5) {
                document.getElementById('status').innerHTML = "YOU WIN";
            }
        }
        else {
            if (computerPoints == 5)  {
                document.getElementById('status').innerHTML = "YOU LOSE";
            }
            else {
                document.getElementById('status').innerHTML = "YOU WIN";
            }
        }
    });
    document.getElementsByClassName('btn').disabled = true;
    if (computerPoints == 5 || userPoints == 5) {
        if (computerPoints == 5)  {
            document.getElementById('status').innerHTML = "YOU LOSE";
        }
        else {
            document.getElementById('status').innerHTML = "YOU WIN";
        }
    }
});

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

function playRounds(userOption, computerChoice) {
    const status = document.getElementById('status');
    if (userOption == "PAPER" && computerChoice == "scissors") {
        status.innerHTML = "PAPER VS SCISSORS"
        computerPoints++
    }
    else if (userOption == "PAPER" && computerChoice == "rock") {
        status.innerHTML = "PAPER VS ROCK"
        userPoints++     
    }
    else if (userOption == "PAPER" && computerChoice == "paper") {
        status.innerHTML = "PAPER VS PAPER"
    }
    else if (userOption == "ROCK" && computerChoice == "rock") {
        status.innerHTML = "ROCK VS ROCK"
    }
    else if (userOption == "ROCK" && computerChoice == "paper") {
        status.innerHTML = "ROCK VS PAPER" 
        computerPoints++
    }
    else if (userOption == "ROCK" && computerChoice == "scissors") {
        status.innerHTML = "ROCK VS SCISSORS" 
        userPoints++
    }
    else if (userOption == "SCISSORS" && computerChoice == "rock") {
        status.innerHTML = "SCISSORS VS ROCK"
        computerPoints++
    }
    else if (userOption == "SCISSORS" && computerChoice == "paper") {
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
