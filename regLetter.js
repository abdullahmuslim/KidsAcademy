let questions = ["CAT", "DOG", "DUCK", "LION", "ZEBRA"];
let animals = ["cat.png", "dog.png", "duck.png", "lion.png", "zebra.png"];
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let cheers = new Audio("clapping.mp3");
let correct = new Audio("correct.mp3");
let wrong = new Audio("wrong.mp3");

let image = document.getElementById("image");
let letterhdr = document.getElementById("bottoms");
letterhdr = letterhdr.children;

let crtLetter;
let oldTime;


function newquestion(){
  letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  if(questions.length > 1){
    let rand = Math.random() * (questions.length-1);
    rand = Math.round(rand);
    if(rand < 0){
      rand = 0;
    }
    let rand2 = Math.random() * (questions[rand].length-1);
    rand2 = Math.round(rand2);
    if(rand2 < 0){
      rand2 = 0;
    }
    let question = document.getElementById("question");
    question = question.children;
    clear();
    for(let j = 0; j < questions[rand].length; j++){
      question[j].innerHTML = questions[rand][j];
    }
    question[rand2].id = "hidden";
    crtLetter = question[rand2].textContent;
    let options = [question[rand2].textContent];
    letters.splice(letters.indexOf(options[0]), 1);
    for(j = 0; j < 4; j++){
      let localrand = Math.random() * (letters.length -1);
      localrand = Math.round(localrand);
      if (localrand < 0){
        localrand = 0;
      }
      options[j+1] = letters[localrand];
      letters.splice(localrand, 1);
    }
    let done = false;
    counter = 0;
    while (done != true){
      if(options.length > 0){
        let localrand = Math.random() * (options.length-1);
        localrand = Math.round(localrand);
        if(localrand < 0){
          localrand = 0;
        }
        letterhdr[counter].innerHTML = options[localrand];
        letterhdr[counter].value = options[localrand];
        counter++;
        options.splice(localrand, 1);
      }else{
        done = true;
      }
    }
    image.style.transition = "";
    image.style.width = "0";
    image.src = animals[rand];
    questions.splice(rand, 1);
    animals.splice(rand, 1);
    oldTime = new Date().getSeconds();
  }else{
    questions = ["CAT", "DOG", "DUCK", "LION", "ZEBRA"];
    animals = ["cat.png", "dog.png", "duck.png", "lion.png", "zebra.png"];
    newquestion();
  }
}
function clear(){
  let question = document.getElementById("question");
  question = question.children;
  for(let j = 0; j < question.length; j++){
    question[j].innerHTML = "";
    question[j].id = "";
    
  }
}
function check(letter){
  let health = document.getElementById("health");
  let score = document.getElementById("score");
  if(parseInt(health.textContent) <= 0){
    if(parseInt(score.textContent) > 20){
      cheers.play();
    }
    let endScore = document.getElementById("endScore");
    endScore.style.display = "flex";
    endScore.innerHTML = `finalscore<br/>${score.textContent}`;
  }else{
    if (letter == crtLetter){
      correct.play();
      let oldScore = parseInt(score.textContent);
      let newTime = new Date().getSeconds();
      let atnscore = 3;
      console.log(oldTime, newTime);
      if(newTime - oldTime < 5){
        atnscore = 6;
      }
      score.innerHTML = `${oldScore + atnscore}`;
      image.style.width = "40vw";
      image.style.transition = "width 0.5s ease-in";
      setTimeout(newquestion, 5000);
    }else{
      wrong.play();
      let oldHealth = parseInt(health.textContent);
      health.innerHTML = `${oldHealth - 2}`;
      newquestion();
    }
  }
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
