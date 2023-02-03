// Get user input
let pointsUser = 0;
let pointsComputer = 0;

//Repeat the game five times
for (let i = 0; i < 5; i++){

    // Ask for Input and make it normed
    let input = prompt("rock, paper, scissors what is your selection? ").trim().toLowerCase();

    if (input != "rock" && input != "paper"  && input != "scissors"){
        console.log("invalid input, computer wins");
        pointsComputer++;
        continue;
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

    function printResult(winner, user, computer){
        switch (winner){
            case "tie":
                console.log("tie!");
                break;
            case "computer":
                console.log(`You lose! ${computer} beats ${user}!`);
                break;
            default:
                console.log(`You won! ${user} beats ${computer}`);
        }
    }
    
    // Keep track of the win-count
    function countWins(winner){
        switch(winner){
            case "tie":
                pointsUser++;
                pointsComputer++;
                break;
            case "computer":
                pointsComputer++;
                break;
            default: 
                pointsUser++;
        }
    }

    //Get Computer Selection
    let selection = computerSelection();

    // Programm Execution
    let winnerGame = check(input, selection);
    printResult(winnerGame, input, selection);
    countWins(winnerGame);
}
overallWinner(pointsUser, pointsComputer);

// Print the overall winner and ask for a repeat
function overallWinner(userCount, computerCount){
    if (userCount > computerCount){
        console.log(`You won ${userCount} to ${computerCount}`);
    } else if(computerCount > userCount){
        console.log(`You lose ${userCount} to ${computerCount}`);
    } else {
        console.log(`Tie with ${userCount} point(s) each`);
    }
}