// document.getElementById("btn").addEventListener("click", validateForm());
but = document.getElementById("btn");
but.addEventListener("mouseover", validateForm());


function validateForm() {
    console.log("Validate started");


// USERNAME VALIDATION

    let x = document.forms["forma"]["username"].value;
    let xfield = document.getElementById("username");
    let xcomment = document.getElementById("pusername");
    xvalid = true;

    console.log(xfield);

    if (x == "") {
        xcomment.innerHTML = "user name not entered";
        xvalid = false;
        xfield.focus();
    } else {

        if (!/\d/.test(x)) {
            xcomment.innerHTML = "user name must contain at least one number";
            xfield.focus();
            xvalid = false;
        }

        if (x.length < 5) {
            xcomment.innerHTML = "user name must contain at least 5 symbols";
            xfield.focus();
            xvalid = false;
        }
    }
    if (xvalid) {
        xcomment.innerHTML = "Ok";
        document.getElementById("pusername").classList.add("ok");
    } else {
        document.getElementById("pusername").classList.remove("ok");
    }

    // PASSWORD VALIDATION

        let p = document.forms["forma"]["password"].value;
        let pfield = document.getElementById("password");
        let pcomment = document.getElementById("ppassword");
        pvalid = true;


    if (p == "") {
        pcomment.innerHTML = "password not entered";
        pfield.focus();
        pvalid = false;
    }

 // (!)(@)(#)($)(%)(^)(&)(*)(()())(_)(-)(+)(=)([)({)(\)(|)(:)(;)(')(")(})(])(<)(,)(>)(.)(?)(/)(`)(~)

    testas = /\(/.test(p) || /\)/.test(p) || /\!/.test(p) || /\@/.test(p) || /\#/.test(p) || /\$/.test(p) || /\%/.test(p) || /\^/.test(p) || /\&/.test(p);
    testas = testas || /\*/.test(p) || /\_/.test(p) || /\-/.test(p) || /\+/.test(p) || /\=/.test(p) || /\[/.test(p) || /\{/.test(p) || /\\/.test(p) || /\|/.test(p);
    testas = testas || /\:/.test(p) || /\;/.test(p) || /\'/.test(p) || /\"/.test(p) || /\}/.test(p) || /\]/.test(p) || /\</.test(p) || /\,/.test(p) || /\>/.test(p);
    testas = testas || /\./.test(p) || /\?/.test(p) || /\//.test(p) || /\`/.test(p) || /\~/.test(p);
        console.log(testas);

    if (!testas) {
        pcomment.innerHTML = "password must have at leat 1 special character like !@#$%^ etc.";
        pfield.focus();
        pvalid = false;
    }

    if (p.length < 5) {
        pcomment.innerHTML = "password must contain at least 5 symbols";
        pfield.focus();
        pvalid = false;
    }

    if (pvalid) {
        pcomment.innerHTML = "Ok";
        document.getElementById("ppassword").classList.add("ok");
    } else {
        document.getElementById("ppassword").classList.remove("ok");
    }

// NAME VALIDATION

    let n = document.forms["forma"]["name"].value;
    let nfield = document.getElementById("name");
    let ncomment = document.getElementById("pname");
    nvalid = true;



    if (n == "") {
        ncomment.innerHTML = "name not entered";
        nvalid = false;

    if (!/^[a-zA-Z]+$/.test(n)) {
        ncomment.innerHTML = "name must contain only letters";
        nvalid = false;
    }

    if (nvalid) {
        ncomment.innerHTML = "Ok";
        document.getElementById("pname").classList.add("ok");
    } else {
        document.getElementById("pname").classList.remove("ok");
    }

    }

    let s = document.forms["forma"]["gender"].value;

    if (s == "") {
        document.getElementById("pgender").innerHTML = "gender not entered";
    }

}

//     let x = document.forms["forma"]["username"].value;
//     console.log("validuojam");
//     console.log(x);
//     if (x == "" || x.length < 5 || x.length > 12) {
//         return false;
//         alert("please enter valid username");
//     }
//
// }
//
// function validateEmail() {
//    var emailID = document.forms["forma"]["mail"].value;
//    atpos = emailID.indexOf("@");
//    dotpos = emailID.lastIndexOf(".");
//    console.log("email validate");
//
//    if (atpos < 1 || ( dotpos - atpos < 2 ))
//    {
//       alert("Please enter correct email ID")
//       document.forma.email.focus() ;
//       return false;
//    }
//    return( true );
// }

function validateZIP() {
    let x = document.forms["forma"]["username"].value;
    console.log(x);
    let y = parseInt(x);
        if (!Number.isInteger(y)) {
            alert("Must be digits only");
        }
}
