function ValidateEmail()
{
    let email_regexp = /^\w+@[a-z]+(\.[a-z]+)+$/;
    let email=document.myForm.email;
    let valid = email_regexp.test(email.value);
    if(!valid)
    {
        alert("You have entered an invalid email address!");
        return false;
    }
    else
    {
        return true;
    }
}