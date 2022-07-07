let cheers = new Audio("clapping.mp3");
let touch = new Audio("touch.mp3");
let correct = new Audio("correct.mp3");
let wrong = new Audio("wrong.mp3");

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

let red = new Audio("red.mp3");
let yellow = new Audio("yellow.mp3");
let green = new Audio("green.mp3");
let blue = new Audio("blue.mp3");

let duck = new Audio("nDuck.mp3");
let cat = new Audio("nCat.mp3");
let dog = new Audio("nDog.mp3");
let zebra = new Audio("nZebra.mp3");
let lion = new Audio("nLion.mp3");


let colorsd = [red, yellow, green, blue];

let numsd = [one,two,three,four,five,six,seven,eight,nine,ten];

let animalsd = [cat, dog, duck,lion, zebra];

let lettersd = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, zee];//change zee to zed for British pronounciation of the last letter of the alphabet

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["1","2","3","4","5","6","7","8","9","10"];
let colors = ["RED", "YELLOW", "GREEN", "BLUE"];
let animals = ["cat.png", "dog.png", "duck.png", "lion.png", "zebra.png"];

let answered = 0;
let crt;
let nottouched = true;
let unanswered = false;

function newquestion(){
  clear();
  letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  numbers = ["1","2","3","4","5","6","7","8","9","10"];
  colors = ["RED", "YELLOW", "GREEN", "BLUE"];
  animals = ["cat.png", "dog.png", "duck.png", "lion.png", "zebra.png"];
  question = [];
  let options = document.getElementById("options");
  options = options.children;
  let option2 = document.getElementById("images");
  options2 = option2.children;
  let random = Math.random() * 3;
  random = Math.round(random);
  if(random != 3){
    let random3 = document.getElementById("images").style.display = "none";
    let current = document.getElementById("options").style.display = "flex";
  }
  if(nottouched == false && unanswered == false){
  if (random == 0){
    let localrand = Math.random() * (letters.length-1);
    localrand = Math.round(localrand);
    crt = letters[localrand];
    question[0] = crt;
    letters.splice(localrand, 1);
    touch.play();
    setTimeout(function(){lettersd[localrand].play()}, 1200);
    for(let j = 0; j < 3; j++){
      let localrand = Math.random() * (letters.length-1);
      localrand = Math.round(localrand);
      question[j+1] = letters[localrand];
      letters.splice(localrand, 1);
    }
    for(let j = 0; j < 4; j++){
      let localrand = Math.random() * (question.length-1);
      localrand = Math.round(localrand);
      options[j].innerHTML = question[localrand];
      options[j].value = question[localrand];
      question.splice(localrand, 1);
    }
    unanswered = true;
  }else if(random == 1){
    let localrand = Math.random() * (numbers.length-1);
    localrand = Math.round(localrand);
    crt = numbers[localrand];
    question[0] = crt;
    numbers.splice(localrand, 1);
    touch.play();
    setTimeout(function(){numsd[localrand].play()}, 1200);
    for(let j = 0; j < 3; j++){
      let localrand = Math.random() * (numbers.length-1);
      localrand = Math.round(localrand);
      question[j+1] = numbers[localrand];
      numbers.splice(localrand, 1);
    }
    for(let j = 0; j < 4; j++){
      let localrand = Math.random() * (question.length-1);
      localrand = Math.round(localrand);
      options[j].innerHTML = question[localrand];
      options[j].value = question[localrand];
      question.splice(localrand, 1);
    }
    unanswered = true;
  }else if(random == 2){
    let localrand = Math.random() * (colors.length-1);
    localrand = Math.round(localrand);
    crt = colors[localrand];
    question[0] = crt;
    colors.splice(localrand, 1);
    touch.play();
    setTimeout(function(){colorsd[localrand].play()}, 1200);
    for(let j = 0; j < 3; j++){
      let localrand = Math.random() * (colors.length-1);
      localrand = Math.round(localrand);
      question[j+1] = colors[localrand];
      colors.splice(localrand, 1);
    }
    for(let j = 0; j < 4; j++){
      let localrand = Math.random() * (question.length-1);
      localrand = Math.round(localrand);
      options[j].innerHTML = question[localrand];
      switch (question[localrand]) {
        case 'RED':
          options[j].style.background = "#f00";
          break;
        case 'YELLOW':
          options[j].style.background = "#ff0";
          break;
        case 'GREEN':
          options[j].style.background = "#0f0";
          break;
        case 'BLUE':
          options[j].style.background = "#00f";
          break;
      }
      options[j].value = question[localrand];
      question.splice(localrand, 1);
    }
    unanswered = true;
  }else{
    let current = document.getElementById("images").style.display = "flex";
    let options = document.getElementById("options").style.display = "none";
    let localrand = Math.random() * (animals.length-1);
    localrand = Math.round(localrand);
    crt = animals[localrand];
    question[0] = crt;
    animals.splice(localrand, 1);
    touch.play();
    setTimeout(function(){animalsd[localrand].play()}, 1200);
    for(let j = 0; j < 3; j++){
      let localrand = Math.random() * (animals.length-1);
      localrand = Math.round(localrand);
      question[j+1] = animals[localrand];
      animals.splice(localrand, 1);
    }
    for(let j = 0; j < 4; j++){
      let localrand = Math.random() * (question.length-1);
      localrand = Math.round(localrand);
      options2[j].src = question[localrand];
      options2[j].value = question[localrand];
      question.splice(localrand, 1);
      unanswered = true;
    }
  }
  }else{
    nottouched = false;
    newquestion();
  }
}
function check(value){
  console.log("outside", crt);
  if(nottouched == false){
    console.log("inside", crt);
    let score = document.getElementById("score");
    if(answered == 4){
      unanswered = false;
      if(crt != null && crt != undefined && crt == value){
        score.innerHTML = parseInt(score.textContent) + 2;
        correct.play();
      }else{
      wrong.play();
      }
      if(parseInt(score.textContent) > 8){
        setTimeout( function(){
          let message = document.getElementById("message");
          message.style.visibility = "visible";
          message.innerHTML = `${score.textContent}/10 <br/>You rock!!<br/>tap to retry`;
          message.addEventListener("mouseout", function(){
          message.style.visibility = "hidden";
          message.innerHTML = "";
          setTimeout(function() {
            score.innerHTML = "0";
            answered = 0;
            nottouched = true;
            newquestion();
          }, 10);
            message.removeEventListener("mouseout", function(){});
            message.removeEventListener("click", function(){});
          });
          message.addEventListener("click", function(){
            message.style.visibility = "hidden";
            message.innerHTML = "";
            setTimeout(function(){
              score.innerHTML = "0";
              nottouched = true;
              answered = 0;
              newquestion();
            }, 10);
            message.removeEventListener("click", function(){});
            message.removeEventListener("mouseout", function(){});
            });
        }, 1000);
        cheers.play();
      }else if(parseInt(score.textContent) > 5){
        setTimeout(function(){
          let message = document.getElementById("message");
          message.style.visibility = "visible";
          message.innerHTML = `${score.textContent}/10<br/> Keep the flame burning<br>tap to retry`;
          message.addEventListener("mouseout", function(){
          message.style.visibility = "hidden";
          message.innerHTML = "";
          setTimeout(function() {
            score.innerHTML = "0";
            answered = 0;
            nottouched = true;
            newquestion();
          }, 10);
            message.removeEventListener("mouseout", function(){});
            message.removeEventListener("click", function(){});
          });
          message.addEventListener("click", function(){
            message.style.visibility = "hidden";
            message.innerHTML = "";
            setTimeout(function(){
              score.innerHTML = "0";
              answered = 0;
              nottouched = true;
              newquestion();
            }, 10);
              message.removeEventListener("click", function(){});
              message.removeEventListener("mouseout", function(){});
            });
        }, 1000);
      }else{
       setTimeout(function(){
          let message = document.getElementById("message");
          message.style.visibility = "visible";
          message.innerHTML = `${score.textContent}/10<br/> Put more effort<br/>tap to retry`;
          message.addEventListener("mouseout", function(){
          message.style.visibility = "hidden";
          message.innerHTML = "";
          setTimeout(function() {
            score.innerHTML = "0";
            answered = 0;
            nottouched = true;
            newquestion();
          }, 10);
            message.removeEventListener("mouseout", function(){});
            message.removeEventListener("click", function(){});
          });
          message.addEventListener("click", function(){
            message.style.visibility = "hidden";
            message.innerHTML = "";
            setTimeout(function(){
              score.innerHTML = "0";
              answered = 0;
              nottouched = true;
              newquestion();}, 10);
              message.removeEventListener("click", function(){});
              message.removeEventListener("mouseout", function(){});
            });
        }, 2000);
      }
    }else{
      unanswered = false;
      if(crt != null && crt != undefined && crt == value){
        score.innerHTML = `${parseInt(score.textContent) + 2}`;
        correct.play();
        answered++;
        setTimeout(function(){newquestion();}, 1500);
      }else{
        wrong.play();
        answered++;
        setTimeout(function(){newquestion();}, 1500);
      }
    }
  }
}
function clear(){
  let colors = document.getElementById("options");
  colors = colors.children;
  for(let j = 0; j < colors.length; j++){
    colors[j].style.background = "#fef6ff";
  }
}
function hint(){
  let message = document.getElementById("message");
  message.style.visibility = "visible";
  message.innerHTML = "&quot;The road to perfection is practice&quot;";
  message.addEventListener("mouseout", function(){
    message.style.visibility = "hidden";
    message.innerHTML = "";
    message.removeEventListener("mouseout", function(){});
    message.removeEventListener("click", function(){});
    newquestion();
  });
  message.addEventListener("click", function(){
    message.style.visibility = "hidden";
    message.innerHTML = "";
    message.removeEventListener("click", function(){});
    message.removeEventListener("mouseout", function(){});
    newquestion();
  });
}
hint();
