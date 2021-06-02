var sidenav = document.querySelector(".sidenav");
var menu = document.querySelector(".menu");

menu.onclick = function() {

    var wid = sidenav.style.width;

    if(window.innerWidth <= 767) {
        if(wid == "" || wid == "0px") {
            sidenav.style.width ="200px";
        } else {
            sidenav.style.width = "0px";
        }
    } else {
        if(wid == "" || wid == "200px") {
            sidenav.style.width = "0px";
        } else {
            sidenav.style.width = "200px";
        }
    }
}