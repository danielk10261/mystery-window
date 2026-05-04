
var coins;
var divcoins = document.getElementById("divcoins");
divcoins.setAttribute("class", "divcoins");
var body = document.getElementById("firstpage");
var betamount;
var flag = true;
localStorage.setItem("allcoins", coins);


if (body != null) {
    startcoins();
    startbutton1();
    betbutton1();
}
else {
    divcoins.innerHTML = coins;
}
// מתחילה את המשחק עם 500
function startcoins() {
    coins = 500;
    divcoins.innerHTML = coins;
}

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
    if (betinput == "") {
        alert("Please enter a bet amount");
        flag = false;
    }
        
    if (betamount > coins) {
        alert("bet is too high");
        flag = false;
    }
    else if (betamount <= coins) {
        coins = coins - betamount;
        flag = true;
    }
}
// מעבירה לעמוד הבא
function nextpage1() {
    window.location.href = "level1game.html?coins="+coins;
}
//כפתור תחילת המשחק
function startgame() {
    minusmoney();
    if (flag == true)
        nextpage1();
}


