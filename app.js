const pattern = {
    username: /^[a-z\d]{8,15}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/,
    phone:/^\d{10}$/,
}

function formValidate(){
    // values
    let name = document.forms["RegForm"]["Name"];
    let address = document.forms["RegForm"]["Address"];
    let email = document.forms["RegForm"]["EMail"];
    let password = document.forms["RegForm"]["Password"];
    let cpassword = document.forms["RegForm"]["cPassword"];
    let phone = document.forms["RegForm"]["phone"];
    // error display
    let ename = document.getElementById("name");
    let eaddress = document.getElementById("address");
    let eemail = document.getElementById("email");
    let epassword = document.getElementById("pwd");
    let ecpassword = document.getElementById("cpwd");
    let ephone = document.getElementById("phone");
    let result = document.getElementById("result");

    // verifing name
    if(pattern.username.test(name.value)){
        ename.textContent="";
    }
    else{
        ename.textContent="Atleast 8 to 15 Character Required";
        name.focus();
        return false;
    }

    //verifing address
    if(address.value==""){
        eaddress.textContent="Address cannot be empty. Kindly fill ";
        address.focus();
        return false;
    }
    else{
        eaddress.textContent="";
    }

    //verifing  email
    if(email.value==""){
        eemail.textContent="Email cannot be empty. Kindly fill ";
        email.focus();
        return false;
    }
    else if(pattern.email.test(email.value)){
        eemail.textContent="";
    }
    else{
        eemail.textContent="Enter a vaild Email";
        email.focus();
        return false;
    }

    //verifing password
    if(password.value==""){
        epassword.textContent="Kindly fill the Password";
        password.focus();
        return false;
    }
    else if(pattern.password.test(password.value)){
        epassword.textContent="";
    }
    else{
        epassword.textContent="password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number. ";
        password.focus();
        return false;
    }

    // confirm password
    if(cpassword.value==""){
        ecpassword.textContent="Kindly confirm your password";
        cpassword.focus();
        return false;
    }
    else if(cpassword.value==password.value){
        ecpassword.textContent="";
    }else{
        ecpassword.textContent="Password and Confirm-password must be same";
        cpassword.focus();
        return false;
    }
    //verifing number
    if(phone.value==""){
        ephone.textContent="Kindly fill phone number";
        phone.focus();
        return false;
    }
    else if(pattern.phone.test(phone.value)){
        ephone.textContent="";
        result.textContent="Regex validation Success";
        return false;
    }
    else{
        ephone.textContent="Phone no is not valid";
        phone.focus();
        return false;   
    }
}
