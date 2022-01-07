var sidebar = document.getElementById("sidebar");
var faBars = document.getElementById("faBars");
var faTimes = document.getElementById("faTimes");
var closeMenu = document.getElementById("faTimesMenu");
var container = document.getElementById("container");
var menuOpt = document.getElementById("menuOpt");
var coverLayer = document.getElementById("coverLayer");
var arrowBack = document.getElementById("arrowBack");
var popNewsWindow = document.getElementById("popNewsWindow");
var popMusicWindow = document.getElementById("popMusicWindow");
var popVideosWindow = document.getElementById("popVideosWindow");
var popReviewsWindow = document.getElementById("popReviewsWindow");
var popReactionsWindow = document.getElementById("popReactionsWindow");
var popVersusWindow = document.getElementById("popVersusWindow");
var popProfileWindow = document.getElementById("popProfileWindow");
var popArticlesWindow = document.getElementById("popArticlesWindow");
var popPodcastWindow = document.getElementById("popPodcastWindow");
var popStoreWindow = document.getElementById("popStoreWindow");

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
function showNewsOpt(){
    popNewsWindow.style.top = "10%";
}
function closeNewsOpt(){
    popNewsWindow.style.top = "-100%";
}

function showMusicOpt(){
    popMusicWindow.style.top = "10%";
}
function closeMusicOpt(){
    popMusicWindow.style.top = "-100%";
}

function showVideosOpt(){
    popVideosWindow.style.top = "10%";
}
function closeVideosOpt(){
    popVideosWindow.style.top = "-100%";
}

function showReviewsOpt(){
    popReviewsWindow.style.top = "10%";
}
function closeReviewsOpt(){
    popReviewsWindow.style.top = "-100%";
}

function showReactionsOpt(){
    popReactionsWindow.style.top = "10%";
}
function closeReactionsOpt(){
    popReactionsWindow.style.top = "-100%";
}

function showVersusOpt(){
    popVersusWindow.style.top = "10%";
}
function closeVersusOpt(){
    popVersusWindow.style.top = "-100%";
}

function showProfileOpt(){
    popProfileWindow.style.top = "10%";
}
function closeProfileOpt(){
    popProfileWindow.style.top = "-100%";
}

function showArticlesOpt(){
    popArticlesWindow.style.top = "10%";
}
function closeArticlesOpt(){
    popArticlesWindow.style.top = "-100%";
}

function showPodcastOpt(){
    popPodcastWindow.style.top = "10%";
}
function closePodcastOpt(){
    popPodcastWindow.style.top = "-100%";
}

function showStoreOpt(){
    popStoreWindow.style.top = "10%";
}
function closeStoreOpt(){
    popStoreWindow.style.top = "-100%";
}