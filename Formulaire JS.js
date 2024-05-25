var fields = document.querySelectorAll('.textb input');
var btn = document.querySelector('button');

function check() {
    if (fields[0].value != "" && fields[1].value != "") {
        btn.disabled = false;
    }else {
        btn.disabled = true;
    }
}

fields[0].addEventListener("keyup", check);
fields[1].addEventListener("keyup", check);

const eye = document.querySelector('.show-now');
eye.addEventListener('mousedown', function() {
    if(eye.classList[2] == "fa-eye-slash") {
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        fields[1].type = "text";
    }
    // else {
    //     eye.classList.remove("fa-eye");
    //     eye.classList.add("fa-eye-slash");
    //     fields[1].type = "password";
    // }
});
eye.addEventListener('mouseup', function() {
    if(eye.classList[2] == "fa-eye") {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        fields[1].type = "password";
    }
});