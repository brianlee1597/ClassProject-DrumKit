var drumNum = document.querySelectorAll(".drum").length;

for(var i = 0; i<drumNum; i++){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}