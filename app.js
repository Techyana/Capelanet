var sidebar = document.getElementById("sidebar");
var faBars = document.getElementById("faBars");
var faTimes = document.getElementById("faTimes");
var closeMenu = document.getElementById("faTimesMenu");
var container = document.getElementById("container");
var menuOpt = document.getElementById("menuOpt");
var coverLayer = document.getElementById("coverLayer");

function showMenu(){
faBars.style.display = "none";
faTimes.style.display = "block"
menuOpt.style.top = "5%"
coverLayer.style.overflow = "hidden"

}
function hideMenu(){
faBars.style.display = "block";
faTimes.style.display = "none"
menuOpt.style.top = "-100%"
coverLayer.style.overflow = "scroll"
}