let mobilenumber = document.getElementById("mobile-number");
let password = document.getElementById("password");
let passwordError = document.getElementById("password-err");
let mobileError = document.getElementById("mobile-err");
let email = document.getElementById("email");
let emailerr = document.getElementById("email-err");
let login = document.getElementById("login");
let successmessage = document.getElementById("success-message");
let enteredpassword;
let passwordvalid = false;
let phonenumbervalid = false;
// let passwordvalid = false;
login.addEventListener("click", function (event) {
  if(passwordvalid & phonenumbervalid){
    event.preventDefault()
    setTimeout(function () {
      //   successmessage.style.display = "block";
          successmessage.innerHTML= '  ✅ ورود با موفقیت انجام شد!'
          successmessage.style.backgroundColor = "#89e8a0";
        successmessage.style.opacity = "1";
        successmessage.style.visibility = "visible";
        setTimeout(function () {
          window.location.href = "../../index.html"; // یا آدرس صفحه‌ی اصلی
        }, 3000);
    }, 2000);
  }else{
    event.preventDefault()
    console.log('invalid');
    successmessage.innerHTML= 'نام کاربری یا رمز عبور نامعتبر!'
    successmessage.style.opacity = "1";
    successmessage.style.backgroundColor = "#ef6767";
    successmessage.style.visibility = "visible";
    setTimeout(function(){
      successmessage.style.opacity = "0";
      successmessage.style.visibility = "hidden";
    },3000)
    
  }
});
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
    passwordvalid=true;
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
    phonenumbervalid=false;
  } else if (!regex.test(event.target.value)) {
    mobileError.style.color = "red";
    if (!event.target.value.startsWith("09")) {
      mobileError.innerHTML = "شماره همراه باید با 09 شروع شود!";
      phonenumbervalid=false;
    } else if (!/^\d+$/.test(event.target.value)) {
      mobileError.innerHTML = "شماره همراه فقط باید شامل اعداد باشد!";
      phonenumbervalid=false;
    } else if (event.target.value.length !== 11) {
      mobileError.innerHTML = "شماره همراه باید 11 رقم باشد!";
      phonenumbervalid=false;
    }
  } else {
    mobileError.style.opacity = "0";
    phonenumbervalid=true;
  }
});
email.addEventListener("keyup", function (event) {
  // let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let regex =
    /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.(com|org|net|edu|gov|mil|ir|co\.uk|info|biz|ai|uk|us|de|fr|jp|au|ca|it|es|ru|cn)$/;
  let emailError = document.getElementById("emailError");
  if (regex.test(event.target.value)) {
    emailerr.textContent = "";
  } else {
    emailerr.innerHTML = "فرمت ایمیل نامعتبر است!";
    emailerr.style.opacity = "100";
  }
});
