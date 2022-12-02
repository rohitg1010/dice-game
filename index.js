var randomNumber1 = Math.floor((Math.random()*6))+1;
//console.log(randomNumber1);
var str = "images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",str);

var randomNumber2 = Math.floor((Math.random()*6))+1;
//console.log(randomNumber2);
var str2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",str2);

if(randomNumber1>randomNumber2){
  //console.log(1);
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  //document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  //console.log(2);
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  //console.log(0);
  document.querySelector("h1").innerHTML = "Draw!";
}
