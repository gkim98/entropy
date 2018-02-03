const BG = document.getElementById("background");
const TIME = document.getElementById("time");
const WEEKDAY = document.getElementById("weekday");
const PLANT = document.getElementById("plant");

var increment = 20;

var health = 50;
setHealth(50);
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
    $(this).parent().parent().fadeOut("slow", function () {
        startHealthUp();
        var tempRand = getRandomInt(dailyQuestions.length-1);
        $(this).children(".task").html(dailyQuestions[tempRand]);
        $(this).has("#challenge").children("#challenge").html(challenges[tempRand]);
        $(this).fadeIn();
    });
});

$(".badButton").on("click", function() {
    $(this).parent().parent().fadeOut("slow", function () {
        startHealthDown();
        var tempRand = getRandomInt(dailyQuestions.length-1);
        $(this).children(".task").html(dailyQuestions[tempRand]);
        $(this).has("#challenge").children("#challenge").html(challenges[tempRand]);
        $(this).fadeIn();
    });
});

// Hide scrollbars and disable scrolling
$("body").css("overflow", "hidden");

function updateFace(newHealth) {
  if (newHealth < 50-(2*increment) ) {
    PLANT.src = "/images/plant/sad.png";
  } else if(newHealth>50+(2*increment) ) {
    PLANT.src = "/images/plant/happy.png";
  } else {
    PLANT.src = "/images/plant/neutral.png";
  }

}

function setHealth(health) {
  BG.style.filter = "saturate(" + (health) + "%)";

}

function healthUp() {
  if(health>100) {
    health = 100;
  }

  if(health >= original + increment) {
    clearInterval(myVar);
  } else {
    health += 0.2;
    setHealth(health)
  }

}

var original;
var myVar;

function startHealthUp() {
  original = health;
  updateFace(health+increment);
  myVar = setInterval(healthUp, 1);
}

function healthDown() {
  if(health<0) {
    health = 0;
  }


  if(health <= original - increment) {
    clearInterval(myVar);
  } else {
    health -= 0.2;
    setHealth(health)
  }
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

  if(d.getHours() > 12) {
    time += " PM";
  } else {
    time += " AM";
  }

  WEEKDAY.innerHTML = weekday[d.getDay()];

  TIME.innerHTML = time;
}

updateTime();
setInterval(updateTime, 1000);

var name;

const NAME_FIELD = document.getElementById("nameField")
const NAME = document.getElementById("name")

NAME_FIELD.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        name = document.getElementById("nameField").value;
        document.getElementById("questionBox2").style.visibility = "hidden";
        NAME.style.visibility = "visible"
        NAME.innerHTML = name;

        // database part
        firebase.database().ref('/users/' + user).on('value', function(response) {
            writeUserData(user, name, response.accessories);
        });
    }
});

NAME.addEventListener("dblclick", function(event) {
  document.getElementById("questionBox2").style.visibility = "visible";
  NAME.style.visibility = "hidden"

  NAME_FIELD.focus();
  NAME_FIELD.select();
});


function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

for (i = 0; i < accessories.length; i++) {
  addStyleString("#"+ accessories[i].id +"{width: " + accessories[i].width + "; transform: " + accessories[i].transform + ";}");

}

CHALLENGE_CHECK = document.getElementById("challengeComplete");

CHALLENGE_CHECK.addEventListener("click", function(event) {
    var randInt = getRandomInt(accessories.length);
    var ACCERSORY = document.getElementById(accessories[randInt].id);
    ACCERSORY.style.visibility = "visible"

    firebase.database().ref('/users/' + user).on('value', function(response) {
        writeUserData(user, response.name, response.accessories.push(randInt));
    });



});
