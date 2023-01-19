let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = doucument.querySelector("body");
let cardsEl = document.getElementById("cards-el");

let player =           //plyer is object which is store key value pairs
{
  name: "AJ",
  chips: 202
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;    //this is from player object

function getRandomCard()
{
  let randomNumber = Math.floor(Math.random() * 13) + 1;   //1-13
  
  if (randomNumber > 10)
  {
    return 10;
  } else if (randomNumber === 1)
  {
    return 11;
  } else {
    return randomNumber;
  }
  
  return randomNumber;
}

function startGame()
{
  // after only click on start game the cars will be there 
  isAlive = true;
  let firstCard = getRandomCard(); //random no. from 2 to 11    //we add assign values of 1st and 2nd card after stargaem because it do not assigns cards value automatically when getRandomCard() function hoisted
  let secondCard = getRandomCard();
  //creating array for storing multiple cards.
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  
  renderGame();
}



function renderGame() {
  //render firrst and second card
  
  cardsEl.textContent = "Cards: "; 
  for (let i = 0; i < cards.length; i++)
  {
    cardsEl.textContent += cards[i] + " ";  
  }

  sumEl.textContent ="Sum: " + sum;
  if (sum <= 20) {
    message = "do you want to draw new card?";
  } else if (sum === 21) {
    message = "You've got blackJack!";
    hasBlackJack = true;
  } else {
    message = "you are out of the game";
    isAlive = false;
  }

  // console.log(hasBlackJack);
  // console.log(isAlive);
    messageEl.textContent = message;
   
}

function newCard()
{

  if (isAlive === true && hasBlackJack === false) {  //if we are in gae and not having blackjack also 
    let card = getRandomCard();   //random no. from (2-11)
    sum = sum + card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
  
}