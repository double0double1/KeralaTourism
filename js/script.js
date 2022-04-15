// Popup

// Popup Toggle
function show() {
    var popup = document.getElementById("pwdPopup");
    popup.style.visibility = "visible"
    // popup.classList.toggle("show");
  }

function hide() {
  var popup = document.getElementById("pwdPopup");
  popup.style.visibility = "hidden"
  // popup.classList.toggle("show");
}


//-------------------------------------------------------------------------------


// Sign Up form validations

const form = document.getElementById("signupform");

form.addEventListener('submit', function(Event) {
    let mailFlag = validateMail();
    let mobileFlag = validateMobile();
    let pwdFlag = validatepwd();

    if (!mailFlag || !mobileFlag || !pwdFlag) {
        Event.preventDefault();
    }
})

function validateMail() {
    let eMail = document.getElementById("userEmail");
    let regexMail = /^[A_Za-z0-9\.\-]+@[A-Za-z0-9\-]+\.[a-z]{2,4}(\.[a-z]{2,3})?$/;

    if(regexMail.test(eMail.value)) {
        console.log("Email ID is in correct format");
        eMail.classList.remove("border", "border-danger");
        eMail.classList.add("border", "border-success");
        return true;
    } else {
        console.log("invalid Email ID");
        eMail.classList.add("border", "border-danger");
        return false;
    }
    
    
}

function validatepwd() {
    let pwd = document.getElementById("userPass");
    let pwdrpt = document.getElementById("userPassRepeat");
  
    if (pwd.value != pwdrpt.value) {
        console.log("Password and Repeat Password doesn't match");
        pwd.classList.add("border", "border-danger");
        pwdrpt.classList.add("border", "border-danger");
        return false;
    }
    console.log("Passwords match");
    pwd.classList.remove("border", "border-danger");
    pwdrpt.classList.remove("border", "border-danger");
    pwd.classList.add("border", "border-success");
    pwdrpt.classList.add("border", "border-success");
    return true;
  }

function validateMobile() {
    let mobileNumber = document.getElementById("userMobile");    
    let regexMob = /^\d{3}[\.\-\s]?\d{3}[\.\-\s]?\d{4}$/;

    if(regexMob.test(mobileNumber.value)) {
        console.log("mobile number is in correct format");
        mobileNumber.classList.remove("border", "border-danger");
        mobileNumber.classList.add("border", "border-success");
        return true;
    }
    console.log("invalid mobile number");
    mobileNumber.classList.add("border", "border-danger");
    return false;
    
}


//-------------------------------------------------------------------------------
