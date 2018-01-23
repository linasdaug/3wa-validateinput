
function resetForm() {
    document.getElementById("forma").reset();
    document.getElementById("pusername").innerHTML = "";
    document.getElementById("pusername").classList.remove("ok");
    document.getElementById("ppassword").innerHTML = "";
    document.getElementById("ppassword").classList.remove("ok");
    document.getElementById("pname").innerHTML = "";
    document.getElementById("pname").classList.remove("ok");
    document.getElementById("pemail").innerHTML = "";
    document.getElementById("pemail").classList.remove("ok");
    document.getElementById("pgender").innerHTML = "";
    document.getElementById("pgender").classList.remove("ok");
    document.getElementById("planguage").innerHTML = "";
    document.getElementById("planguage").classList.remove("ok");
    document.getElementById("pzipcode").innerHTML = "";
    document.getElementById("pzipcode").classList.remove("ok");
    document.getElementById("prefix").innerHTML = "";
    document.getElementById("pabout").innerHTML = "";
    document.getElementById("pabout").classList.remove("ok");
    document.getElementById("pcountry").innerHTML = "";
    document.getElementById("pcountry").classList.remove("ok");
    document.getElementById("alert").classList.remove("alert-visible");
    document.getElementById("forma").classList.remove("form-submitted");
};


function changePasswordVisibility() {
    //SHOW PASSWORD

        let showpassword = document.forms["forma"]["password-visible"].checked;

        if (showpassword) {
            document.forms["forma"]["password"].setAttribute("type", "text");
        } else {
            document.forms["forma"]["password"].setAttribute("type", "password");
        };
}

function validateForm() {

// USERNAME VALIDATION

    let u = document.forms["forma"]["username"].value;
    let ufield = document.getElementById("username");
    let ucomment = document.getElementById("pusername");
    let uvalid = true;

    if (u == "") {
        ucomment.innerHTML = "user name not entered";
        uvalid = false;
    } else {

        if (!/\d/.test(u)) {
            ucomment.innerHTML = "user name must contain at least one number <br>";
            ufield.focus();
            uvalid = false;
        };

        if (u.length < 5 || u.length > 12) {
            ucomment.innerHTML = "user name must contain 5 to 12 characters";
            uvalid = false;
        };
    }
    if (uvalid) {
        ucomment.innerHTML = "Ok";
        document.getElementById("pusername").classList.add("ok");
        ufield.classList.remove("notvalid");
    } else {
        document.getElementById("pusername").classList.remove("ok");
    }


// PASSWORD VALIDATION

        let p = document.forms["forma"]["password"].value;
        let pfield = document.getElementById("password");
        let pcomment = document.getElementById("ppassword");
        pcomment.innerHTML = "";
        let pvalid = true;

    if (p == "") {
        pcomment.innerHTML = "password not entered";
        // pfield.focus();
        pvalid = false;
    }

 // !@#$%^&*()_+{}[]:"|;'\<>?,./`~-


    let testas = /[!@#$%^&*()_+{}[:"|;'<>?,./`~]/.test(p) || /\]/.test(p) || /\\/.test(p) || /\-/.test(p);

    if (!testas) {
        pcomment.innerHTML = "password must have at leat 1 special character like !@#$%^ etc.<br>";
        pvalid = false;
    }

    if (p.length < 7 || p.length > 12) {
        pcomment.innerHTML = pcomment.innerHTML + "password must contain 7 to 12 characters";
        pvalid = false;
    }

    if (pvalid) {
        pcomment.innerHTML = "Ok";
        document.getElementById("ppassword").classList.add("ok");
        pfield.classList.remove("notvalid");
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
    };

    if (!/[a-zA-Z ]/.test(n)) {
        ncomment.innerHTML = "name must contain only letters";
        nvalid = false;
    };

    if (nvalid) {
        ncomment.innerHTML = "Ok";
        document.getElementById("pname").classList.add("ok");
        nfield.classList.remove("notvalid");
    } else {
        document.getElementById("pname").classList.remove("ok");
    };

    if (nvalid && !/^[A-Z]/.test(n)) {
        n = n.charAt(0).toUpperCase() + n.slice(1);
        document.forms["forma"]["name"].value = n;
        ncomment.innerHTML = "First letter Capitalised";
    };



//EMAIL VALIDATION


let e = document.forms["forma"]["email"].value;
let efield = document.getElementById("email");
let ecomment = document.getElementById("pemail");
let evalid = true;


if (e == "") {
    ecomment.innerHTML = "e-mail not entered <br>";
    evalid = false;
    document.forms["forma"]["email"].classList.add("focused");
} else if (!/\b^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$\b/.test(e)) {
    ecomment.innerHTML = "please enter valid e-mail";
    evalid = false;
    document.forms["forma"]["email"].classList.add("focused");
};

if (evalid) {
    ecomment.innerHTML = "Ok";
    document.getElementById("pemail").classList.add("ok");
    efield.classList.remove("notvalid");
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
    };

    if (cvalid) {
        ccomment.innerHTML = "Ok";
        document.getElementById("pcountry").classList.add("ok");
        cfield.classList.remove("notvalid");
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
    } else if (!/^\d+$/.test(z)) {
        zcomment.innerHTML = "ZIP must contain only numbers <br>";
        zvalid = false;
    };

    switch (c) {
        case ("lithuania" || "estonia" || "finland"):
            if (!/^\d{5}$/.test(z)) {
                zcomment.innerHTML = "ZIP must contain 5 numbers <br>";
                zvalid = false;
            };
            break;
        case "latvia":
            if (!/^\d{4}$/.test(z)) {
                zcomment.innerHTML = "ZIP must contain 4 numbers <br>";
                zvalid = false;
            };
            break;
    };


    if (zvalid) {
        zcomment.innerHTML = "Ok";
        document.getElementById("pzipcode").classList.add("ok");
        zfield.classList.remove("notvalid");
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
    };

    if (lvalid) {
        lcomment.innerHTML = "Ok";
        document.getElementById("planguage").classList.add("ok");
    } else {
        document.getElementById("planguage").classList.remove("ok");
    };

//"ABOUT" VALIDATION

let a = document.forms["forma"]["about"].value;
let afield = document.getElementById("about");
let acomment = document.getElementById("pabout");
let avalid = true;

if (a == "") {
    acomment.innerHTML = "please put some comments";
    avalid = false;
};

if (avalid) {
    acomment.innerHTML = "Ok";
    document.getElementById("pabout").classList.add("ok");
    afield.classList.remove("notvalid");
} else {
    document.getElementById("pabout").classList.remove("ok");
};


//FOCUSING


// if (!gvalid) {gfield.focus()};

if (!avalid) {afield.focus(); afield.classList.add("notvalid")};
if (!lvalid) {lfield1.focus()};
if (!gvalid) {gfield.focus()};
if (!evalid) {efield.focus(); efield.classList.add("notvalid")};
if (!zvalid) {zfield.focus(); zfield.classList.add("notvalid")};
if (!nvalid) {nfield.focus(); nfield.classList.add("notvalid")};
if (!pvalid) {pfield.focus(); pfield.classList.add("notvalid");};
if (!uvalid) {ufield.focus(); ufield.classList.add("notvalid")};

if (!avalid || !lvalid || !gvalid || !evalid || !zvalid || !nvalid || !pvalid || !uvalid) {
    document.getElementById("alert").classList.remove("alert-visible");
    document.getElementById("forma").classList.remove("form-submitted");
};


if (avalid && lvalid && gvalid && evalid && zvalid && nvalid && uvalid) {
    document.getElementById("forma").classList.add("form-submitted");
    document.getElementById("alert").classList.add("alert-visible");
    alert("FORM SUBMITTED!");
}




    //  if (!lvalid) {lfield1.focus()};




}
