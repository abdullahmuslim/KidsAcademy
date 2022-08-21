let touch = new Audio("touch.mp3");
let wrgsound = new Audio("wrong.mp3");
let crtsound = new Audio("correct.mp3");
let cheers = new Audio("clapping.mp3");
let red = new Audio("red.mp3");
let yellow = new Audio("yellow.mp3");
let green = new Audio("green.mp3");
let blue = new Audio("blue.mp3");

let songs = [red, yellow, green, blue];

let noquestion = true;
let nottouched = true;
let pass = document.getElementById("pass");
let fail = document.getElementById("fail");
let color;

function generate(){
  let color = Math.floor((Math.random())*4);
  if (color < 0){
    color = 0;
  }else if(color > 4){
    color = 3;
  }
  return color;
}
function hint(){
  let message = document.getElementById("message");
  message.style.visibility = "visible";
  message.innerHTML = "Tap the correct color";
  message.addEventListener("mouseout", function(){
    message.style.visibility = "hidden";
    message.innerHTML = "";
    setTimeout(function() {newquestion();}, 1000);
    message.removeEventListener("mouseout", function(){});
    message.removeEventListener("click", function(){});
  });
  message.addEventListener("click", function(){
    message.style.visibility = "hidden";
    message.innerHTML = "";
    setTimeout(function(){newquestion();}, 1000);
    message.removeEventListener("click", function(){});
    message.removeEventListener("mouseout", function(){});
  });
  message.addEventListener("touchmove", function(){
    message.style.visibility = "hidden";
    message.innerHTML = "";
    setTimeout(function(){newquestion();}, 1000);
    message.removeEventListener("touchmove", function(){});
  });
}
function newquestion(){
  if (noquestion){
    let message = document.getElementById("message");
    cheers.load();
    wrgsound.load();
    crtsound.load();
    message.style.visibility = "hidden";
    message.style.background = "";
    color = generate();
    noquestion = false;
    touch.play();
    touch.addEventListener("ended", function(){
      setTimeout(function() {
        songs[color].play();
      }, 100);
      touch.removeEventListener("ended", function(){});
    });
  }
}

function check(clr){
  let message = document.getElementById("message");
  if (clr == color && noquestion != true){
    let prev = parseInt(pass.textContent);
    cheers.play();
    crtsound.play();
    pass.textContent = prev+1;
    message.style.visibility = "visible";
    message.style.background = "url('correct.gif') no-repeat";
    message.style.backgroundSize = "contain";
    noquestion = true;
    setTimeout(newquestion, 1900);
  }else{
    wrgsound.play();
    message.style.visibility = "visible";
    message.style.background = "url('wrong.gif') no-repeat";
    message.style.backgroundSize = "contain";
    let prev = parseInt(fail.textContent);
    fail.textContent = prev+1;
    noquestion = true;
    setTimeout(newquestion, 1875);
    
  }
}
hint();

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