let firstCard = getRandomCard ()
let secondCard = getRandomCard ()
let age = 22
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let msg = ""
let cards = [firstCard, secondCard] //array ordered list of items
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


function getRandomCard(){
    let random = Math.floor( Math.random() * 13) + 1
    return random
}

function startGame() {
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

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard(){
    let card = getRandomCard ()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}