var currentmusic;
var coins;
var divcoins = document.getElementById("divcoins");
divcoins.setAttribute("class", "divcoins");
var body = document.getElementById("firstpage");
var betamount;
var flag = true;
var urlParams = new URLSearchParams(window.location.search);
stopbtn();

if (body != null) {
    startcoins();
    startbutton1();
    betbutton1();
    instructionsbutton();
    musicbuttons();
}
else {
    divcoins.innerHTML = coins;
}
// מתחילה את המשחק עם 500
function startcoins() {
    var coins2 = urlParams.get("coins");
    if (coins2 == null || coins2 == "undefined") {
        coins = 500;
        divcoins.innerHTML = coins;
    }
    else {
        coins = parseInt(coins2);
        divcoins.innerHTML = coins;
    }
}
// כפתור שמתחיל את המשחק
function startbutton1() {
    var div1 = document.getElementById("div1");
    var startbutton = document.createElement("input");
    startbutton.value = "";
    startbutton.type = "button";
    startbutton.setAttribute("class","button1");
    div1.appendChild(startbutton);
    startbutton.setAttribute("onclick", "startgame()");
    startbutton.onclick = startgame;
}

// כפתור שנותן למשתמש לבחור את כמות ההימור שלו
function betbutton1() {
    var div2 = document.getElementById("divbet");
    var betinput = document.createElement("input");
    betinput.id = "betinput";
    betinput.type = "number";
    betinput.setAttribute("class","betinput");
    div2.appendChild(betinput);
   
}
// פונקציה שמחסירה את הכסף שהמשתמש הפסיד
function minusmoney() {
    betamount = parseInt(document.getElementById("betinput").value);
    if (betamount <= 0 || betamount != betamount) {
        alert("Please enter a bet amount");
        flag = false;
    }
    else if (betamount > coins) {
        alert("bet is too high");
        flag = false;
    }
    else {
        coins = coins - betamount;
        flag = true;
    }
}
// מעבירה לעמוד הבא
function nextpage1() {
    window.location.href = "level1game.html?coins=" + coins + "&bet=" + betamount;
}
//כפתור תחילת המשחק
function startgame() {
    minusmoney();
    if (flag == true)
        nextpage1();
}
// כפתור הוראות
function instructionsbutton() {
    var divbutton3= document.getElementById("instructions");
    var button3 = document.createElement("input");
    button3.type = "button";
    button3.setAttribute("class", "button3");
    divbutton3.appendChild(button3);
    button3.onclick = nextpage2;
}
// פונקציה שמעבירה לדף ההוראות
function nextpage2() {
    window.location.href = "instructions.html?coins=" + coins;
}
// פונקציה שיוצרת מוזיקה
function musicbuttons() {
    var musicdiv = document.getElementById("musicdiv");
    // שיר 1
    var mbtn1 = document.createElement("input")
    mbtn1.type = "button";
    mbtn1.setAttribute("class", "musicbtn1");
    musicdiv.appendChild(mbtn1);
    mbtn1.onclick = function () {
        playmusic("zara.mp3");
    }
    // שיר 2
    var mbtn2 = document.createElement("input");
    mbtn2.type = "button";
    mbtn2.setAttribute("class", "musicbtn2");
    musicdiv.appendChild(mbtn2);
    mbtn2.onclick = function () {
        playmusic("onot.mp3");
    }
    // שיר 3
    var mbtn3 = document.createElement("input");
    mbtn3.type = "button";
    mbtn3.setAttribute("class", "musicbtn3");
    musicdiv.appendChild(mbtn3);
    mbtn3.onclick = function () {
        playmusic("zohar.mp3");
    }
}
// פונקציה המנגנת את המוזיקה
function playmusic(song) {
    currentmusic = new Audio(song);
    currentmusic.loop = true;
    currentmusic.play();
}
// כפתור שמפסיק את המוזיקה
function stopbtn() {
    var stopbtn = document.createElement("input");
    stopbtn.type = "button";
    stopbtn.value = "stop the music";
    stopbtn.setAttribute("class", "stopbtn");
    musicdiv.appendChild(stopbtn);
    stopbtn.onclick = stopmusic;
}
// פונקציה שמפסיקה את המוזיקה
function stopmusic() {
    if (currentmusic) {
        currentmusic.pause();
    }
}


