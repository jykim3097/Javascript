window.onload = function() {
    var id = document.registForm.id;
    var idCheck = document.querySelector(".id-check");

    id.onkeyup = function() {
        if(id.value.length < 4) {
            idCheck.innerHTML = "아이디는 4글자 이상입니다.";
        } else {
            idCheck.innerHTML = "";
        }
    }
}