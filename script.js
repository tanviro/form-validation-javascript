const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const confpassError = document.getElementById('confpassError');


submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword() && validateConfirmPassword()){
        alert("Form submitted successfully");
        clearInput();
    }
});

function validateName(){
    let name = document.getElementById('name').value;
    if (name.length == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write Your Full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;
    if (email.length == 0){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmmark');
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}
function validatePassword(){
    let password = document.getElementById('password').value;
    if (password.length == 0){
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('fa-xmmark');
        return false;
    }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Passowrd should contain 1 Uppercase, 1 Lowercase, 1 Digit and 1 Alphabet";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add('fa-check');
    return true;
}
function validateConfirmPassword(){
    let confirmpassword = document.getElementById('confirm-password').value;
    let password = document.getElementById('password').value;
    if (confirmpassword.length == 0){
        confpassError.innerHTML = "Confirm Password is required";
        confpassError.previousElementSibling.classList.add('fa-xmmark');
        return false;
    }
    if(confirmpassword != password){
        confpassError.innerHTML = "Confirm Password and Password should be same";
        confpassError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    confpassError.innerHTML = "";
    confpassError.previousElementSibling.classList.add('fa-check');
    return true;
}
function clearInput(){
    let name = document.getElementById('name').value = "";
    let email = document.getElementById('email').value = "";
    let password = document.getElementById('password').value = "";
    let confirmpassword = document.getElementById('confirm-password').value = "";
    nameError.previousElementSibling.classList.remove('fa-check');
    nameError.previousElementSibling.classList.remove('fa-xmark');
    emailError.previousElementSibling.classList.remove('fa-check');
    emailError.previousElementSibling.classList.remove('fa-xmark');
    passError.previousElementSibling.classList.remove('fa-check');
    passError.previousElementSibling.classList.remove('fa-xmark');
    confpassError.previousElementSibling.classList.remove('fa-check');
    confpassError.previousElementSibling.classList.remove('fa-xmark');
}