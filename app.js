const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const togglePassword = document.querySelector('.toggle-password');
const errorMessages = document.querySelectorAll('.error-message');

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  let hasError = false;

  // Check first name
  if (fName === '') {
    setError(firstName, 'First Name cannot be empty');
    hasError = true;
  } else {
    clearError(firstName);
  }

  // Check last name

  if (lName === '') {
    setError(lastName, 'Last Name cannot be empty');
    hasError = true;
  } else {
    clearError(lastName);
  }

  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    setError(email, 'Email cannot be empty');
    hasError = true;
  } else {
    clearError(email);
  }

  // Check password

  if (passwordVal === '') {
    setError(password, 'Password cannot be empty');
    hasError = true;
  } else {
    clearError(password);
  }

  if (!hasError) {
    console.log(fName,lName,email,password);
    // Proceed with form submission or further processing
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.classList.toggle('fa-eye');
  togglePassword.classList.toggle('fa-eye-slash');
});

function setError(element, message) {
  const parent = element.parentElement;
  const errorMessage = parent.querySelector('.error-message');
  const errorIcon = parent.querySelector('.error-icon');
  errorMessage.textContent = message;
  element.classList.add('error');
  errorIcon.style.display = 'block';
}

function clearError(element) {
  const parent = element.parentElement;
  const errorMessage = parent.querySelector('.error-message');
  const errorIcon = parent.querySelector('.error-icon');
  errorMessage.textContent = '';
  element.classList.remove('error');
  errorIcon.style.display = 'none';
}
