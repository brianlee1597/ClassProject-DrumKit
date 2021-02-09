var drumNum = document.querySelectorAll(".drum").length;

addEventListener("keydown", function (event) {
    drumSound(event.key);
    buttonAnimation(event.key);
});
addEventListener("keyup", function (event) {
    removeAnimation(event.key);
});

function drumSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
}

function removeAnimation(currentKey) {
    var releaseButton = document.querySelector("." + currentKey);
    releaseButton.classList.remove("pressed");
}