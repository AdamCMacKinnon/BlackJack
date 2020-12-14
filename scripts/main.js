// window.addEventListener('DOMContentLoaded', function() {
//   // Execute after page load
// })


// deck building
var suit = ['hearts', 'spades', 'clubs', 'diamonds'];
var value = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];

function buildDeck(){
    let deck = [];
    for(var x = 0; x< value.length; x++){
        for(var y = 0; y < suit.length; y++){
            let weight = 0;
            if(value[x] == 'jack' || value[x] == 'queen' || value[x] == 'king'){
                weight = 10;
            }
            else if (value[x] == 'ace'){
                weight = 11;
            }
            else {
                weight = parseInt(value[x]);
            }
            var card = {Value: weight, Suit: suit[y], imageUrl: `images/${value[x]}_of_${suit[y]}.png`};
            deck.push(card);
            
        
        }
    }
    return deck;

}
var deck = buildDeck()

function shuffle(deck) {
    for(let x = deck.length -1; x > 0; x--) {
        let y = Math.floor(Math.random() * (x +1));
        let temp = deck[x];
        deck[x] = deck[y];
        deck[y] = temp;
        
    }
        
        return deck;
    }


deck = shuffle(deck)
console.log(deck);
var dealerHand = [];
var playerHand = [];

let playerValue = (playerHand) =>{
    let playerValue = 0;
    playerValue = playerHand.reduce((acc, val) => {
        return acc + val}, 0)
    return playerValue
    }
let dealerValue = (dealerHand) =>{
    let dealerValue = 0;
    dealerValue = dealerHand.reduce((acc, val) => {
        return acc + val}, 0)
    return dealerValue
    }

console.log(playerValue);
console.log(dealerValue);

var deal = document.getElementById('deal-button');
deal.addEventListener('click', (e) => {
    for(x = 0; x < 2; x++){
        let card = deck.pop()
        dealerHand.push(card);
        card = deck.pop()
        playerHand.push(card);
        

    }
    
    document.querySelector(div);
    var dealerScore = document.getElementById('messages');
    dealerScore.textContent = `Dealer Score: ${dealerValue()}`
    dealerScore.setAttribute('class', 'message-box')
    div.appendChild(dealerScore);

    document.querySelector(div);
    var playerScore = document.getElementById('messages');
    playerScore.textContent = `Dealer Score: ${playerValue()}`
    playerSCore.setAttribute('class', 'message-box')
    div.appendChild(dealerScore);

    
    


    for(i = 0; i < playerHand.length; i++) {
        let hand = document.querySelector("#player-hand");
        let card = document.createElement('img')
        card.src = playerHand[i].imageUrl;
        card.setAttribute('class','hand-image')
        hand.appendChild(card);
    }
    for(i = 0; i < dealerHand.length; i++) {
        let hand = document.querySelector("#dealer-hand");
        let card = document.createElement('img')
        card.src = dealerHand[i].imageUrl;
        card.setAttribute('class','hand-image')
        hand.appendChild(card);
    }
})
var hit = document.getElementById('hit-button');
hit.addEventListener('click', (e) => {
    for(x = 0; x < 1; x++){
        let card = deck.pop()
        playerHand.push(card);
        

    }
    for(i = 0; i < playerHand + 1; i++) {
        let hand = document.querySelector("#player-hand");
        let card = document.createElement('img')
        card.src = playerHand[i].imageUrl;
        card.setAttribute('class','hand-image')
        hand.appendChild(card);
    }

})


function busts(playerValue, dealerValue) {
    if (playerValue > 21){
        console.log('Player Busts! You Lost!');
    } else{
        console.log(playerValue);
    }
    if (dealerValue > 21) {
        console.log('Dealer Busts!  You Win!');
    } else {
        console.log(dealerValue);
    }
}

























