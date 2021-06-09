// 쿠키 생성, 쿠키확인 함수를 생성
function createCookie(name, value) {
    var date = new Date();
    date.setDate(date.getDate() + 1); 

    var cookie = "";
    cookie += name + "=" + value + ";";
    cookie += "expires=" + date;

    document.cookie = cookie;
}

function getCookie(name) {
    var cookies = document.cookie.split(";");
    for(var i in cookies) {
        if(cookies[i].indexOf(name) != -1) {

            return cookies[i].replace(" ", "").replace(name+"=", "");
        }
    }
}