let sum = 0
let allCards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerInfo = 
{
    name: "Konstantin",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = playerInfo.name + ": $" + playerInfo.chips

function getRandomCard()
{
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard === 1)
    {
        return 11
    }
    else if(randomCard > 10)
    {
        return 10
    }
    else
    {
        return randomCard
    }
}

function startGame()
{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    allCards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame()
{
    cardsEl.textContent = "Cards: "
    for (i = 0; i < allCards.length; i++)
    {
        cardsEl.textContent += allCards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20)
    {
        message = "Want one more card?"
    }
    else if (sum === 21)
    {
        message = "You've got a BlackJack!"
        hasBlackJack = true
    }
    else
    {
        message = "Too much, you are out!"
        isAlive = false
    }
    messageEl.textContent = message
    playerEl.textContent = playerInfo.name + ": $" + playerInfo.chips
}

function drawCard()
{
    if(isAlive && !hasBlackJack)
    {
        let newCard = getRandomCard()
        sum += newCard
        allCards.push(newCard)
        renderGame()
    }
}
