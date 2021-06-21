window.addEventListener("DOMContentLoaded", () => {
    let check = document.querySelector(".check"),
        error_text = document.querySelector(".error_text"),
        inputName = document.querySelector(".name"),
        inputSurname = document.querySelector(".surname"),
        inputPassword = document.querySelector(".password"),
        enterBtn = document.querySelector(".enter"),
        circle = document.querySelector(".circle"),
        user = document.querySelector(".user"),
        password = "200713";

    enterBtn.addEventListener("click", () => {
        if (inputName.value != "" && inputSurname.value != "" && inputPassword.value ==
            password) {
            check.classList.add("check_active");
            circle.textContent =
                `${inputName.value.charAt(0)}${inputSurname.value.charAt(0)}`;
            user.textContent = `${inputName.value} ${inputSurname.value}`;
            document.body.style.cssText =
                `z-index: 1 !important; overflow: auto !important`;
        } else {
            error_text.textContent = "Invalid Password or Please fill the inputs";
        }
    });

    let scrollBtn = document.querySelector("#scrollBtn");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    window.addEventListener("scroll", scrollFunction);

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    scrollBtn.addEventListener("click", topFunction);
});