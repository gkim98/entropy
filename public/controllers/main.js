const BG = document.getElementById("background");
const TIME = document.getElementById("time");
const WEEKDAY = document.getElementById("weekday");
const PLANT = document.getElementById("plant");

var increment = 30;


var health = 60;
setHealth(60);
var blink = true;

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];

$(".goodButton").on("click", function() {
    $(this).parent().parent().fadeOut();
    startHealthUp();
});

$(".badButton").on("click", function() {
    $(this).parent().parent().fadeOut();
    startHealthDown();
});

// Hide scrollbars and disable scrolling
$("body").css("overflow", "hidden");

function updateFace(newHealth) {
  if (newHealth<40) {
    PLANT.src = "/images/plant/sad.png";
  } else if(newHealth>60) {
    PLANT.src = "/images/plant/happy.png";
  } else {
    PLANT.src = "/images/plant/neutral.png";
  }

}

function setHealth(health) {
  BG.style.filter = "saturate(" + (health) + "%)";
}

function healthUp() {
  if(health >= original + increment) {
    clearInterval(myVar);
  } else {
    health += 0.2;
    setHealth(health)
  }

  console.log(health);
}

var original;
var myVar;

function startHealthUp() {
  original = health;
  updateFace(health+increment);
  myVar = setInterval(healthUp, 1);
}

function healthDown() {
  if(health <= original - increment) {
    clearInterval(myVar);
  } else {
    health -= 0.2;
    setHealth(health)
  }

  console.log(health);
}

function startHealthDown() {
  original = health;
  updateFace(health-increment);
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
