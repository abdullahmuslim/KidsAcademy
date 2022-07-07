
let a = new Audio("a.mp3");
let b = new Audio("b.mp3");
let c = new Audio("c.mp3");
let d = new Audio("d.mp3");
let e = new Audio("e.mp3");
let f = new Audio("f.mp3");
let g = new Audio("g.mp3");
let h = new Audio("h.mp3");
let i = new Audio("i.mp3");
let j = new Audio("j.mp3");
let k = new Audio("k.mp3");
let l = new Audio("l.mp3");
let m = new Audio("m.mp3");
let n = new Audio("n.mp3");
let o = new Audio("o.mp3");
let p = new Audio("p.mp3");
let q = new Audio("q.mp3");
let r = new Audio("r.mp3");
let s = new Audio("s.mp3");
let t = new Audio("t.mp3");
let u = new Audio("u.mp3");
let v = new Audio("v.mp3");
let w = new Audio("w.mp3");
let x = new Audio("x.mp3");
let y = new Audio("y.mp3");
let zee = new Audio("z.mp3");
let zed = new Audio("zed.mp3");

let songs = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, zee];//change zee to zed for British pronounciation of the last letter of the alphabet


let song = new Audio("abc.mp3");
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
    }, 17490);
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
  let letters = document.getElementById("main");
  letters = letters.children;
  if (target < letters.length){
      if (target == letters.length -1){
        letters[target].style.animation = "animate 0.3s ease-in";
        letters[target].style.filter = "invert(100%)";
        setTimeout(function() {animate(target+1, value)}, 970);
        value += 1;
      }else{
        if (value < 2){
          console.log(target);
          if(target == 6 || target == 20){
            console.log("yep", target);
            letters[target].style.animation = "animate 0.3s ease-in";
            letters[target].style.filter = "invert(100%)";
            setTimeout(function() {animate(target+1, value)}, 2800);
          }else if(target == 13){
            console.log("yep", target);
            letters[target].style.animation = "animate 0.3s ease-in";
            letters[target].style.filter = "invert(100%)";
            setTimeout(function() {animate(target+1, value)}, 2800);
          }else if(target === 9){
            letters[target].style.animation = "animate 0.3s ease-in";
            letters[target].style.filter = "invert(100%)";
            setTimeout(function() {animate(target+1, value)}, 2850);
          }else if(target < 13){
            letters[target].style.animation = "animate 0.3s ease-in";
            letters[target].style.filter = "invert(100%)";
            setTimeout(function(){animate(target+1, value)}, 970);
          }else if(target > 13 && target <= 19){
            letters[target].style.animation = "animate 0.3s ease-in";
            letters[target].style.filter = "invert(100%)";
            setTimeout(function(){animate(target+1, value)}, 1000);
          }else if(target > 19 && target < 24){
            letters[target].style.animation = "animate 0.3s ease-in";
            letters[target].style.filter = "invert(100%)";
            setTimeout(function() {animate(target+1, value)}, 2000);
          }else{
            letters[target].style.animation = "animate 0.3s ease-in";
            letters[target].style.filter = "invert(100%)";
            setTimeout(function() {animate(target+1, value)}, 970);
          }
        }
      }
    }
  }
function clear(){
  let letters = document.getElementById("main");
  letters = letters.children;
  for(let j = 0; j < letters.length; j++){
    letters[j].style.animation = "";
    letters[j].style.filter = "";
  }
  notinit = true;
}
function say(letter){
  songs[letter].play();
}