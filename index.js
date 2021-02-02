var randomNumber1 =Math.floor(Math.random()*6)+1; //creating random numbers between 1-6
var randomImages = "dice"+randomNumber1+".png"; //selecting dice1.png-dice6.png
var randomImageSource = "images/"+ randomImages;//selecting Image Source


document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImages1 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+ randomImages1;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🔥player1 wins!!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="player2 wins!!🔥";
}
else{
    document.querySelector("h1").innerHTML="draw!!"
}
