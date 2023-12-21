    let cScore = 0;
    let pScore = 0;
    let tie = 0;

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

    function getPlayerChoice(){
        let prom = prompt("Rock Paper Scissor","");
        let promLowerCase = prom.toLowerCase();
        return promLowerCase;
    } // Masih bisa dibikin lebih kompleks!

    function checkWinner(playerSelection, computerSelection){
        if(playerSelection === computerSelection) {
            return "tie";
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") || 
            (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissors" && computerSelection === "paper")
        ) { 
            "player"; 
        } else {
            "computer";
        }
    };

    function playRound(playerSelection, computerSelection){
        const hasil = checkWinner(playerSelection, computerSelection);
        if(hasil == "tie"){
            tie++;
            return `Hasil Imbang, Player ${playerSelection} Dan Komputer ${computerSelection}` 
        } else if (hasil == "player"){
            pScore++;
            return `Kamu Menang ${playerSelection} Mengalahkan ${computerSelection}` 
        } else {
            cScore++;
            return `Kamu Kalah ${computerSelection} Mengalahkan ${playerSelection}`
        };
    };

    function game(){
        console.log("Hello");
        
        for(let i = 0;i < 5;i++){
            let computerSelection = getComputerChoice();
            let playerSelection = getPlayerChoice();
            
            console.log(playRound(playerSelection, computerSelection));
        }
    };
    game();
    
    function skor(){
        if(pScore > cScore){
            return "Player Menang!"
        } else if(cScore > pScore){
            return "Computer Menang!"
        } else {
            return "Imbang!"
        }
    }

    console.log(`Hasil Imbang ${tie}`);    
    console.log(`Score Player ${pScore}`);
    console.log(`Score Computer ${cScore}`);
    console.log(`Hasil Akhir ${skor()}`);
    
