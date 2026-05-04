var chosendoor;
var inputdoor;
var divcoins2 = document.getElementById("divcoins2");
divcoins2.setAttribute("class", "divcoins2");
var urlParams = new URLSearchParams(window.location.search);
var allcoins = urlParams.get("coins");
divcoins2.innerHTML = allcoins;
var arrdoors = [1, 2, 3, 4];
choosedoor();
chosendoor = parseInt(inputdoor.value);
var baddoor = Math.floor(Math.random() * 4) + 1;

// כפתור השמירה, כפתור בחירת הדלת
function choosedoor() {
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
        window.location.href = "youlost.html?coins="+allcoins;
}
// לשמור את הדלת שהמשתמש בחר
function savedoor() {
    chosendoor = inputdoor.value;
    checkdoor();
}
// לבדוק האם הדלת שהמשתמש בחר נכונה או לא
function checkdoor() {
    if (baddoor == chosendoor) {
        nextpage();
    }
    else {
        var multiply = Math.random() + 1;
        allcoins = allcoins * multiply;
        parseInt(allcoins);
        divcoins2.innerHTML = allcoins;
    }
}