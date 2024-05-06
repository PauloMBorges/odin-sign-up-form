let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let matchPassword = document.getElementById("match");
// Initially hide the match error message
matchPassword.classList.add("hidden");

// Add event listener for when the user leaves the confirmPassword input field
confirmPassword.addEventListener("blur", () => {
  
  // Clear any previous custom validation messages
  password.setCustomValidity('');
  confirmPassword.setCustomValidity('');

  if (confirmPassword.value.length && confirmPassword.value !== password.value) {
    
    // If passwords do not match, set custom validity messages -> :invalid (in order to show red border)
    password.setCustomValidity('As senhas não conferem');
    confirmPassword.setCustomValidity('As senhas não conferem');

    matchPassword.classList.remove("hidden");
  } else {
    matchPassword.classList.add("hidden");
  }

  // Override the default reportValidity method to prevent the default popup messages
  confirmPassword.reportValidity = () => {};
  password.reportValidity = () => {};
});

// Hide message for when the user starts typing in the confirmPassword field again
confirmPassword.addEventListener("input", () => {
 
  password.setCustomValidity('');
  confirmPassword.setCustomValidity('');

  matchPassword.classList.add("hidden");

  // Restore the default reportValidity methods to their original functionality
  confirmPassword.reportValidity = HTMLInputElement.prototype.reportValidity;
  password.reportValidity = HTMLInputElement.prototype.reportValidity;
});
