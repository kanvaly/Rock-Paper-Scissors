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
        i = i.toLowerCase();
        if ((i !== "rock") && (i !== "paper") && (i !== "scissors")) {
            continue 
        } // The choice must be equal to either one of the mandatory values. Prompt again otherwise.

        again = false; //get out of the boucle when the choice is a correct one.
    }

    return i; //return the user choice
}



