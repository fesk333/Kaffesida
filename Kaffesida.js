function validateForm(event) { 
    if (event) event.preventDefault();
    
    let form = document.forms["KaffeForm"];
    let x1 = document.forms["KaffeForm"]["namn"].value;
    let x2 = document.forms["KaffeForm"]["efternamn"].value;
    let x3 = document.forms["KaffeForm"]["ofta"];
    let x4 = document.forms["KaffeForm"]["inte_ofta"];
    let x5 = document.forms["KaffeForm"]["bittersur"].value;
    let x6 = document.forms["KaffeForm"]["mail"].value;
    let x7 = document.forms["KaffeForm"]["phone"].value;

    let mening = "Du saknar: ";
    let inteklar = false;
    if (x1 == "") {
        mening += "\n Ditt förnamn";
        inteklar = true;
    }
    if (x2 == "") {
        mening += "\n Ditt efternamn";
        inteklar = true;
    }
    if (!x3.checked && !x4.checked) {
        mening += "\n Om du dricker kaffe ofta";
        inteklar = true;
    }
    if (x5 == "") {
        mening += "\n Hur bittert/surt ditt kaffe är";
        inteklar = true;
    }
    if (x6 == "") {
        mening += "\n Din mail-adress";
        inteklar = true;
    }
    if (x7 == "") {
        mening += "\n Ditt telefon-nummer";
        inteklar = true;
    }

    if (inteklar == true) {
        alert(mening);
        return false;
    }

    if (inteklar == false) {
        mening = "Tack för dina svar!";
        alert(mening);
        return true;
    }
}