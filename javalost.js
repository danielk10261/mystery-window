var resbutton;
var urlParams = new URLSearchParams(window.location.search);
var allcoins = urlParams.get("coins");
resbut();
resbutton.onclick = nextpage;

//כפתור שמוביל לדף הריסטארט
function resbut() {
    var divbutton = document.getElementById("resbut");
    resbutton = document.createElement("input")
    resbutton.type = "button";
    divbutton.appendChild(resbutton);
    resbutton.setAttribute("class", "resbutton");
}
// מעבר לעמוד הבא (לתקן את זה דחוף
function nextpage() {
    window.location.href = "index.html?coins=" + allcoins;
}

