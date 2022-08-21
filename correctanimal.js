let touch = new Audio("touch.mp3");
let wrgsound = new Audio("wrong.mp3");
let crtsound = new Audio("correct.mp3");
let cheers = new Audio("clapping.mp3");

let duck = new Audio("nDuck.mp3");
let cat = new Audio("nCat.mp3");
let dog = new Audio("nDog.mp3");
let zebra = new Audio("nZebra.mp3");
let lion = new Audio("nLion.mp3");


let sounds = [duck, cat, dog, zebra, lion];
let noquestion = true;
let nottouched = true;
let pass = document.getElementById("pass");
let fail = document.getElementById("fail");
let sound;

function generate(){
  let sound = Math.floor((Math.random())*5);
  if (sound < 0){
    sound = 0;
  }else if(sound > 5){
    sound = 5;
  }
  return sound;
}
function hint(){
  let message = document.getElementById("message");
  message.style.visibility = "visible";
  message.innerHTML = "Tap the correct Animal";
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
}
function newquestion(){
  if (noquestion){
    let message = document.getElementById("message");
    cheers.load();
    wrgsound.load();
    crtsound.load();
    message.style.visibility = "hidden";
    message.style.background = "";
    sound = generate();
    noquestion = false;
    touch.play();
    touch.addEventListener("ended", function(){
      setTimeout(function() {
        sounds[sound].play();
      }, 100);
      touch.removeEventListener("ended", function(){});
    })
  }
}

function check(option){
  let message = document.getElementById("message");
  if (option === sound && noquestion != true){
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
  if(value < 8){
    let values = 8;
    values = JSON.stringify(values);
    localStorage.setItem("unlockedContents", values);
  }
}else{
  localStorage.setItem("unlockedContents", "2");
}