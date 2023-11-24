// Email validation

function validateForm(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;


    if (email===""){
        document.getElementById("email_error").innerHTML="Please fill up your Email";
        return false;
    }

    else{
        document.getElementById("email_error").innerHTML="";
        
    }

    if (password===""){
        document.getElementById("password_error").innerHTML="Please fill up your Password";
      return false;
    }
    else{
        document.getElementById("password_error").innerHTML="";
    }

}

