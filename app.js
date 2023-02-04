let pointsUser = 0;
let pointsComputer = 0;
let roundsCount = 0;
let computerUIScore = document.querySelector(".computer");
let userUIScore = document.querySelector(".user");
let roundUI = document.querySelector(".rounds");
let finalScore = document.querySelector(".final-score");
const restartButton = document.querySelector(".restart");

restartButton.disabled = true;

const buttons = document.querySelectorAll("button");
for (const button of buttons){
    button.addEventListener("click", () => {
        playRound(button.value);
    });
}

function playRound(input){
    
    if (roundsCount >= 5){
        overallWinner(pointsUser, pointsComputer);
        restartButton.disabled = false;
        startNewGame();
        return;
    }

    //let input = prompt("rock, paper, scissors what is your selection? ").trim().toLowerCase();
    if (input != "rock" && input != "paper"  && input != "scissors"){
        console.log("invalid input, computer wins");
        pointsComputer++;
        return;
    }

    // function for cumputer selection
    function computerSelection(){
        //Use Math.Floor(Math.Random()) and tie the numbers to a selection
        let number = Math.floor(Math.random() * 100);

        if (number < 33){
            return "rock";
        } else if (number > 66){
            return "scissors";
        }else {
            return "paper";
        }
    }

    // Check Who won
     function check(user, computer){
        if (user === computer){
            return "tie";
        } else if (computer == "rock" && user == "scissors"){
            return "computer";
        } else if (computer == "paper" && user == "rock"){
            return "computer";
        } else if (computer == "scissors" && user == "paper"){
            return "computer";
        } else {
            return "user";
        }
    }
    
    // Keep track of the win-count
    function countWins(winner){
        switch(winner){
            case "tie":
                pointsUser++;
                pointsComputer++;
                computerUIScore.textContent = `Computer: ${pointsComputer}`;
                userUIScore.textContent = `User: ${pointsUser}`;
                break;
            case "computer":
                pointsComputer++;
                computerUIScore.textContent = `Computer: ${pointsComputer}`;
                break;
            default: 
                pointsUser++;
                userUIScore.textContent = `User: ${pointsUser}`;
        }
        roundsCount++;
        roundUI.textContent = `Rounds: ${roundsCount}`;
    }

    //Get Computer Selection
    let selection = computerSelection();

    // Programm Execution
    let winnerGame = check(input, selection);
    countWins(winnerGame);
}

// Print the overall winner and ask for a repeat
function overallWinner(userCount, computerCount){
    finalScore.classList.add("winner");

    if (userCount > computerCount){
        finalScore.textContent = `You won ${userCount} to ${computerCount}`;
    } else if(computerCount > userCount){
        finalScore.textContent = `You lose ${userCount} to ${computerCount}`;
    } else {
        finalScore.textContent = `Tie with ${userCount} point(s) each`;
    }
}


function startNewGame(){
    restartButton.addEventListener("click", () => {
        finalScore.textContent = "";
        finalScore.classList.remove("winner");
        pointsUser = 0;
        pointsComputer = 0;
        roundsCount = 0;
        userUIScore.textContent = "User: 0";
        computerUIScore.textContent = "Computer: 0";
        roundUI.textContent = "Rounds: 0";
        restartButton.disabled = true;
    });
}