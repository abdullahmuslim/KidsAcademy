var played = false;
var playing = false;

let twinkle = new Audio("twinkle.mp3");
let name = new Audio("name.mp3");
let nums = new Audio("counting.mp3");
let wake = new Audio("wakeup.mp3");
let abc = new Audio("abc.mp3");
let color = new Audio("color.mp3");
let body = new Audio("bodypart.mp3");

Player = function(currentplay, currentloop, song){
  let first = document.getElementById("main");
  let wrapper = document.getElementById("wrapper");
  let player = document.getElementById("player");
  let play = document.getElementById(`${currentplay}`);
  let loop = document.getElementById(`${currentloop}`);
  this.play = function(){
    if(song.playing != true && playing == false){
      song.play();
      song.playing = true;
      playing = true;
      play.src = "pause.png";
      song.addEventListener("ended", function(){
        play.src = "resume.png";
        song.playing = false;
        playing = false;
        if(song.loop){
          song.play();
          song.playing = true;
          playing = true;
          play.src = "pause.png";
        }
      })
    }else if(song.playing != true && playing == true){
      stopAll();
      song.play();
      song.playing = true;
      playing = true;
      play.src = "pause.png";
    }
    else{
      song.pause();
      song.playing = false;
      playing = false;
      play.src = "resume.png";
    }
  }
  this.reload = function(){
    if(playing){
      play.src = "resume.png";
      song.playing = false;
      playing = false;
      song.load();
    }
  }
  this.loop = function(){
    if(song.loop == true){
      song.loop = false;
      loop.style.background = "#ceb3ff";
    }else{
      song.loop = true;
      loop.style.background = "#786995"
    }
  }
}
function stopAll(){
  let songlist = [twinkle,name,nums,wake,abc,color,body];
  let playlistid = ["twink","name","nums","wake","abc","color","body"];
  for (song of songlist){
    song.pause();
  }
  for (id of playlistid){
    play = document.getElementById(id);
    play.src = "resume.png";
  }
}
let playtwink = new Player("twink","twink2", twinkle);
let playname = new Player("name","name2", name);
let playnums = new Player("nums", "nums2", nums);
let playwake = new Player("wake", "wake2", wake);
let playabc = new Player("abc", "abc2", abc);
let playcolor = new Player("color", "color2", color);
let playbody = new Player("body", "body2", body);

//update lock values
if(localStorage.getItem("unlockedContents")){
  let value = JSON.parse(localStorage.getItem("unlockedContents"))
  if(value < 3){
    let values = 3;
    values = JSON.stringify(values);
    localStorage.setItem("unlockedContents", values);
  }
}else{
  localStorage.setItem("unlockedContents", "2");
}