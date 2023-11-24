// Registration form  validation
// Reg

var fname=document.getElementById("fname").value;
    var email=document.getElementById("regEmail").value;
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirmPassword").value;

function validateForm(){
    
if (fname===""){
    document.getElementById("fname_val").innerHTML="First Name is empty"; 
}else if(fname.length <3){
    document.getElementById("fname_val").innerHTML="First name require min character not than 3";
}



    if (email===""){
        document.getElementById("email_val").innerHTML="Please fill up your Email";
    }
    else{
        document.getElementById("email_val").innerHTML="";
    }

    if (password===""){
        document.getElementById("pwd_Val").innerHTML="Please fill up your Password";
    }
    else{
        document.getElementById("pwd_Val").innerHTML="";
    }

    if(password=="Confirmpassword")
    document.getElementById("conPwd_val").innerHTML="";
else{
    document.getElementById("conPwd_val").innerHtml="";
}
}