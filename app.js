var sidebar = document.getElementById("sidebar");
var faBars = document.getElementById("faBars");
var faTimes = document.getElementById("faTimes");
var closeMenu = document.getElementById("faTimesMenu");
var container = document.getElementById("container");
var menuOpt = document.getElementById("menuOpt");

function showMenu(){
sidebar.style.display = "block";
//sidebar.style.left = "74.5%";
faBars.style.display = "none";
closeMenu.style.display = "block";
menuOpt.style.top = "0%";

}
function hideMenu(){
sidebar.style.left = "100%";
faBars.style.display = "block";
container.style.left = "74.5%";
closeMenu.style.display = "none";
container.style.top = "0%";
menuOpt.style.top = "-100%";
}