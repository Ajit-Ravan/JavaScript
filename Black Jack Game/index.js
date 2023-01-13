let firstNumber = 91;           //random no. from 2 to 11
let secondNumber = 12;

let sum = firstNumber + secondNumber;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum <=20)
{
    message = ("do you want to draw new card? 😉");
} else if (sum  === 21)
{
    message = "You've got blackJack! 😁";
    hasBlackJack = true;
} else {
    message = "you are out of the game😒🥲";
    isAlive = false; 
}

// console.log(hasBlackJack);
// console.log(isAlive);
console.log(message);
