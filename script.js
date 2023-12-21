    let rockk = document.querySelector('#rock');
    let paperr = document.querySelector('#paper');
    let scissorr = document.querySelector('#scissors');
    let result = document.querySelector('.hasil');
    let cScore = 0;
    let pScore = 0;
    let tie = 0;

    function clickListener(event){
        const playerSelection = event.target.id;
        const computerSelection = getComputerChoice();
        
        result.textContent = playRound(playerSelection, computerSelection);

        let playerScore = document.createElement('div');
        let computerScore = document.createElement('div');
        let tieScore = document.createElement('div');
        let hasilAkhir = document.createElement('div');

        playerScore.textContent = `Score Player : ${pScore}`;
        computerScore.textContent = `Score Computer : ${cScore}`;
        tieScore.textContent = `Hasil Imbang : ${tie}`;

        if(pScore == 5 || cScore == 5 || tie == 5){
            hasilAkhir.textContent = skor();
            rockk.disabled = true;
            paperr.disabled = true;
            scissorr.disabled = true;
        };

        result.appendChild(playerScore);
        result.appendChild(computerScore);
        result.appendChild(tieScore);
        result.appendChild(hasilAkhir);
    };

    rockk.addEventListener('click', clickListener);
    paperr.addEventListener('click', clickListener);
    scissorr.addEventListener('click', clickListener);

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

    // function getPlayerChoice(){
    //     let prom = prompt("Rock Paper Scissor","");
    //     let promLowerCase = prom.toLowerCase();
    //     return promLowerCase;
    // }; // Masih bisa dibikin lebih kompleks!

    function checkWinner(playerSelection, computerSelection){
        if(playerSelection === computerSelection) {
            tie++;
            console.log("tie " + tie)
            return "tie";
        } else if (
            (playerSelection === "scissors" && computerSelection === "rock") || 
            (playerSelection === "rock" && computerSelection === "paper") || 
            (playerSelection === "paper" && computerSelection === "scissors")
        ) { 
            cScore++;
            return "computer"; 
        } else {
            pScore++;
            return "player";
        }
    };

    function playRound(playerSelection, computerSelection){
        const hasil = checkWinner(playerSelection, computerSelection);
        if(hasil == "tie"){
            
            return `Hasil Imbang, Player ${playerSelection} Dan Komputer ${computerSelection}` 
        } else if (hasil == "player"){
            
            return `Kamu Menang ${playerSelection} Mengalahkan ${computerSelection}` 
        } else {
            
            return `Kamu Kalah ${computerSelection} Mengalahkan ${playerSelection}`
        };
    };

    // function game(){
    //     console.log("Hello");
        
    //     for(let i = 0;i < 5;i++){
    //         let computerSelection = getComputerChoice();
    //         let playerSelection = getPlayerChoice();
            
    //         console.log(playRound(playerSelection, computerSelection));
    //     }
    // };
    // game();
    
    function skor(){
        if(pScore > cScore){
            return "Player Menang!"
        } else if(cScore > pScore){
            return "Computer Menang!"
        } else {
            return "Hasil Akhir Imbang!"
        }
    }

    // console.log(`Hasil Imbang ${tie}`);    
    // console.log(`Score Player ${pScore}`);
    // console.log(`Score Computer ${cScore}`);
    // console.log(`Hasil Akhir ${skor()}`);

    
































        // rockk.addEventListener('click', () => {
        //     console.log('rock');
        //     return "rock";
        // })
        // paperr.addEventListener('click', () => {
        //     console.log('paper')
        //     return "paper";
        // })
        // scissorr.addEventListener('click', () => {
        //     console.log('scissors')
        //     return "scissors";
        // })
    
