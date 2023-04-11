var randomNumber1 = Math.floor(Math.random() * (6)) + 1; // generates random number between 1 to 6
// console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; // image generate dice1 to dice6

var randomImageSource = "images/" + randomDiceImage ; // update the images

var image1 = document.querySelectorAll("img")[0]; // selects first image

image1.setAttribute("src", randomImageSource); // randomnly changes the image

// same pattern to change the image of player2

var randomNumber2  = Math.floor(Math.random()*(6))+1;
var randomImageSource2 = "images/" + "dice" + randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// conditions of wins,loose,draw

if(randomNumber1 >randomNumber2 ){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}

