

let red = new Audio("red.mp3");
let yellow = new Audio("yellow.mp3");
let green = new Audio("green.mp3");
let blue = new Audio("blue.mp3");

let songs = [red, yellow, green, blue];


let song = new Audio("color.mp3");
let notstart = true;
let notloop = true;
let notinit = true;
song.load();
play = document.getElementById("start");
loop = document.getElementById("loop");
function start(){
  if(notstart){
    song.load();
    song.play();
    setTimeout(function(){
      animate(0, 1);
    }, 20490);
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
  let colors = document.getElementById("clr");
  colors = colors.children;
  if (target < colors.length){
    if (target == (colors.length -1)){
      colors[target].style.animation = "animate 20s ease-in";
      colors[target].style.display = "flex";
      value += 1;
      colors[target-1].style.display = "none";
      colors[target-1].style.animation = "";
    }else{
      if (value < 2){
        colors[target].style.animation = "animate 20s ease-in";
        colors[target].style.display = "flex";
        setTimeout(function() {animate(target+1, value);}, 25000);
        if (target >= 1){
            colors[target-1].style.display = "none";
            colors[target-1].style.animation = "";
        }
      }
    }
  }
}
function clear(){
  let colors = document.getElementById("clr");
  colors = letters.children;
  for(let j = 0; j < colors.length; j++){
    colors[j].style.animation = "";
    colors[j].style.display = "none";
  }
  colors[0].style.display = "flex";
  notinit = true;
}
function say(color){
  songs[color].play();
}

//update lock values
if(localStorage.getItem("unlockedContents")){
  let value = JSON.parse(localStorage.getItem("unlockedContents"))
  if(value < 7){
    let values = 7;
    values = JSON.stringify(values);
    localStorage.setItem("unlockedContents", values);
  }
}else{
  localStorage.setItem("unlockedContents", "2");
}
