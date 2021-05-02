var randomNumber1=Math.floor((Math.random(randomNumber1)*6)+1);
var randomNumber2=Math.floor((Math.random(randomNumber2)*6)+1);
var randomDiceNumber1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomDiceNumber1;
var randomDiceNumber2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceNumber2;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 wins";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player 2 wins";
else
document.querySelector("h1").innerHTML="Draw!";
