let mobilenumber = document.getElementById("mobile-number");
let password = document.getElementById("password");
let passwordError = document.getElementById("password-err");
let mobileError = document.getElementById("mobile-err");
let email = document.getElementById("email");

password.addEventListener("keyup", function (event) {
  console.log(event.target.value.length);
  passwordError.style.opacity = "100";
  passwordError.innerHTML = "وارد کردن رمز عبور الزامی است!";
  if (event.target.value.length < 8) {
    passwordError.style.color = "red";
    passwordError.innerHTML = "رمز عبور باید حداقل 8 کاراکتر باشد";
  } else {
    // passwordError.style.color = 'green';
    // passwordError.innerHTML = 'رمز عبور به درستی وارد شد';
    passwordError.style.opacity = "0";
  }
});
mobilenumber.addEventListener("keyup", function (event) {
  console.log(event.target.value);
  mobileError.style.opacity = "100";
  if (event.target.value.length == 0) {
    mobileError.style.color = "red";
    mobileError.innerHTML = "وارد کردن شماره همراه الزامی است!";
  } else if (!/^\d+$/.test(event.target.value)) {
    mobileError.innerHTML = " شماره همراه فقط باید شامل اعداد باشد";
  } else if (event.target.value.length < 11) {
    mobileError.style.color = "red";
    mobileError.innerHTML = " شماره همراه باید  11 رقم باشد";
  } else {
    // passwordError.style.color = 'green';
    // passwordError.innerHTML = 'رمز عبور به درستی وارد شد';
    mobileError.style.opacity = "0";
  }
});
