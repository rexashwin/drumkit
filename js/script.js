// adding listener to click
var drumCount = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function some() {
        makeSound(this.textContent);
        btnAni(this.textContent);
    });
}

// adding listener to keypress
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    btnAni(event.key);
});

// making sound
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

// animation on click
function btnAni(currentkey) {

    var activeKey = document.querySelector("." + currentkey);

    activeKey.classList.add("pressed");

    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 200);
}
// function btnAni(currentkey) {

//     var activeKey = document.querySelector("." + currentkey);

//     activeKey.classList.add("pressed");

//     setTimeout(function () {
//         activeKey.classList.remove("pressed");
//     }, 200);
// }