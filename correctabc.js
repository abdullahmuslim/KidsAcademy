let touch = new Audio("touch.mp3");
let wrgsound = new Audio("wrong.mp3");
let crtsound = new Audio("correct.mp3");
let cheers = new Audio("clapping.mp3");
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

let songs = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, zed];

let noquestion = true;
let nottouched = true;
let pass = document.getElementById("pass");
let fail = document.getElementById("fail");
let abc;

function generate(){
  let abc = Math.floor((Math.random())*28);
  if (abc <= 0){
    abc = 1;
  }else if(abc >= 25){
    abc = 25;
  }
  return abc;
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
    abc = generate();
    noquestion = false;
    touch.play();
    touch.addEventListener("ended", function(){
      setTimeout(function() {
        songs[abc].play();
      }, 100);
      touch.removeEventListener("ended", function(){});
    })
  }
}

function check(letter){
  let message = document.getElementById("message");
  if (letter === abc && noquestion != true){
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
  if(value < 5){
    let values = 5;
    values = JSON.stringify(values);
    localStorage.setItem("unlockedContents", values);
  }
}else{
  localStorage.setItem("unlockedContents", "2");
}