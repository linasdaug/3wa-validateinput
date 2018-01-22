// document.getElementById("btn").addEventListener("click", validateForm());

function resetForm() {
    document.getElementById("forma").reset();
}



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
            ucomment.innerHTML = "user name must contain at least one number <br>";
            ufield.focus();
            uvalid = false;
        }

        if (u.length < 5 || u.length > 12) {
            ucomment.innerHTML = "user name must contain 5 to 12 characters";
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
        pcomment.innerHTML = "";
        let pvalid = true;


    if (p == "") {
        pcomment.innerHTML = "password not entered";
        pfield.focus();
        pvalid = false;
    }

 // !@#$%^&*()_+{}[]:"|;'\<>?,./`~

    // testas = /\(/.test(p) || /\)/.test(p) || /\!/.test(p) || /\@/.test(p) || /\#/.test(p) || /\$/.test(p) || /\%/.test(p) || /\^/.test(p) || /\&/.test(p);
    // testas = testas || /\*/.test(p) || /\_/.test(p) || /\-/.test(p) || /\+/.test(p) || /\=/.test(p) || /\[/.test(p) || /\{/.test(p) || /\\/.test(p) || /\|/.test(p);
    // testas = testas || /\:/.test(p) || /\;/.test(p) || /\'/.test(p) || /\"/.test(p) || /\}/.test(p) || /\]/.test(p) || /\</.test(p) || /\,/.test(p) || /\>/.test(p);
    // testas = testas || /\./.test(p) || /\?/.test(p) || /\//.test(p) || /\`/.test(p) || /\~/.test(p);
    testas = /[!@#$%^&*()_+{}[:"|;'<>?,./`~]/.test(p) || /\]/.test(p) || /\\/.test(p);

    if (!testas) {
        pcomment.innerHTML = "password must have at leat 1 special character like !@#$%^ etc.<br>";
        pfield.focus();
        pvalid = false;
    }

    if (p.length < 7 || p.length > 12) {
        pcomment.innerHTML = pcomment.innerHTML + "password must contain 7 to 12 characters";
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



//EMAIL VALIDATION

let e = document.forms["forma"]["email"].value;
let efield = document.getElementById("email");
let ecomment = document.getElementById("pemail");
let evalid = true;


if (e == "") {
    ecomment.innerHTML = "e-mail not entered <br>";
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

//COUNTRY PREFIX FOR ZIPCODE

    let pref;

    switch (c) {
        case "lithuania":
            pref = "LT -";
            break;
        case "latvia":
            pref = "LV -";
            break;
        case "estonia":
            pref = "EE -";
            break;
        case "finland":
            pref = "FI -";
            break;
        default:
            pref = ""
    };

    document.getElementById("prefix").innerHTML = pref;


//ZIPCODE VALIDATION

    let z = document.forms["forma"]["zipcode"].value;
    let zfield = document.getElementById("zipcode");
    let zcomment = document.getElementById("pzipcode");
    let zvalid = cvalid;

    if (cvalid == false) {
        zfield.innerHTML = "";
        zcomment.innerHTML = "Country not selected <br>";
    }

    if (z == "") {
        zcomment.innerHTML = "ZIP code not entered <br>";
        zvalid = false;
        zfield.focus();
    } else if (!/^\d+$/.test(z)) {
        zcomment.innerHTML = "ZIP must contain only numbers <br>";
        zvalid = false;
        zfield.focus();
    };

    switch (c) {
        case ("lithuania" || "estonia" || "finland"):
            if (!/^\d{5}$/.test(z)) {
                zcomment.innerHTML = "ZIP must contain 5 numbers <br>";
                zvalid = false;
                zfield.focus();
            };
            break;
        case "latvia":
            if (!/^\d{4}$/.test(z)) {
                zcomment.innerHTML = "ZIP must contain 4 numbers <br>";
                zvalid = false;
                zfield.focus();
            };
            break;
    };


    if (zvalid) {
        zcomment.innerHTML = "Ok";
        document.getElementById("pzipcode").classList.add("ok");
    } else {
        document.getElementById("pzipcode").classList.remove("ok");
    };


//LANGUAGE VALIDATION

    let l1 = document.forms["forma"]["checkboxenglish"].checked;
    let l2 = document.forms["forma"]["checkboxother"].checked;
    let lfield1 = document.getElementById("checkboxenglish");
    let lfield2 = document.getElementById("checkboxother");

    let lcomment = document.getElementById("planguage");
    let lvalid = true;

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
