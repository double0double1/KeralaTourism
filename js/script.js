// Password Popup

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
        eMail.classList.remove("border", "border-danger");       //border colors are changed by toggling bootstrap classes
        return true;
    } else {
        console.log("invalid Email ID");
        eMail.classList.add("border", "border-danger");
        eMail.setCustomValidity('Invalid Email ID'); 
        eMail.reportValidity();  
        return false;
    }
    
    
}

function validatepwd() {
    let pwd = document.getElementById("userPass");
    let pwdrpt = document.getElementById("userPassRepeat");
  
    if (pwd.value != pwdrpt.value) {
        console.log("Password and Repeat Password doesn't match");
        // pwd.classList.add("border", "border-danger","border-2");
        pwdrpt.classList.add("border", "border-danger","border");
        pwdrpt.setCustomValidity('Password and Repeat Password should match');
        pwdrpt.reportValidity();     
        return false;
    }
    console.log("Passwords match");
    pwdrpt.classList.remove("border", "border-danger");
    pwdrpt.setCustomValidity('');
    return true;
  }

function validateMobile() {
    let mobileNumber = document.getElementById("userMobile");    
    let regexMob = /^\d{3}[\.\-\s]?\d{3}[\.\-\s]?\d{4}$/;

    if(regexMob.test(mobileNumber.value)) {
        console.log("mobile number is in correct format");
        mobileNumber.classList.remove("border", "border-danger");
        return true;
    }
    console.log("invalid mobile number");
    mobileNumber.classList.add("border", "border-danger");
    mobileNumber.setCustomValidity('Invalid Mobile Number'); 
    mobileNumber.reportValidity();  
    return false;
    
}


//-------------------------------------------------------------------------------


// Mobile Number Error Popup

// Popup Toggle
function mobilePopupshow() {
    var mobilePopup = document.getElementById("mobilePopup");
    mobilePopup.style.visibility = "visible";
  }

function mobilePopuphide() {
    var mobilePopup = document.getElementById("mobilePopup");
    mobilePopup.style.visibility = "hidden";
}


// Password Strength Check

function pwdStrength() {
    let pwdValue = document.getElementById("userPass");
    let pb1 = document.getElementById("pb1");
    let pb2 = document.getElementById("pb2");
    let pb3 = document.getElementById("pb3");
    let strengthValue = document.getElementById("strengthValue");
    // console.log(pwdValue.value);
    
    if(pwdValue.value != "") {
        pb1.setAttribute("style", "width: 20%");
        strengthValue.innerText = "Weak"
    } else {
        pb1.removeAttribute("style"); 
        strengthValue.innerText = ""
    }
}   