let linked = true;

//set the initial value of the toggling buttons and call toggleButtons(f) to toggle buttons according to values

function setButtonsValue(){
  //reset storage
  /*let newValues = [false, false];
  newValues = JSON.stringify(newValues);
  localStorage.setItem("values", newValues)*/
  if(localStorage.getItem("values")){
    let values = JSON.parse(localStorage.getItem("values"));
    let theme = document.getElementById("theme");
    let lock = document.getElementById("lock");
    theme.value = values[0];
    lock.value = values[1];
    toggleButtons(values);
    switchTheme(values[0]);
  }else{
    let values = [false, false];
    values = JSON.stringify(values);
    localStorage.setItem("values", values);
  }
}

function toggleButtons(values){
  if(values[1]){
    setLocksValues();//locks unavailable lessons
  }
  let theme = document.getElementById("theme");
  let lock = document.getElementById("lock");
  let themeHole = theme.children[1];
  let themeButton = theme.children[1].children[0];
  let lockHole = lock.children[1];
  let lockButton = lock.children[1].children[0];
  let holes = [themeHole, lockHole];
  let buttons = [themeButton, lockButton];
  for (let i = 0; i < 2; i++){
    if(values[i]){
      buttons[i].style.left = "3vh";
      buttons[i].style.background = "#5929e5";
      holes[i].style.background = "#3202c0";
    }
  }
}
//opens the contents of the menu

function menu(){
  toggleAnchors();
  let trans = document.getElementById("trans");
  let menuContent = document.getElementById("menuContent");
  menuContent.style.left = "0";
  menuContent.style.transition = "left 0.2s ease-out";
  trans.style.left = "0";
}

//closes the contents of the menu

function canc(){
  setTimeout(function() {toggleAnchors()}, 1000);
  let trans = document.getElementById("trans");
  let menuContent = document.getElementById("menuContent");
  menuContent.style.left = "-71vw";
  menuContent.style.transition = "left 0.2s ease-in";
  trans.style.left = "-101vw";
  cancHelp();
  cancAbout();
  cancContact();
}
function help(){
  let help = document.getElementById("help");
  help.style.left = "0";
  help.style.transition = "left 0.3s ease-in";
}
function cancHelp(){
  let help = document.getElementById("help");
  help.style.left = "-71vw";
}
function about(){
  let about = document.getElementById("about");
  about.style.left = "0";
  about.style.transition = "left 0.3s ease-in";
}
function cancAbout(){
  let about = document.getElementById("about");
  about.style.left = "-71vw";
}
function contact(){
  let contact = document.getElementById("contact");
  contact.style.left = "0";
  contact.style.transition = "left 0.3s ease-in";
}
function cancContact(){
  let contact = document.getElementById("contact");
  contact.style.left = "-71vw";
}
function autoContact(){
  cancHelp();   
  contact();
}
// called upon clicking togglers button to change direction

function toggle(id){
  let element = document.getElementById(id);
  let hole = element.children[1];
  let button = element.children[1].children[0];
  let pos = window.getComputedStyle(element.children[1].children[0]).left;
  let value = (pos[0] == "-") ? "minus":"plus";
  if(value == "minus"){
    button.style.left = "3vh";
    button.style.background = "#5929e5";
    hole.style.background = "#3202c0"
    element.value = "true";
    let target = (id == "theme") ? 0 : 1;
    let values = localStorage.getItem("values");
    values = JSON.parse(values);
    values = (target == 0) ? [true, values[1]] : [values[0], true];
    localStorage.setItem("values", JSON.stringify(values));
    if(id == "theme"){
      switchTheme(values[0]);
    }else{
      let unlockedContents = JSON.parse(localStorage.getItem("unlockedContents"));
      toggleLocks(unlockedContents);
    }
  }else{
    button.style.left = "-0.1vh";
    button.style.background = "#ccc";
    hole.style.background = "#777";
    element.value = "false";
    let target = (id == "theme") ? 0 : 1;
    let values = localStorage.getItem("values");
    values = JSON.parse(values);
    values = (target == 0) ? [false, values[1]] : [values[0], false];
    localStorage.setItem("values", JSON.stringify(values));
    if(id == "theme"){
      switchTheme(values[0]);
    }else{
      toggleLocks(8); //unlock all links
    }
  }
}
function switchTheme(on){
  if(on){
    if (document.body.name == ""){}
    document.body.style.color = "#fff";
    let elements = document.getElementsByClassName("elements");
    for(let i = 0; i < elements.length; i++){
      elements[i].style.filter = "invert(100%)";
      elements[i].style.color = "#000";
    }
    document.getElementsByTagName("nav")[0].style.background = "#000";
    document.getElementsByTagName("nav")[0].style.borderBottom = "2px solid #000";
    document.getElementById("menu").style.filter = "invert(100%)";
    document.getElementById("menuContent").style.filter = "";
    document.getElementsByClassName("hole")[0].style.filter = "";
    document.getElementsByClassName("hole")[1].style.filter = "";
    for (let i = 0; i < document.anchors.length; i++){
      document.anchors[i].style.color = "#fff";
      document.anchors[i].style.background = "#000";
    }
    for(let i = 0; i < document.images.length; i++){
      if(document.images[i].name == "learn" || document.images[i].name == "quiz" || document.images[i].name == "colors"){
        document.images[i].style.filter = "invert(100%)";
      }
      if(document.images[i].name == "navImage"){
        document.images[i].style.borderBottom = "2px solid #b5e529";
      }
    }
  }else{
    document.body.style.color = "#000";
    let elements = document.getElementsByClassName("elements");
    for(let i = 0; i < elements.length; i++){
      elements[i].style.filter = "";
      elements[i].style.color = "#000";
    }
    document.getElementsByTagName("nav")[0].style.background = "#fff";
    document.getElementsByTagName("nav")[0].style.borderBottom = "2px solid #fff";
    document.getElementById("menu").style.filter = "";
    document.getElementById("menuContent").style.filter = "invert(100%)";
    document.getElementsByClassName("hole")[0].style.filter = "invert(100%)";
    document.getElementsByClassName("hole")[1].style.filter = "invert(100%)";
    for (let i = 0; i < document.anchors.length; i++){
      document.anchors[i].style.color = "#000";
      document.anchors[i].style.background = "#fef6ff";
    }
    for(let i = 0; i < document.images.length; i++){
      if(document.images[i].name == "learn" || document.images[i].name == "quiz" || document.images[i].name == "colors"){
        document.images[i].style.filter = "";
      }
      else if(document.images[i].name == "navImage"){
        document.images[i].style.borderBottom = "2px solid #5929e5";
      }
    }
  }
}
function toggleAnchors(){
  let anchors = document.getElementsByTagName("a");
  if(linked){
    for (let i = 0; i < anchors.length; i++){
      if (anchors[i].name != "aLink"){
        anchors[i].style.pointerEvents = "none";
      }
    }
    linked = false;
  }else{
    for (let i = 0; i < anchors.length; i++){
      anchors[i].style.pointerEvents = "";
      linked = true;
    }
  }
}
function setLocksValues(){
  //reset localStorage
  /*let value = 2;
  value = JSON.stringify(value);
  localStorage.setItem("unlockedContents", value);*/
  if(localStorage.getItem("unlockedContents")){
    let unlockedContents = JSON.parse(localStorage.getItem("unlockedContents"));
    toggleLocks(unlockedContents);
  }else{
    let values = 2;
    values = JSON.stringify(values);
    localStorage.setItem("unlockedContents", values);
    setLocksValues();
  }
}
function toggleLocks(amount){
  let locks = document.getElementsByClassName("lockItems");
  for(let i = 0; i < locks.length; i++){
    if(!locks[i].value){
      locks[i].value = locks[i].href;
    }
    locks[i].href = "javascript: alert('unlock all previous or toggle the lock buttom from menu')";
    locks[i].title = "locked";
  }
  for(let i = 1; i <= amount; i++){
    let unlock = document.getElementsByClassName("items"+ i);
    for(let j = 0; j < unlock.length; j++){
      //unlock[j].style.pointerEvents = "";
      unlock[j].href = unlock[j].value;
      unlock[j].title = "";
    }
  }
}
setButtonsValue();