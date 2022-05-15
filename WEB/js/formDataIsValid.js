function formDataIsValid()
{
    let form_is_valid  = true;
    if (!requiredField()) {
        form_is_valid  = false;
    }
    if (!ValidateEmail()) {
        form_is_valid  = false;
    }
    if(!cardExpiration()){
        form_is_valid = false;
    }
    return form_is_valid;
}