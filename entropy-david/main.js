const BG = document.getElementById("background");
const TIME = document.getElementById("time");
const WEEKDAY = document.getElementById("weekday");

const HAPPY = document.getElementById("plant-happy");
const SAD = document.getElementById("plant-sad");
const NEUTRAL = document.getElementById("plant-neutral");
HAPPY.style.opacity = 0;
SAD.style.opacity = 0;

var health = 50;
setHealth(50);
var blink = true;

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];


// Hide scrollbars and disable scrolling
$("body").css("overflow", "hidden");

function setHealth(health) {
  BG.style.filter = "saturate(" + (health) + "%)";
}

function healthUp() {
  health += 0.2;
  setHealth(health)

  if(health == original + 50) {
    clearInterval(myVar);

  }
}

var original;

function startHealthUp() {
  original = health;
  NEUTRAL.style.opacity = 0;
  HAPPY.style.opacity = 1;
  myVar = setInterval(healthUp, 1);
}

function healthDown() {
  health -= 0.2;
  setHealth(health)

  if(health == original - 50) {
    clearInterval(myVar);
  }
}

function startHealthDown() {
  original = health;
  NEUTRAL.style.opacity = 0;
  SAD.style.opacity = 1;
  myVar = setInterval(healthDown, 1);
}




function updateTime() {
  var d = new Date();
  var time = hours[d.getHours()] ;

  if(blink) {
    time += ":";
    blink = false;
  } else {
    time += " ";
    blink = true;
  }

  if(d.getMinutes() < 10) {
    time += "0" + d.getMinutes();
  } else {
    time += d.getMinutes();
  }

  if(d.getHours > 12) {
    time += " PM";
  } else {
    time += " AM";
  }

  WEEKDAY.innerHTML = weekday[d.getDay()];

  TIME.innerHTML = time;
}


updateTime();
setInterval(updateTime, 1000);
