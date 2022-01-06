var sidebar = document.getElementById("sidebar");
var faBars = document.getElementById("faBars");
var faTimes = document.getElementById("faTimes");
var closeMenu = document.getElementById("faTimesMenu");
var container = document.getElementById("container");
var menuOpt = document.getElementById("menuOpt");
var coverLayer = document.getElementById("coverLayer");
var arrowBack = document.getElementById("arrowBack");
var popWindow = document.getElementById("popWindow");
var footerTray = document.getElementById("footerTray");

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
function showOpt(){
    popWindow.style.top = "10%";
    footerTray.style.top = "68.5%";
}
function closeOpt(){
    popWindow.style.top = "-100%";
    footerTray.style.top = "-100%";
}