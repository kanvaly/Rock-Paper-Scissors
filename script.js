function getComputerChoice(){
    let choice = ["paper", "rock", "scissors"];
    let i = Math.floor(Math.random() * 3); // i equal to 0, 1, or 2. 
                    //Math.random() returns a value greater than or equal to 0 and less than 1.
    return choice[i];
}

function getUserChoice(){
    let again = true;
    let i;
    while (again){
        i = prompt("Choose between: paper, rock, and scissors. Either one of these values must be entered.", "paper");
        if (i === null){return i;} //let user cancel the prompt

        i = i.toLowerCase();
        if ((i !== "rock") && (i !== "paper") && (i !== "scissors")) {
            continue 
        } // The choice must be equal to either one of the mandatory values. Prompt again otherwise.

        again = false; //get out of the boucle when the choice is a correct one.
    }

    return i; //return the user choice
}

function playround(){
    let playerSelection = getUserChoice();
    if (!playerSelection){return} //cancel the round and will then cause user to exit the game

    let computerSelection = getComputerChoice();

    if ((playerSelection === computerSelection)){
        return "No winner. It is a tie!"
    }
    else if (((playerSelection === "paper")&&(computerSelection === "rock"))||
             ((playerSelection === "rock")&&(computerSelection === "scissors"))||
             ((playerSelection === "scissors")&&(computerSelection=== "paper"))
            ){ 
                return (`You Win! ${playerSelection} beats ${computerSelection}`);
            }

    else {return `You Lose! ${computerSelection} beats ${playerSelection}`;}
}


function game(){

    let user = 0; let computer = 0;

    for (let i=0; i<5; i++ ){

        let winner = playround();
        console.log(winner);

        if (!winner) {return "You exit the game"} //Exit the game when user cancels the round

        else if (winner[4] === "W") {user++} //Check if user is the winner then record its win

        else {computer++} //Else computer is winner. Then record its win.
    }

    if (user === computer) {return 'The Game is a tie'}

    else if (user > computer) {return "You are the winner of the game !"}

    else {return "Computer is the winner of the game !"}

}
