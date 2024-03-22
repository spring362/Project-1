function myFunction() {
  var emailVal = validateEmail();
  if (emailVal) {
    alert("Thank you for joining!");
  }
}
function validateEmail() {
      var emailInput = document.getElementById('email');
      var email = emailInput.value;
      var emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false; 
      }
      return true;
}