    let kScore = 0;
    let pScore = 0;

    function getComputerChoice(){
        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        };
    };

    function playRound(playerSelection, computerSelection){

        if(playerSelection === computerSelection) {
            return "Hasil Imbang!";
        } else if (
        (playerSelection === "scissors" && computerSelection === "rock") || 
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors")
        ) {
            kScore++;
            
        } else {
            pScore++;
            
        }
    };

    function game(){
        console.log("Hello");
        
        for(let i = 0;i < 5;i++){
            let computerSelection = getComputerChoice();
            console.log(computerSelection);
            let playerSelection = prompt("r,p,s ?","");
            
            playRound(playerSelection, computerSelection);
        }
    }
    game();

    
    console.log(pScore);
    console.log(kScore);
