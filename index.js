const cardArray=[
    {
        name: "Cheeseburger",
        img: "img/cheeseburger.png"
    },
    {
        name: "Cheeseburger",
        img: "img/cheeseburger.png"
    },
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "fries",
        img: "img/fries.png"
    },
    {
        name: "hotdog",
        img: "img/hotdog.png"
    },
    {
        name: "hotdog",
        img: "img/hotdog.png"
    },
    {
        name: "icecream",
        img: "img/ice-cream.png"
    },
    {
        name: "icecream",
        img: "img/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "img/milkshake.png"
    },
    {
        name: "milkshake",
        img: "img/milkshake.png"
    },
    {
        name: "pizza",
        img: "img/pizza.png"
    },
    {
        name: "pizza",
        img: "img/pizza.png"
    },
]

cardArray.sort(()=>0.5-Math.random())

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result")
let cardsChosen=[];
let cardsChosenId=[];
let cardsWon=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        let card = document.createElement('img');
        card.setAttribute('src','img/blank.png');
        card.setAttribute('data-id',i);
        grid.appendChild(card);
        card.addEventListener('click',flipcard)
    }
}

function checkForMatch(){
    let cards = document.querySelectorAll('img');
    let optionOneId=cardsChosenId[0];
    let optionTwoId=cardsChosenId[1];
    if(optionOneId===optionTwoId){
        setTimeout(alert("you click same image"),300)
        cards[optionOneId].setAttribute('src','img/blank.png');
        cards[optionTwoId].setAttribute('src',"img/blank.png")
    }
    else if(cardsChosen[0]===cardsChosen[1]){
        alert("You matched");
        cards[optionOneId].setAttribute('src','img/white.png');
        cards[optionTwoId].setAttribute('src','img/white.png');
        cards[optionOneId].removeEventListener('click',flipcard);
        cards[optionTwoId].removeEventListener('click',flipcard);
        cardsWon.push(cardsChosen);
    }
    else{
        alert("Try Again");
        cards[optionOneId].setAttribute('src',"img/blank.png");
        cards[optionTwoId].setAttribute('src',"img/blank.png");
    }

    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.innerHTML=cardsWon.length;
    if(resultDisplay===cardsWon.length/2){
        alert("Congratulations You won");
        console.log(cardsWon.length);
    }
    

}

function flipcard(){
    let cardId= this.getAttribute('data-id');
    // cardsChosen=cardArray[cardId].name;
    this.setAttribute('src',cardArray[cardId].img);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    if(cardsChosen.length===2){
        setTimeout(checkForMatch,500)
    }
}

createBoard()