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


let song = new Audio("counting.mp3");
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
    notstart = false;
    play.style.background = "#000";
    setTimeout(function(){
      animate(0, 1);
    }, 12500);
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
  let nums = document.getElementById("main");
  nums = nums.children;
  if (target < nums.length){
    if (notinit){
      nums[target].style.animation = "animate 0.3s ease-in";
      nums[target].style.filter = "invert(100%)";
      notinit = false;
      setTimeout(function (){animate(0, value)}, 500);
    }else{
      nums[target].style.animation = "";
      nums[target].style.filter = "";
      if (target == nums.length -1 && value != 10){
        //value += 1;
        console.log(value);
        notinit = true;
        if (value == 2){
          setTimeout(function(){animate(0, value)}, 3100);
          value += 1;
        }else if(value == 4){
          value += 1;
          notinit = true;
          setTimeout(function(){animate(0, value)}, 3900);
        }else if(value == 9){
          value += 1;
          notinit = true;
          setTimeout(function(){animate(0, value)}, 7900);
        }else{
          value += 1;
          setTimeout(function(){animate(0, value)}, 1400);
        }
      }else{
        if (value < 11){
          if(target == 2 && (value === 5 || value == 6)){
            console.log("yep", value);
            notinit = true;
            setTimeout(function() {animate(0, value)}, 2500);
            value += 1;
          }else if (target == 2 && value == 7){
            notinit = true;
            setTimeout(function() {animate(0, value)}, 5900);
            value += 1;
          }
          else if(target != 3 && value != 10){
            nums[target+1].style.animation = "animate 0.3s ease-in";
            nums[target+1].style.filter = "invert(100%)";
            setTimeout(function() {animate(target+1, value)}, 500);
          }else if(value == 10){
            console.log(value)
            nums[target].style.animation = "animate 0.3s ease-in";
            nums[target].style.filter = "invert(100%)";
            console.log("vurrent",target)
            setTimeout(function() {animate(target, value)}, 1800);
            target += 1;
          }else{
            nums[target+1].style.animation = "animate 0.3s ease-in";
            nums[target+1].style.filter = "invert(100%)";
            setTimeout(function(){animate(target+1, value)}, 2100);
          }
        }
      }
    }
  }
}
function clear(){
  let nums = document.getElementById("main");
  nums = nums.children;
  for(let j = 0; j < nums.length; j++){
    nums[j].style.animation = "";
    nums[j].style.filter = "";
  }
  notinit = true;
}
function say(num){
  songs[num].play();
}