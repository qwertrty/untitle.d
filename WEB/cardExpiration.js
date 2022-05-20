function cardExpiration() {
    //let expiry_month = document.forms["myForm"]["date"].value;
    //let expiry_year = document.forms["myForm"]["date"].value;
    let expiry_day = document.getElementById("date").value;
    let expiry_month = document.getElementById("date").value;
    let expiry_year = document.getElementById("date").value;
    let today = new Date();
    let selDate = new Date();
    if (today.getTime() > selDate.setFullYear(expiry_day,expiry_month, expiry_year)) {
        alert("expiry date is before today .");
        document.date.focus();
    } else {
        alert("it is fine");
        document.date.focus();
        return false;
    }
}