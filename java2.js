var urlParams = new URLSearchParams(window.location.search);
var allcoins = urlParams.get("coins");
button4();

function button4() {
    var div4 = document.getElementById("div4");
    var button4 = document.createElement("input");
    button4.type = "button";
    button4.setAttribute("class", "button4");
    div4.appendChild(button4);
    button4.onclick = back;
}
function back() {
    window.location.href = "homepage.html?coins=" + allcoins;
}
