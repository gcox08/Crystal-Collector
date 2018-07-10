var randomNumber;
var wins = 0;
var losses = 0;
var crystalNumber;


function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(){
    crystalNumber = 0;
    randomNumber = getRandomNumber(19, 120);
    console.log(randomNumber);

    $("#randomScore").text("Random Number: " + randomNumber);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    generateCrystals();


}


// using jQuery to dynamically create HTML content
function createCrystals(i){
    
    var crystalImage = $("<img>");



// javascript way below:
// document.getElementById("myID").setAttribute

// jQuery way of giving HTML elements attributes:
    crystalImage.attr({
        "class": "crystalImage",
        "src": "./crystal-"+i + ".jpg",
        "data-number": getRandomNumber(1, 12)
    });

    $("#crystalHolder").append(crystalImage);
}

function generateCrystals(){
    $("#crystalHolder").empty();
    for(var i = 0; i < 4; i++){
        createCrystals(i);
    }
}


// event bubbling and event delegation (secondary selector)
$(document).on("click", ".crystalImage", function(){
    // alert($(this).data("number"));

     crystalNumber += parseInt($(this).data("number"));

     console.log(crystalNumber);

     if(crystalNumber === randomNumber){
         alert("you win!")

         wins++;

         return startGame();
     }

     if(crystalNumber > randomNumber){
         alert("you lose");

         losses++;

         return startGame();
     }
     



})

startGame();