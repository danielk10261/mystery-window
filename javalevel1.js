var chosendoor;
var inputdoor;
var baddoor;
var divcoins2 = document.getElementById("divcoins2");

divcoins2.setAttribute("class", "divcoins2");
var urlParams = new URLSearchParams(window.location.search);
var allcoins = parseInt(urlParams.get("coins"));
var bet = parseInt(urlParams.get("bet"));
divcoins2.innerHTML = allcoins;
var arrdoors = [1, 2, 3, 4];
choosedoor();
chosendoor = parseInt(inputdoor.value);
var beforecoins = allcoins;

// כפתור השמירה, כפתור בחירת הדלת
function choosedoor() {
    baddoor = Math.floor(Math.random() * 4) + 1;
    inputdoor = document.createElement("input");
    var divdoor = document.getElementById("divdoor");
    inputdoor.type = "number";
    divdoor.appendChild(inputdoor);
    inputdoor.setAttribute("class", "choosedoor");
    var divconfirm = document.getElementById("divconfirm");
    var confirm = document.createElement("button");
    divconfirm.appendChild(confirm);
    confirm.innerHTML = "Confirm";
    confirm.setAttribute("onclick", "savedoor()");
    confirm.setAttribute("class", "confirmbutton");
}
// פונקציה שמעבירה לדף שמודיע על ההפסד
function nextpage() {
    window.location.href = "youlost.html?coins=" + beforecoins;
}
// לשמור את הדלת שהמשתמש בחר
function savedoor() {
    chosendoor = inputdoor.value;
    if (chosendoor < 1 || chosendoor > 4) {
        alert("תבחר מספר דלת בין 1 ל 4");
    }
    else {
        checkdoor();
    }
}
// לבדוק האם הדלת שהמשתמש בחר נכונה או לא
function checkdoor() {
    if (baddoor == chosendoor) {
        nextpage();
    }
    else {
        var multiply = Math.random() * 0.44 + 1.01;
        var prize = multiply * bet;
        allcoins = Math.floor(allcoins + prize);
        parseInt(allcoins);
        divcoins2.innerHTML = allcoins;

        var choice = confirm("ניצחת, האם תרצה לקחת את הכסף ולפרוש?");
        if (choice == true) {
            retire();
        }
        else {
            choosedoor();
        }
    }
}
// המשתמש בוחר אם לפרוש ולקחת את הכסף או לא
function retire() {
    window.location.href = "homepage.html?coins=" + allcoins;
}
   
