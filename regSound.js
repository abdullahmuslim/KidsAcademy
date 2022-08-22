function catdf(){
  this.imgsrc = "cat.png";
  this.crtsd = 0;
  this.wrd = "meow";
  this.alternates = [[1, "bark"], [2, "quack"], [3, "bray"], [4, "roar"]];
}

function dogdf(){
  this.imgsrc = "dog.png";
  this.crtsd = 1;
  this.wrd = "bark";
  this.alternates = [[0, "meow"], [2, "quack"], [3, "bray"], [4, "roar"]];
}

function duckdf(){
  this.imgsrc = "duck.png";
  this.crtsd = 2;
  this.wrd = "quack";
  this.alternates = [[0, "meow"], [1, "bark"], [3, "bray"], [4, "roar"]];
}

function liondf(){
  this.imgsrc = "lion.png";
  this.crtsd = 4;
  this.wrd = "roar";
  this.alternates = [[0, "meow"], [1, "bark"], [3, "bray"], [2, "quack"]];
}

function zebradf(){
  this.imgsrc = "zebra.png";
  this.crtsd = 3;
  this.wrd = "bray";
  this.alternates = [["cat", "meow"], ["dog", "bark"], ["lion", "roar"], ["duck", "quack"]];
}

let cat = new catdf();
let dog = new dogdf();
let duck = new duckdf();
let lion = new liondf();
let zebra = new zebradf();

let catsd = new Audio("cat.mp3");
let dogsd = new Audio("dog.mp3");
let ducksd = new Audio("duck.mp3");
let lionsd = new Audio("lion.mp3");
let zebrasd = new Audio("zebra.mp3");
let cheers = new Audio("clapping.mp3");
let correct = new Audio("correct.mp3");
let wrong = new Audio("wrong.mp3");

let animals = [cat, dog, duck, zebra, lion];
let sounds = [catsd, dogsd, ducksd, zebrasd, lionsd];
let wrds = ["meow", "bark", "quack", "bray", "roar"];
let iter = [0, 1, 2, 3, 4];
let crt;
let oldTime;

function newquestion(){
  oldTime = new Date().getSeconds();
  if(animals.length > 1){
    let rand = Math.random() * animals.length-1;
    rand = Math.floor(rand);
    if(rand < 0){
      rand = 0;
    }
    let image = document.getElementById("image");
    let soundhdr = document.getElementById("bottoms");
    soundhdr = soundhdr.children;
    for (let j = 0; j < sounds.length; j++){
      if(iter.length > 0){
        let localrand = Math.random() * (iter.length -1);
        localrand = Math.round(localrand);
        if(localrand < 0){
          localrand = 0;
        }
        let soundhdrchld = soundhdr[j].children;
        soundhdr[j].value =`${iter[localrand]}`;
        soundhdrchld[1].innerHTML = wrds[iter[localrand]];
        iter.splice(localrand, 1);
      }
    }
    iter = [0, 1, 2, 3, 4]
    image.src = animals[rand].imgsrc;
    crt = animals[rand].crtsd;
    animals.splice(rand, 1);
  }else{
    animals = [cat, dog, duck, lion, zebra];
    newquestion();
  }
}

function check(option){
  if (crt != null || crt != undefined){
    if(parseInt(health.textContent) <= 0){
      if(parseInt(score.textContent) > 20){
      cheers.play();
    }
      let endScore = document.getElementById("endScore");
      endScore.style.display = "flex";
      endScore.innerHTML = `finalscore<br/>${score.textContent}`;
    }else{
      if (crt == parseInt(option)){
        correct.play();
        let oldScore = parseInt(score.textContent);
        let newTime = new Date().getSeconds();
        let atnscore = 3;
        if(newTime - oldTime < 5){
          atnscore = 6;
        }
        score.innerHTML = `${oldScore +   atnscore}`;
        setTimeout(newquestion, 3000);
      }else{
        wrong.play();
        let oldHealth = parseInt(health.textContent);
        health.innerHTML = `${oldHealth - 2}`;
        newquestion();
      }
    }
  }
}
function play(index){
  index = parseInt(index);
  sounds[index].play();
}
function restart(){
  let endScore = document.getElementById("endScore");
  let score = document.getElementById("score");
  let health = document.getElementById("health");
  endScore.style.display = "none";
  score.innerHTML = "0";
  health.innerHTML = "20";
}
newquestion();

//update lock values
if(localStorage.getItem("unlockedContents")){
  let value = JSON.parse(localStorage.getItem("unlockedContents"))
  if(value < 6){
    let values = 6;
    values = JSON.stringify(values);
    localStorage.setItem("unlockedContents", values);
  }
}else{
  localStorage.setItem("unlockedContents", "2");
}