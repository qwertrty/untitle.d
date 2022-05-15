function requiredField(){
     let firstname=document.getElementById("firstname").value;
     let lastname=document.getElementById("lastname").value;
     let email=document.getElementById("email").value;
     let tel=document.getElementById("tel").value;
     let name=document.getElementById("name").value;
     let number=document.getElementById("number").value;
     let cvv=document.getElementById("cvv").value;
     let errormessage="";
    if (firstname=="")
    {
        errormessage +="enter your firstname\n";
        document.getElementById('firstname').style.bordercolor = "black";
    }
    if (lastname=="")
    {
        errormessage +="enter your lastname\n";
        document.getElementById('lastname').style.bordercolor = "black";

    }
    if (email=="")
    {
        errormessage +="enter your email\n";
        document.getElementById('email').style.bordercolor = "black";

    }
    if (tel=="")
    {
        errormessage +="enter your tel number\n";
        document.getElementById('tel').style.bordercolor = "black";
    }
    if (name=="")
    {
        errormessage +="enter your name\n";
        document.getElementById('name').style.bordercolor = "black";
    }
    if (number=="")
    {
        errormessage +="enter your number\n";
        document.getElementById('number').style.bordercolor = "black";
    }
    if (cvv=="")
    {
        errormessage +="enter your cvv\n";
        document.getElementById('cvv').style.bordercolor = "black";
    }
    if (errormessage !=""){
        alert(errormessage);
        return false;
    }

}