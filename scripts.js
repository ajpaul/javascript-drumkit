//scripts.js

//when the user presses a key
document.addEventListener('keydown', function(event) {

    var audio = document.querySelector('audio[data-key="' + event.keyCode + '"]');
    audio.currentTime = 0;
    audio.play();

    var drumkey = document.querySelector('div[data-key="' + event.keyCode + '"]');
    drumkey.classList.add('pressed');
});

//when the "pressed" transition ends
const drums = Array.from(document.querySelectorAll('.drum'));
drums.forEach(drum => drum.addEventListener('transitionend', removeTransition));


function removeTransition(e) {
    e.target.classList.remove("pressed");
}





