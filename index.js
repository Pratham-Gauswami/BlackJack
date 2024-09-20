let firstCard = 1
let secondCard = 9
let age = 22
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let msg = ""

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("Wohoo!! You just won the black jack.")
    hasBlackJack = true
} else {
    console.log("Sorry you are out of the game.")
    isAlive = false
}

//Checking if the person is old enough to enter the nightclub (21)
if (age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!")
}

console.log(hasBlackJack)
console.log(isAlive)
