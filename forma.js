function validateForm() {

function validateName() {
    let x = document.forms["forma"]["username"].value;
    console.log("validuojam");
    console.log(x);
    if (x == "" || x.length < 5 || x.length > 12) {
        return false;
        alert("please enter valid username");
    }

}

function validateEmail() {
   var emailID = document.forms["forma"]["mail"].value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   console.log("email validate");

   if (atpos < 1 || ( dotpos - atpos < 2 ))
   {
      alert("Please enter correct email ID")
      document.forma.email.focus() ;
      return false;
   }
   return( true );
}

function validateZIP() {
    let x = document.forms["forma"]["username"].value;
    console.log(x);
    let y = parseInt(x);
        if (!Number.isInteger(y)) {
            alert("Must be digits only");
        }
}
