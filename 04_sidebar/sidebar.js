var sidenav = document.querySelector(".sidenav");
var menuBtn = document.querySelector('.menuBtn');

menuBtn.addEventListener('click', onsidenav);

function onsidenav() {
    // 인라인으로 속성이 지정되지 않아 값이 없다
    //console.log(sidenav.style.width);

    var btn = sidenav.style.width;
    // console.log(window.innerWidth); //브라우저의 안쪽 넓이

    if(window.innerWidth <= 767) { //모바일 환경
        if(btn == "" || btn == "0px") {
            sidenav.style.width = "200px";
        } else {
            sidenav.style.width = "0px";
        }
    } else { //웹환경
        if(btn == "" || btn == "200px") {
            sidenav.style.width = "0px";
        } else {
            sidenav.style.width = "200px";
        }
    }

    
}