let form = document.getElementById("validateForm");

  form.addEventListener('submit', function(e){
    e.preventDefault();
    validateForm();
  })

function validateForm() {
  const firstName = document.getElementById('fname').value.trim();

  if (firstName === '') {
    document.getElementById('fname_val').innerHTML = 'Please enter your first name';
  } else if (!firstName.charAt(0).toUpperCase()) {
    document.getElementById('fname_val').innerHTML = 'First name must start with a capital letter';
  } else {
    document.getElementById('fname_val').innerHTML = '';
  }

 
  const lastName = document.getElementById('lname').value.trim();
  if (lastName === '') {
    document.getElementById('lname_val').innerHTML = 'Please enter your last name';
   
  } else {
    document.getElementById('lname_val').innerHTML = '';
  }

 
  const email = document.getElementById('regEmail').value.trim();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+)@[A-Za-z0-9-]+.[A-Za-z]{2,})$/i;
  if (!emailRegex.test(email)) {
    document.getElementById('email_val').innerHTML = 'Please enter a valid email address';
  } else {
    document.getElementById('email_val').innerHTML = '';
  }

  const password = document.getElementById('password').value.trim();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})$/;
  if (!passwordRegex.test(password)) {
    document.getElementById('pwd_Val').innerHTML = 'Password must be at least 8 characters long and contain one lowercase letter, one uppercase letter, and one number';
  } else {
    document.getElementById('pwd_Val').innerHTML = '';
  }

  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  if (confirmPassword !== password) {
    document.getElementById('conPwd_val').innerHTML = 'Passwords do not match';
   
  } else {
    document.getElementById('conPwd_val').innerHTML = '';
  }

  const contact = document.getElementById('contact').value.trim();
  const contactRegex = /^[0-9]+$/;
  if (!contactRegex.test(contact)) {
    document.getElementById('contact_val').innerHTML = 'Please enter a valid phone number';

  } else {
    document.getElementById('contact_val').innerHTML = '';
  }
 if (document.getElementById('fname_val').innerHTML === '' &&
 document.getElementById('lname_val').innerHTML === '' &&
 document.getElementById('email_val').innerHTML === '' &&
 document.getElementById('pwd_Val').innerHTML === '' &&
 document.getElementById('conPwd_val').innerHTML === '' &&
 document.getElementById('contact_val').innerHTML === '') {
 return true;
} else {
 return false;
}
}

const submitBtn = document.querySelector('.Loginbtn');
submitBtn.addEventListener('click', validateForm);
