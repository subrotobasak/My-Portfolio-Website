// Preloader JS Start
window.onload = function () {
    const preloaderArea = document.getElementById("preloader-area");
    preloaderArea.className = "page-loaded";

    setTimeout(function () {
        preloaderArea.style.display = "none"
    }, 500);
}

// Preloader JS End

// Nav Menu JS Start
function menuFunction() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("show-menu");
}

// Nav Menu JS End

// Contat JS Start
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const nameFild = document.getElementById("contactName");
    const emailFild = document.getElementById("contactEmail");
    const phoneFild = document.getElementById("contactPhone");
    const subjectFild = document.getElementById("contactSubject");
    const messageFild = document.getElementById("contactMessage");
    const errorField = document.getElementById("error-text");
    const formField = document.getElementById("form-data");

    const nameValue = nameFild.value;
    const emailValue = emailFild.value;
    const phoneValue = phoneFild.value;
    const subjectValue = subjectFild.value;
    const messageValue = messageFild.value;

    const templateParams = {
        nameValue: nameValue,
        emailValue: emailValue,
        phoneValue: phoneValue,
        subjectValue: subjectValue,
        messageValue: messageValue,

    };

    if (nameValue && emailValue && phoneValue && subjectValue && messageValue) {
        formField.innerHTML = "Form Submitted Successfully";
        errorField.innerHTML = "";
        nameFild.value = "";
        emailFild.value = "";
        phoneFild.value = "";
        subjectFild.value = "";
        messageFild.value = "";


        emailjs.send("my_portfolio", "template_jc03pb8", templateParams, "GsReDqNw7HZqhJS2Q");
    }

    else {
        errorField.innerHTML = "Please fill all information";
        formField.innerHTML = "";
        
    }

});