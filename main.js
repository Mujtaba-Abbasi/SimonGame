var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
started = false;

$(document).on("keypress", function () {
    if (started == false) {
        nextSequence();
    }
    started = true;
});

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    btnClicked(userChosenColor);
    checkInput(userClickedPattern.length - 1);
});

function nextSequence() {
    $("h1").text("Level " + level);
    level++;

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    switch (randomChosenColor) {
        case "yellow":
            $("#yellow").fadeOut(100).fadeIn(100);
            break;
        case "red":
            $("#red").fadeOut(100).fadeIn(100);
            break;
        case "blue":
            $("#blue").fadeOut(100).fadeIn(100);
            break;
        case "green":
            $("#green").fadeOut(100).fadeIn(100);
            break;
    }
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

function btnClicked(btn) {
    $("#" + btn).fadeOut(100).fadeIn(100);
    colorAudio = new Audio("sounds/" + btn + ".mp3");
    colorAudio.play();
}
function checkInput(levels) {
    if (gamePattern[levels] === userClickedPattern[levels]) {
        setTimeout(function () {
            nextSequence();
        }, 1000);

    }
    else {
        wrongAnswer();
        startAgain();
    }

}
function wrongAnswer() {
    colorAudio = new Audio("sounds/wrong.mp3");
    colorAudio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
}
function startAgain() {
    started = false;
    gamePattern = [];
    level = 0;
    userClickedPattern = [];

}
