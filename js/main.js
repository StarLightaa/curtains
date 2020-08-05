$(function(){

});

function toogleAside() {
  var toogle;
  toogle=document.getElementById('asideToggle');
  if (toogle.checked) {
		document.getElementById("myAside").style.display = "none";
    document.getElementById("myCatalog").style.maxWidth = "100%";
    document.getElementById("toggleText").innerText = "Открыть";
    document.getElementById("toogleLabel").style.left = "0";
    document.getElementById("toogleLabel").className += " rotate";
	}
	else {
		document.getElementById("myAside").style.display = "inline-block";
    document.getElementById("myCatalog").style.maxWidth = "835px";
    document.getElementById("toggleText").innerText = "Скрыть";
    document.getElementById("toogleLabel").style.left = "280px";
    document.getElementById("toogleLabel").className = "asideToggle";
	}
}
