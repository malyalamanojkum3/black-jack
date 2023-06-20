const startbtn = document.getElementById("start-btn");
const pickcard = document.getElementById("pick-card");
const nmessage = document.getElementById("two");
var cards =[];
var isalive=false;
var gotjack=false;
var sum=0;
var message;
//start function
function startgame() {
    isalive=true;
    var firstcard  = getrandom();
    var secondcard =  getrandom();
     sum=firstcard+secondcard;
     cards = [firstcard,secondcard];
    rendergame();
}
// render function
function rendergame() {

    // cards
    const allcards = document.getElementById("three");
    allcards.textContent = "Cards : ";

    for (var i=0;i<(cards.length);i++)
    {
        allcards.textContent += cards[i]+" ";
    }
    
    //sum
    const nsum = document.querySelector("#four");
    nsum.textContent = "Sum : " + sum;
    
    if(sum<21)
    {
        message="Do u wannna draw a new card";
        
    }
    else if(sum === 21)
    {
        message="you've got a black jack";
        gotjack=true;
    }
    else 
    {
        message="you're out of game";
        isalive=false;
    }
    nmessage.textContent=message;

}
//random function
function getrandom() {
    var number = (Math.floor(Math.random()*6)+1);
    // if number is 1 then return 11
    // if number is 10,11,12 then return 10
    if(number===1)
    number=11;
    else if (number===10 || number===11 ||number===12)
    number = 10;
    return number;
}
function newcard() {
    if(isalive===true && gotjack===false) {
    let card =  getrandom();
    cards.push(card);
    sum+=card;
    rendergame();
    }
}