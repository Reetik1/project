
const form = document.getElementById('myForm');


// validate the form
function validateForm() {
  const form = document.getElementById("myForm");
  const elements = form.elements;
  let isValid = true;

  
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  if (name === username) {
    document.getElementById("alert-message").textContent = " *User name is already been taken";
    document.getElementById("username").style.color = "red";
    document.getElementById("alert-message").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("alert-message").classList.add("d-none");
  }

  // Validate other form fields
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].required && elements[i].value === "" && elements[i].id !== "password") {
      elements[i].classList.add("is-invalid");
      isValid = false;
    } else {
      elements[i].classList.remove("is-invalid");
    }
  }

  return isValid;
}
