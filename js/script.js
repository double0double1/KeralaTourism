// Popup Toggle
function show() {
    var popup = document.getElementById("myPopup");
    popup.style.visibility = "visible"
    // popup.classList.toggle("show");
  }

  // Popup Toggle
function hide() {
  var popup = document.getElementById("myPopup");
  popup.style.visibility = "hidden"
  // popup.classList.toggle("show");
}



const form = document.getElementById("signupform");
// console.log(form)
form.addEventListener('submit',function(event) {
    if (!validatepwd()) {
        event.preventDefault();
    }  

})

function validatepwd() {
  // console.log("yes")
  let pwd = document.getElementById("userPass").value;
  let pwdrpt = document.getElementById("userPassRepeat").value;

  if (pwd != pwdrpt) {
      alert("Password and Repeat Password doesn't match");
      return false;
  }
  return true;
}