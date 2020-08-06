var randomNumber1=Math.floor(Math.random()*6)+1;  //1-6 random no.
var DiceImage1= "images/dice" + randomNumber1 + ".png";  //images/dic1.png -dice6.png


var image1=document.querySelectorAll("img")[0];  //change the src attribute
image1.setAttribute("src",DiceImage1);

//second image
var randomNumber2= Math.floor(Math.random()*6)+1;
var DiceImage2="images/dice" + randomNumber2 + ".png";
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",DiceImage2);



//reults of players
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
