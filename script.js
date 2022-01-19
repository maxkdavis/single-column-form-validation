//target the form and the email input element and store in a variable
const form = document.getElementById("form");
const email = document.getElementById("email");

//add the event listener when the form is 'submitted'
form.addEventListener("submit", function (e) {
    e.preventDefault(); //stops the form from actually being submitted

    checkInput();
});

//Create the checkInput function
function checkInput() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setErrorFor(email);
    } else if (!isEmail(emailValue)) {
        setErrorFor(email);
    }
}

//Create setErrorFor() function
function setErrorFor(input) {
    const formControl = input.parentElement;
    const errorMsg = document.querySelector(".error-msg");
    formControl.className = "form-control error";
    errorMsg.className = "error-msg error";
}

//Create a function that checks if an input is a valid email input. Should return true or false
function isEmail(emailValue) {
    return String(emailValue)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
