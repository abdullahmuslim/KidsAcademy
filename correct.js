let touch = new Audio("touch.mp3");
let wrgsound = new Audio("wrong.mp3");
let crtsound = new Audio("correct.mp3");
let cheers = new Audio("clapping.mp3");
let one = new Audio("one.mp3");
let two = new Audio("two.mp3");
let three = new Audio("three.mp3");
let four = new Audio("four.mp3");
let five = new Audio("five.mp3");
let six = new Audio("six.mp3");
let seven = new Audio("seven.mp3");
let eight = new Audio("eight.mp3");
let nine = new Audio("nine.mp3");
let ten = new Audio("ten.mp3");


let songs = [one,two,three,four,five,six,seven,eight,nine,ten];


let noquestion = true;
let nottouched = true;
let pass = document.getElementById("pass");
let fail = document.getElementById("fail");
let num;

function generate(){
  let num = Math.floor((Math.random())*11);
  if (num <= 0){
    num = 1;
  }else if(num >= 11){
    num = 10;
  }
  return num;
}
function hint(){
  let message = document.getElementById("message");
  message.style.visibility = "visible";
  message.innerHTML = "Tap the correct number";
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
    num = generate();
    noquestion = false;
    touch.play();
    touch.addEventListener("ended", function(){
      setTimeout(function() {
        songs[num-1].play();
      }, 100);
      touch.removeEventListener("ended", function(){});
    })
  }
}

function check(number){
  let message = document.getElementById("message");
  if (number === num && noquestion != true){
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
  if(value < 4){
    let values = 4;
    values = JSON.stringify(values);
    localStorage.setItem("unlockedContents", values);
  }
}else{
  localStorage.setItem("unlockedContents", "2");
}