let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsg = document.getElementById("confirmPasswordErrMsg");

let updateBtnEl = document.getElementById("updateBtn");

newPasswordEl.addEventListener("blur", function () {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
        newPasswordErrMsgEl.style.color = "rgba(219, 134, 16, 1)";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
})

confirmPasswordEl.addEventListener("blur", function () {
    if (confirmPasswordEl.value === "") {
        confirmPasswordErrMsg.textContent = "Required*";
        confirmPasswordErrMsg.style.color = "rgba(219, 134, 16, 1)";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
})

updatePasswordFormEl.addEventListener("submit", function (event) {
    event.preventDefault();
    let newPw = newPasswordEl.value;
    let confirmPw = confirmPasswordEl.value;
    let isValid = true;

    if (newPw === "") {
        newPasswordErrMsgEl.textContent = "Required*";
        newPasswordErrMsgEl.style.color = "rgba(219, 134, 16, 1)";
        isValid = false;
    } else {
        newPasswordErrMsgEl.textContent = "";
    }


    if (confirmPw === "") {
        confirmPasswordErrMsg.textContent = "Required*";
        confirmPasswordErrMsg.style.color = "rgba(219, 134, 16, 1)";
        isValid = false;
    } else {
        confirmPasswordErrMsg.textContent = "";
    }

    if (isValid && newPw !== confirmPw){
        confirmPasswordErrMsg.textContent = "Password must be same";
        confirmPasswordErrMsg.style.color = "rgba(219, 134, 16, 1)";
    }
    if (isValid && newPw === confirmPw){
        alert("Password updated sucessfully!")
        updatePasswordFormEl.reset();
    }
})