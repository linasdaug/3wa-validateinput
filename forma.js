// document.getElementById("btn").addEventListener("click", validateForm());



function validateForm() {
    console.log("Validate started");

// USERNAME VALIDATION

    let u = document.forms["forma"]["username"].value;
    let ufield = document.getElementById("username");
    let ucomment = document.getElementById("pusername");
    let uvalid = true;

    if (u == "") {
        ucomment.innerHTML = "user name not entered";
        uvalid = false;
        ufield.focus();
    } else {

        if (!/\d/.test(u)) {
            ucomment.innerHTML = "user name must contain at least one number";
            ufield.focus();
            uvalid = false;
        }

        if (u.length < 5) {
            ucomment.innerHTML = "user name must contain at least 5 symbols";
            ufield.focus();
            uvalid = false;
        }
    }
    if (uvalid) {
        ucomment.innerHTML = "Ok";
        document.getElementById("pusername").classList.add("ok");
    } else {
        document.getElementById("pusername").classList.remove("ok");
    }

console.log(u);

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
        nfield.focus();
    } else if (!/^[a-zA-Z]+$/.test(n)) {
        ncomment.innerHTML = "name must contain only letters";
        nvalid = false;
        nfield.focus();
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
        zcomment.innerHTML = "ZIP code not entered";
        zvalid = false;
        zfield.focus();
    } else if (!/^\d+$/.test(z)) {
        zcomment.innerHTML = "ZIP must contain only numbers";
        zvalid = false;
        zfield.focus();
    };

    if (zvalid) {
        zcomment.innerHTML = "Ok";
        document.getElementById("pzipcode").classList.add("ok");
    } else {
        document.getElementById("pzipcode").classList.remove("ok");
    };

//EMAIL VALIDATION

let e = document.forms["forma"]["email"].value;
let efield = document.getElementById("email");
let ecomment = document.getElementById("pemail");
let evalid = true;


if (e == "") {
    ecomment.innerHTML = "e-mail not entered";
    evalid = false;
    efield.focus();
} else if (!/@/.test(e)) {
    ecomment.innerHTML = "please enter valid e-mail (mus contain @)";
    evalid = false;
    efield.focus();
};

if (evalid) {
    ecomment.innerHTML = "Ok";
    document.getElementById("pemail").classList.add("ok");
} else {
    document.getElementById("pemail").classList.remove("ok");
};



//GENDER VALIDATION

    let g = document.forms["forma"]["gender"].value;
    let gfield = document.getElementById("gender");
    let gcomment = document.getElementById("pgender");
    let gvalid = true;

    if (g == "") {
        document.getElementById("pgender").innerHTML = "gender not entered";
        gvalid = false;
        gfield.focus()
    };

    if (gvalid) {
        gcomment.innerHTML = "Ok";
        document.getElementById("pgender").classList.add("ok");
    } else {
        document.getElementById("pgender").classList.remove("ok");
    };


//COUNTRY VALIDATION

    let c = document.forms["forma"]["country"].value;
    let cfield = document.getElementById("country");
    let ccomment = document.getElementById("pcountry");
    let cvalid = true;

    if (c == "") {
        document.getElementById("pcountry").innerHTML = "country not entered";
        cvalid = false;
        cfield.focus();
    };

    if (cvalid) {
        ccomment.innerHTML = "Ok";
        document.getElementById("pcountry").classList.add("ok");
    } else {
        document.getElementById("pcountry").classList.remove("ok");
    };


//LANGUAGE VALIDATION

    let l1 = document.forms["forma"]["checkboxenglish"].checked;
    let l2 = document.forms["forma"]["checkboxother"].checked;
    let lfield1 = document.getElementById("checkboxenglish");
    let lfield2 = document.getElementById("checkboxother");

    let lcomment = document.getElementById("planguage");
    let lvalid = true;

console.log(l1);
console.log(l2);

    if (!l1 && !l2) {
        document.getElementById("planguage").innerHTML = "choose language";
        lvalid = false;
        lfield1.focus();
    };

    if (lvalid) {
        lcomment.innerHTML = "Ok";
        document.getElementById("planguage").classList.add("ok");
    } else {
        document.getElementById("planguage").classList.remove("ok");
    };

}
