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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const DAILY_GOAL_1 = document.getElementById("dailyGoal1");
const DAILY_GOAL_2 = document.getElementById("dailyGoal2");
const CHALLENGE = document.getElementById("challenge");

var rand1 = getRandomInt(dailyQuestions.length-1);
var rand2 = getRandomInt(dailyQuestions.length-1);

while( rand1 == rand2 ) {
  var rand2 = getRandomInt(dailyQuestions.length-1);
}

DAILY_GOAL_1.innerHTML = dailyQuestions[rand1];
DAILY_GOAL_2.innerHTML = dailyQuestions[rand2];
CHALLENGE.innerHTML = challenges[getRandomInt(challenges.length-1)]




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

var name;

updateTime();
setInterval(updateTime, 1000);

var name;
const NAME_FIELD = document.getElementById("nameField")

NAME_FIELD.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        name = document.getElementById("nameField").value;
        document.getElementById("questionBox2").style.visibility = "hidden";
        document.getElementById("name").style.visibility = "visible"
        document.getElementById("name").innerHTML = name;
    }
});
