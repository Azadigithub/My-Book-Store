let mobilenumber = document.getElementById("mobile-number");
let password = document.getElementById("password");
let passwordError = document.getElementById("password-err");
let repeatpassword = document.getElementById("repeat-password");
let repeatpassworderr = document.getElementById("repeat-password-err");
let mobileError = document.getElementById("mobile-err");
let email = document.getElementById("email");
let emailerr = document.getElementById("email-err");
let login = document.getElementById("login");
let successmessage = document.getElementById("success-message");


login.addEventListener("click", function (event) {
  console.log("ssf");
  event.preventDefault()
  setTimeout(function () {
      successmessage.style.display = "block";
      setTimeout(function () {
        window.location.href = "../../index.html"; // یا آدرس صفحه‌ی اصلی
      }, 3000);
  }, 2000);
});
let enteredpassword;
password.addEventListener("keyup", function (event) {
  console.log(event.target.value.length);
  enteredpassword = event.target.value;
  passwordError.style.opacity = "100";
  passwordError.innerHTML = "وارد کردن رمز عبور الزامی است!";
  if (enteredpassword.length < 8) {
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
  // start with 09 & length = 11
  let regex = /^09\d{9}$/;
  if (event.target.value.length == 0) {
    mobileError.style.color = "red";
    mobileError.innerHTML = "وارد کردن شماره همراه الزامی است!";
  } else if (!regex.test(event.target.value)) {
    mobileError.style.color = "red";
    if (!event.target.value.startsWith("09")) {
      mobileError.innerHTML = "شماره همراه باید با 09 شروع شود!";
    } else if (!/^\d+$/.test(event.target.value)) {
      mobileError.innerHTML = "شماره همراه فقط باید شامل اعداد باشد!";
    } else if (event.target.value.length !== 11) {
      mobileError.innerHTML = "شماره همراه باید 11 رقم باشد!";
    }
  } else {
    mobileError.style.opacity = "0";
  }
});

repeatpassword.addEventListener("keyup", function (event) {
  repeatpassworderr.style.opacity = "100";
  if (event.target.value != enteredpassword) {
    repeatpassworderr.innerHTML = "تکرار رمز عبور یکسان نیست!";
  } else {
    repeatpassworderr.style.opacity = "0";
  }
});
checkpass(password)
checkpass(repeatpassword)

function checkpass(parameter){
  ["copy", "cut", "paste"].forEach((eventType) =>
    parameter.addEventListener(eventType, (event) => event.preventDefault()),
  );
}
// ["copy", "cut", "paste"].forEach((eventType) =>
//   password.addEventListener(eventType, (event) => event.preventDefault())
// );
email.addEventListener("keyup", function (event) {
    // let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(com|org|net|edu|gov|mil|ir|co\.uk|info|biz|ai|uk|us|de|fr|jp|au|ca|it|es|ru|cn)$/;
    let emailError = document.getElementById("emailError");
    if (regex.test(event.target.value)) {
        emailerr.textContent = "";
    } else {
        emailerr.innerHTML = "فرمت ایمیل نامعتبر است!";
        emailerr.style.opacity = "100";
  }
});
