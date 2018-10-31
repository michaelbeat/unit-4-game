

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/blue-crystal.png", "./assets/images/red-crystal.png", "./assets/images/orange-crystal.png", "./assets/images/green-crystal.png"];  


function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 100) + 12;
}

function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 102) + 19));
        crystal.attr("height", "100");
        $(".crystal-images").append(crystal);
    }
}

function resetHTML() {
    $(".target-number").html(targetNumber);
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + "</p>");
    $(".score-number").html(counter);
    $(".crystal-images").empty();
}

function totalReset() {
    randomTargetNumber ();
    counter = 0;
    resetHTML ();
    resetCrystals ();
}


// Break

function crystalClick() {
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter === targetNumber) {
        wins++;
        totalReset();
    } else if (counter > targetNumber) {
        losses++;
        totalReset();
    }
}

$(document).on("click", ".crystal", crystalClick);