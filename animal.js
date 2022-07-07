
let duck = new Audio("duck.mp3");
let cat = new Audio("cat.mp3");
let dog = new Audio("dog.mp3");
let zebra = new Audio("zebra.mp3");
let lion = new Audio("lion.mp3");

let song = new Audio("animals.wav");

let songs = [duck, cat, dog, zebra, lion];

let notstart = true;
let notloop = true;
let notinit = true;

play = document.getElementById("start");
loop = document.getElementById("loop");
function start(){
  if(notstart){
    animate(0, 1)
    song.play();
    notstart = false;
    play.style.background = "#000";
    song.addEventListener("ended", function 
    (){
      notstart = true;
      play.style.background = "#1b4225";
      clear();
      if(notloop != true){
        start();
      }
    });
  }
}

function loopit(){
  if(notloop){
    notloop = false;
    loop.style.background = "#000";
  }else{
    notloop = true;
    loop.style.background = "#421b38";
  }
}

function animate(target, value){
  let colors = document.getElementById("main");
  colors = colors.children;
  if (target < colors.length){
    if (target == (colors.length -1)){
      colors[target].style.display = "flex";
      value += 1;
      colors[target-1].style.display = "none";
    }else{
      if (value < 2){
        colors[target].style.display = "flex";
        if(target == 2){
          setTimeout(function() {animate(target+1, value);}, 5000);
        }else if(target == 3){
          setTimeout(function() {animate(target+1, value)}, 6900);
        }else{
          setTimeout(function() {animate(target+1, value);}, 4000);
        }
        if (target >= 1){
            colors[target-1].style.display = "none";
        }
      }
    }
  }
}
function clear(){
  let animals = document.getElementById("main");
  let animal = animals.children;
  animal[animal.length-1].style.display = "none";
  notinit = true;
}
function say(animal){
  songs[animal].play();
  setTimeout(function() {
    sounds[animal].play();
  }, 2000);
}