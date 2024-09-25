let player = {
    name: "Per",
    chips: 145
}
let age = 22
let hasBlackJack = false
let isAlive = false
let sum = 0
let msg = ""
let cards = [] // array ordered list of items
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

//Another way of gettinf an element by inserting its id
// let sumEl = document.querySelector("#sum-el")
// let sumEl = document.querySelector(".sum-el")
// let sumEl = document.querySelector("body")

//Checking if the person is old enough to enter the nightclub (21)
// if (age < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        return 11
    } else if (random >= 11) {
        return 10
    } else {
        return random
    }   
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

//Function to start the game
function renderGame() {
    //Checking the sum of the cards the players have
    if (sum <= 20) {
        msg = "Do you want to draw a new card?"
    } else if (sum === 21) {
        msg = "Wohoo!! You just won the black jack."
        hasBlackJack = true
    } else {
        msg = "Sorry you are out of the game."
        isAlive = false
    }
    messageEl.textContent = msg
    sumEl.textContent = " " + "Sum: " + sum
    cardsEL.textContent = "Cards: " 
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++){
        cardsEL.textContent += cards[i] + " "
    }
}

function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive === true && hasBlackJack === false ){
    let card = getRandomCard ()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
}