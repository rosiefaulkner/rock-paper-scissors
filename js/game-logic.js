// All code should be written in this file.

// player one
let playerOneMoveOneType;
let playerOneMoveOneValue;

let playerOneMoveTwoType;
let playerOneMoveTwoValue;

let playerOneMoveThreeType;
let playerOneMoveThreeValue;

// player two
let playerTwoMoveOneType;
let playerTwoMoveOneValue;

let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;

let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

var setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {

    if (player !== undefined && moveOneType !== undefined && moveTwoType !== undefined && moveThreeType !== undefined && moveOneValue !== undefined && moveTwoValue !== undefined && moveThreeValue !== undefined){
        if ((moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') && (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') && (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors')){
            if ((moveOneValue >= 1 && moveOneValue <= 99) && (moveTwoValue >= 1 && moveTwoValue <= 99) && (moveThreeValue >= 1 && moveThreeValue <= 99) && moveOneValue + moveTwoValue + moveThreeValue <= 99){

                if (player === 'Player One'){
                    playerOneMoveOneType = moveOneType;
                    playerOneMoveOneValue = moveOneValue;
                    playerOneMoveTwoType = moveTwoType;
                    playerOneMoveTwoValue = moveTwoValue;
                    playerOneMoveThreeType = moveThreeType;
                    playerOneMoveThreeValue = moveThreeValue;
                } 
            
                if (player === 'Player Two'){
                    playerTwoMoveOneType = moveOneType;
                    playerTwoMoveOneValue = moveOneValue;
                    playerTwoMoveTwoType = moveTwoType;
                    playerTwoMoveTwoValue = moveTwoValue;
                    playerTwoMoveThreeType = moveThreeType;
                    playerTwoMoveThreeValue = moveThreeValue;
                } 

            }
        }

        
    }

}

var getRoundWinner = (roundNumber) => {

    let tie = 'Tie';
    let playerTwoWins= 'Player Two';
    let playerOneWins= 'Player One';
    
    if (roundNumber === 1){
        if (playerOneMoveOneType === playerTwoMoveOneType){
            if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                let winner = tie;
                return winner;
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue){
                let winner = playerTwoWins;
                return playerwinnerTwoWins;
            } else if (playerOneMoveOneValue > playerTwoMoveOneValue){
                let winner = playerOneWins;
                return winner;
            } 
        
        } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'paper'){
            let winner = playerTwoWins;
            return winner;
        } else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'rock'){
            let winner = playerTwoWins;
            return winner;
        } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'scissors'){
            let winner = playerTwoWins;
            return winner;
        }

    }

    if (roundNumber === 2){
        if (playerOneMoveTwoType === playerTwoMoveTwoType){
            if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                let winner = tie;
                return winner;
            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue){
                let winner = playerTwoWins;
                return winner;
            } else if (playerOneMoveTwoValue > playerTwoMoveTwoValue){
                let winner = playerOneWins;
                return winner;
            } 
        
        } else if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'paper'){
            let winner = playerTwoWins;
            return winner;
        } else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'rock'){
            let winner = playerTwoWins;
            return winner;
        } else if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'scissors'){
            let winner = playerTwoWins;
            return winner;
        }
    }

    if (roundNumber === 3){
        if (playerOneMoveThreeType === playerTwoMoveThreeType){
            if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                let winner = tie;
                return winner;
            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue){
                let winner = playerTwoWins;
                return winner;
            } else if (playerOneMoveThreeValue > playerTwoMoveThreeValue){
                let winner = playerOneWins;
                return winner;
            } 
        } else if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'paper'){
            let winner = playerTwoWins;
            return winner;
        } else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'rock'){
            let winner = playerTwoWins;
            return winner;
        } else if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper'){
            let winner = playerOneWins;
            return winner;
        } else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'scissors'){
            let winner = playerTwoWins;
            return winner;
        }


    }
}

    var getGameWinner = () => {

        let playerTwoWins= 0;
        let playerOneWins= 0;
        let tie = 0;
        let winner = '';

// For loop
       let i = 1;
        
       for (i = 1; i < 4; i++){
           winner = getRoundWinner(i);
           
           if(winner === 'Player 1'){
                playerOneWins++;
            } else if (winner === 'Player 2'){
                playerTwoWins++;
            } else {
                tie++;
            }
       }

       if(playerOneWins > playerTwoWins && playerOneWins > tie){
           return "Player One";
       } else if (playerTwoWins > playerOneWins && playerTwoWins > tie){
           return "Player Two";
       } else {
           return "Tie";
       }
}

var setComputerMoves = (computerValue) => {
    
    playerTwoMoveOneValue = 0;
    playerTwoMoveTwoValue = 0;
    playerTwoMoveThreeValue = 0;
    

    let computerValue = Math.floor(Math.random()*3);
    
    switch (computerValue){
        case 0:
            playerTwoMoveOneType = 'rock';
            break;
        case 1:
            playerTwoMoveOneType = 'paper';
            break;
        case 2:
            playerTwoMoveOneType = 'scissors';
            break;
        default:
            computerValue = "Error"
    }

    computerValue = Math.floor(Math.random()*3);
    
    switch (computerValue){
        case 0:
            playerTwoMoveTwoType = 'rock';
            break;
        case 1:
            playerTwoMoveTwoType = 'paper';
            break;
        case 2:
            playerTwoMoveTwoType = 'scissors';
            break;
        default:
            computerValue = "Error"
    }

    computerValue = Math.floor(Math.random()*3);
    
    switch (computerValue){
        case 0:
            playerTwoMoveThreeType = 'rock';
            break;
        case 1:
            playerTwoMoveThreeType = 'paper';
            break;
        case 2:
            playerTwoMoveThreeType = 'scissors';
            break;
        default:
            computerValue = "Error"
    }

while (playerTwoMoveOneValue + playerTwoMoveTwoValue + playerTwoMoveThreeValue < 99){
    computerValue = (Math.random()*3);

    if (computerValue <= .5){
        playerTwoMoveOneValue++;
    } else if (computerValue <= .65){
        playerTwoMoveTwoValue++;
    } else {
        playerTwoMoveThreeValue++;
    }
}

}