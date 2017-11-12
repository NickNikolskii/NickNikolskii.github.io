var Nodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < Nodelist.length; i++) {
    var s = document.createElement("S");
    var txt = document.createTextNode("\u00D7");
    s.className = "close";
    s.appendChild(txt);
    Nodelist[i].appendChild(s);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
  }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("INPUT").value; 
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("UL").appendChild(li);    
    document.getElementById("INPUT").value = "";
    var s = document.createElement("S");
    var txt = document.createTextNode("\u00D7");
    s.className = "close";
    s.appendChild(txt);
    li.appendChild(s);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}