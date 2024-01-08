var nameError = document.getElementById("name_error");
var phoneError = document.getElementById("phone_error");
var emailError = document.getElementById("email_error");
var messageError = document.getElementById("message_error");
var submitError = document.getElementById("submit_error");

function validatename(){
    var contactname = document.getElementById("contactname").value;
    if (contactname.trim() === "") {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!contactname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write a valid name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};

function validatephone(){
    var phone = document.getElementById("contactphone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "phone no is required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "only digits please..";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("contactemail").value;

    if(email.length == 0){
        emailError.innerHTML = "email is required";
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        email.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateform(){
    if(!validatename() || !validatephone() || !validateEmail()){
        submitError.innerHTML = "fill all required fields"
        return false;
    }
}