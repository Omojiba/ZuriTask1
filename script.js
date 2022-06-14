const form = document.getElementById('myform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

   const firstnameValue = firstname.value.trim();
   const lastnameValue = lastname.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();

   if(firstnameValue === ''){
    // show error
    // add error class
     setErrorFor(firstname, 'First Name cannot be empty');
}else {
 //    add success class
 setSuccessFor(firstname);
}

if(lastnameValue === ''){
    // show error
    // add error class
     setErrorFor(lastname, 'Last Name cannot be empty');
}else {
 //    add success class
 setSuccessFor(lastname);
}

if(emailValue === ''){
    setErrorFor(email, 'Looks like this is not an email');
}
else{
   setSuccessFor(email);
}

if(passwordValue === ''){
    setErrorFor(password, 'Password cannot be empty');
}else{
    setSuccessFor(password);
}}

function setErrorFor(input, message){
    const formControl = input.parentElement; //form class
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form success';
}

