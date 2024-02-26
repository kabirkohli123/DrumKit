// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons; i++) {

//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {

//     var buttonInnerHTML = this.innerHTML;

//     makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener('keydown', function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });


// function makeSound(key) {

//   switch (key) {
//     case "w":
//       var tom1 = new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;

//     case "a":
//       var tom2 = new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;

//     case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;

//     case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;

//     case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;

//     case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;

//     case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;


//     default: console.log(key);

//   }
// }


var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("./sounds/music1.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("./sounds/music2.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("./sounds/music3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("./sounds/music4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("./sounds/music5.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("./sounds/music6.mp3");
                audio.play();
                break;


            case "l":
                var audio = new Audio("./sounds/music7.mp3");
                audio.play();
                break;

            default:
                break;
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
        // Trigger the button click
        var audio = new Audio("./sounds/music1.mp3");
        audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        // Trigger the button click
        var audio = new Audio("./sounds/music2.mp3");
        audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
        // Trigger the button click
        var audio = new Audio("./sounds/music3.mp3");
        audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        // Trigger the button click
        var audio = new Audio("./sounds/music4.mp3");
        audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'j') {
        // Trigger the button click
        var audio = new Audio("./sounds/music5.mp3");
        audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'k') {
        // Trigger the button click
        var audio = new Audio("./sounds/music6.mp3");
        audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
        // Trigger the button click
        var audio = new Audio("./sounds/music7.mp3");
        audio.play();
    }
});

