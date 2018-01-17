// document.getElementById("btn").addEventListener("click", validateForm());
but = document.getElementById("btn");
but.addEventListener("mouseover", validateForm());


function validateForm() {
    console.log("Validate started");


// USERNAME VALIDATION

    let x = document.forms["forma"]["username"].value;
    let xfield = document.getElementById("username");
    let xcomment = document.getElementById("pusername");
    let xvalid = true;

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
        let pvalid = true;


    if (p == "") {
        pcomment.innerHTML = "password not entered";
        pfield.focus();
        pvalid = false;
    }

 // !@#$%^&*()_+{}[]:"|;'\<>?,./`~

    testas = /\(/.test(p) || /\)/.test(p) || /\!/.test(p) || /\@/.test(p) || /\#/.test(p) || /\$/.test(p) || /\%/.test(p) || /\^/.test(p) || /\&/.test(p);
    testas = testas || /\*/.test(p) || /\_/.test(p) || /\-/.test(p) || /\+/.test(p) || /\=/.test(p) || /\[/.test(p) || /\{/.test(p) || /\\/.test(p) || /\|/.test(p);
    testas = testas || /\:/.test(p) || /\;/.test(p) || /\'/.test(p) || /\"/.test(p) || /\}/.test(p) || /\]/.test(p) || /\</.test(p) || /\,/.test(p) || /\>/.test(p);
    testas = testas || /\./.test(p) || /\?/.test(p) || /\//.test(p) || /\`/.test(p) || /\~/.test(p);


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
    let nvalid = true;

    if (n == "") {
        ncomment.innerHTML = "name not entered";
        nvalid = false;
    } else if (!/^[a-zA-Z]+$/.test(n)) {
        ncomment.innerHTML = "name must contain only letters";
        nvalid = false;
    };

    if (nvalid) {
        ncomment.innerHTML = "Ok";
        document.getElementById("pname").classList.add("ok");
    } else {
        document.getElementById("pname").classList.remove("ok");
    };

//ZIPCODE VALIDATION

    let z = document.forms["forma"]["zipcode"].value;
    let zfield = document.getElementById("zipcode");
    let zcomment = document.getElementById("pzipcode");
    let zvalid = true;


    if (z == "") {
        zcomment.innerHTML = "name not entered";
        zvalid = false;
    } else if (!/^\d+$/.test(z)) {
        zcomment.innerHTML = "ZIP must contain only numbers";
        zvalid = false;
    };

    if (zvalid) {
        zcomment.innerHTML = "Ok";
        document.getElementById("pzipcode").classList.add("ok");
    } else {
        document.getElementById("pzipcode").classList.remove("ok");
    };

//GENDER VALIDATION

    let g = document.forms["forma"]["gender"].value;
    let gfield = document.getElementById("gender");
    let gcomment = document.getElementById("pgender");
    let gvalid = true;

    if (g == "") {
        document.getElementById("pgender").innerHTML = "gender not entered";
        gvalid = false;
    };

    if (zvalid) {
        gcomment.innerHTML = "Ok";
        document.getElementById("pgender").classList.add("ok");
    } else {
        document.getElementById("pgender").classList.remove("ok");
    };


//LANGUAGE VALIDATION

    let l1 = document.forms["forma"]["checkboxenglish"].value;
    let l2 = document.forms["forma"]["checkboxother"].value;
    let lfield1 = document.getElementById("checkboxenglish");
    let lfield2 = document.getElementById("checkboxother");

    let lcomment = document.getElementById("planguage");
    let lvalid = true;


    if (l1 == "" && l2 == "") {
        document.getElementById("planguage").innerHTML = "choose language";
        lvalid = false;
    };

    if (lvalid) {
        lcomment.innerHTML = "Ok";
        document.getElementById("planguage").classList.add("ok");
    } else {
        document.getElementById("planguage").classList.remove("ok");
    };

//TEXTAREA 'ABOUT' VALIDATION

let a = document.forms["forma"]["about"].value;
let afield = document.getElementById("about");
let acomment = document.getElementById("pabout");
let avalid = true;

if (a == "") {
    document.getElementById("pabout").innerHTML = "please put in your comments";
    avalid = false;
};

if (avalid) {
    acomment.innerHTML = "Ok";
    document.getElementById("pabout").classList.add("ok");
} else {
    document.getElementById("pabout").classList.remove("ok");
};

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
