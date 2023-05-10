// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () =>{
    while(true){
        const depositAmount = prompt("Enter a deposit value: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount)|| numberDepositAmount <= 0){
            console.log("Invalid");
        }
        else{
            return numberDepositAmount;
        }
    }
};

const depositAmount = deposit();
console.log(depositAmount);