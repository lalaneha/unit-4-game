//generate a random number between 19 to 120 as lucky number
//create an object game variable with each image and its random number, plus main lucky number
// have global variables total wins and losses 

// on click of image :
// first check if the game still in play: 
// check #lucky < total
// read the value of its random number
// add it to total score variable
// if #lucky == total - win++, reset game variables and restart
// if #lucky > total - losses++ , reset game variables and restart

// approach1 : assign randomly generated number as 'val' attribute to each image. 
// this way we can handle, on click even on the "crystal" class , so need to handle separate clicks for each image
//"on-click" image for crystal
//  $(".crystal").on("click", function() {
//     if (randomNumber == ttlScore)
//     {  // wins    }
//     else if (randomNumber < ttlScore)
//     {       // lost           }
//     else
//     {      // game continues
//         ttlScore += $(this).value();
//         $("#varYourScore").text(ttlScore);
//     }
// });

// approach2: handle on click event for each crystal and read corresponding genrated random number

// approach3: attach another COMMON function for on click event for each image

$(document).ready(function() {

    var winCount = '';
    var LossCount = '';    
    var minNumber = 19;
    var maxNumber = 120;
    var ttlScore = 0;
    var luckyRandomNo = '';
    var image1val = 0;
    var image2val = 0;
    var image3val = 0;
    var image4val = 0;

// defining functions here    
function displays()
{
    $("#varWins").text(winCount);
    $("#varLoose").text(LossCount);
    $("#varRandom").text(luckyRandomNo);
    $("#varYourScore").text(ttlScore);    
}

function randomNumberFromRange(min,max)
{
    //generate random number between 25-50 - Assumption for quick games!
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setCrystalValues()
{
    var min1 = 1;
    var max1 = 12;
    // 1. generate main random number
    luckyRandomNo = randomNumberFromRange(minNumber, maxNumber);
    // need to make sure that the random number generated is not same for all images. 
    // cz in that case, user may never win! also, there has to be few even and odd numbers at all times (atleast for level 1) !
    image1val = randomNumberFromRange(min1, max1);
    image2val = randomNumberFromRange(min1, max1);
    image3val = randomNumberFromRange(min1, max1);
    image4val = randomNumberFromRange(min1, max1);
    // for testing only
    // $("#c1val").text(image1val);
    // $("#c2val").text(image2val);
    // $("#c3val").text(image3val);
    // $("#c4val").text(image4val);
}

function reset()
{
    ttlScore = 0;
    luckyRandomNo = '';
    setCrystalValues();
    displays();
}

function wins()
{
    //wins
    alert ("Congratulations!! You Won SUPERPOWERS! ");
    winCount++;
    $("#varWins").text(winCount);
    reset();
}

function Loss()
{
       // lost
       alert ("Alas!! Better Luck Next Time! ");       
       LossCount++;
       $("#varLoose").text(LossCount);
       reset();
}
 //"on-click" image for crystal-1
 $("#c1").on("click", function() {
    if (luckyRandomNo == ttlScore)
    {
        wins();
    }
    else if (luckyRandomNo < ttlScore)
    {
        Loss();
    }
    else
    {
        // game continues
        ttlScore += image1val;
        $("#varYourScore").text(ttlScore);
    }
});

 //"on-click" image for crystal-1
 $("#c2").on("click", function() {
    if (luckyRandomNo == ttlScore)
    {
        wins();
    }
    else if (luckyRandomNo < ttlScore)
    {
        Loss();
    }
    else
    {
        // game continues
        ttlScore += image2val;
        $("#varYourScore").text(ttlScore);
    }
});

 //"on-click" image for crystal-1
 $("#c3").on("click", function() {
    if (luckyRandomNo == ttlScore)
    {
        wins();
    }
    else if (luckyRandomNo < ttlScore)
    {
        Loss();
    }
    else
    {
        // game continues
        ttlScore += image3val;
        $("#varYourScore").text(ttlScore);
    }
});

 //"on-click" image for crystal-1
 $("#c4").on("click", function() {
    if (luckyRandomNo == ttlScore)
    {
        wins();
    }
    else if (luckyRandomNo < ttlScore)
    {
        Loss();
    }
    else
    {
        // game continues
        ttlScore += image4val;
        $("#varYourScore").text(ttlScore);
    }
});

// flow starts here
// 1. genrate 4 random numbers for images - global variables
setCrystalValues();
//2. handle displays
displays();


});