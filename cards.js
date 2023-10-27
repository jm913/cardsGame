

 
let sum= 0;  // startine me value zero hoge
// let cards=[firstCard,secondCard] // array 
 let cards=[] // starting me array hali hoga
let hasblackjack=false;
let isAlive=false;
let message=""

let messageEL=document.getElementById('message-el');
let sumEl=document.getElementById('sumEl')
let cardEl=document.getElementById('cardEl')


function randomNum(){
// return Math.floor(Math.random()*13)  ///0 to 12
let random=  Math.floor(Math.random()*13) +1  ///1 to 13
if(random>10){
return 10
}else if(random===1){
return 11
}else{
    return random
}
}

function startGame(){
    isAlive=true
    let firstCard=randomNum();
let secondCard=randomNum();
cards=[firstCard,secondCard]
sum = firstCard+secondCard 
    renderGame()  
}

function renderGame(){
sumEl.textContent="sum : "+ sum
// cardEl.textContent=`cards :  ${firstCard}  and  ${secondCard} `
// cardEl.textContent="cards :"+ cards[0]+" "+ cards[1]  //with help of arraay
  //with for loop we add new cards
for(let i=0; i<cards.length; i++){
   cardEl.textContent += " " +cards[i]
}

if(sum <= 20){
    message="Do you want to draw a new card "}
 else if(sum == 21){
 message="woow! you got the blackjack "
hasblackjack=true
}

else{
 message="you are out of the game"
isAlive=false
}
messageEL.textContent=message
}

function newCard(){
if(isAlive===true && hasblackjack===false ){
    let card=randomNum()  // new card
    sum+=card
//push the  new card in array
cards.push(card)

//object  coins show kre ga
let player={
    Name :"Jatin",
    Chips: 145,
   
   }
   let playerEl=document.getElementById('player')
let total= player.Chips-sum
   playerEl.textContent=`${player.Name} : $ ${total}`
   
renderGame() // call kr rha hai


}
}