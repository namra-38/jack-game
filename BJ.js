
cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messgeEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

let player = {
  name : "Namra",
  chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards)

function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10){
    return 10
  }
  else if (randomNumber === 1){
    return 11
  }
  else{
    return randomNumber
  }
}

function startGame(){
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard , secondCard] 
  sum = firstCard + secondCard
  renderGame()
}

function renderGame(){
  cardEl.textContent = "Cards: "
  for(let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + ","
  }
  sumEl.textContent = "Sum: " + sum

  if (sum < 21){
    message = ("Do you want to draw a new card? 🙂")
  }
  else if (sum === 21){
    message = ("Wohoo! you've got the Blackjack! 🥳")
    hasBlackJack = true
  }
  else{
    message = "You're out of the game! 😭"
    isAlive = false
  }
  messgeEl.textContent = message

}

function newCard() {
  if(isAlive === true && hasBlackJack === false){
    let crd = getRandomCard()
    sum += crd
    cards.push(crd)
    renderGame()
  }
}
































// let age = 100
// if (age < 100){
//   console.log("Sorry you're not eligible")
// }
// else if(age === 100){
//   console.log("Here is your birthday card from the king")
// }
// else {
//   console.log("Not eligible, you have already gotten one card")
// }