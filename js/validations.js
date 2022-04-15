const form = document.getElementById("signupform");

form.addEventListener('submit',function(event) {
    let mailFlag = validateMail();
    let mobileFlag = validateMobile();
    let pwdFlag = validatepwd();

    if (!(mailFlag && pwdFlag && mobileFlag)) {
        event.preventDefault();
    }

})

function validateMail() {
    let eMail = document.getElementById("userEmail").value;
    let regexMail = /^[A_Za-z0-9\.\-]+@[A-Za-z0-9\-]+\.[a-z]{2,4}(\.[a-z]{2,3})?$/;

    if(regexMail.test(eMail)) {
        console.log("Email ID is in correct format");
        return true;
    }
    console.log("invalid Email ID");
    return false;
    
}

function validatepwd() {
    let pwd = document.getElementById("userPass").value;
    let pwdrpt = document.getElementById("userPassRepeat").value;
  
    if (pwd != pwdrpt) {
        console.log("Password and Repeat Password doesn't match");
        return false;
    }
    console.log("Passwords match");
    return true;
  }

function validateMobile() {
    let mobileNumber = document.getElementById("userMobile").value;
    
    let regexMob = /^\d{3}[\.-\s]?\d{3}[\.-\s]?\d{4}$/;

    if(regexMob.test(mobileNumber)) {
        console.log("mobile number is in correct format");
        return true;
    }
    console.log("invalid mobile number");
    return false;
    
}
