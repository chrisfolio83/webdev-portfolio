// ===============================
// BEGIN functie valideerForm()

// belangrijkste functie voor het valideren van alle input in het formulier
function valideerForm() {

    // initialiseren globale vars
    var correct = true; // houdt bij of er een fout is gemaakt
    var error = "ERRORS:\n"; // houdt eventuele errors bij

    // haal de inhoud van de velden op...
    var email = document.getElementById("email").value;
    var wachtwoord = document.getElementById("wachtwoord").value;
    var verstuurbtn = document.getElementById("verstuurbtn").value;



    // valideer de inhoud van email
    var resEmail = valideerEmail(email);

    if (!resEmail) {
        correct = false;
        error += "* voer een geldig emailadres in\n"; // tel deze string op bij de error var    
    }


    // valideer de inhoud van wachtwoord
    var resWachtwoord = valideerWachtwoord(wachtwoord)

    if (!resWachtwoord) {
        correct = false;
        error += "* voer het juiste wachtwoord in"; // tel deze string op bij de error var
    }


    // === als ALLES GOED is verstuur dan het formulier ====
    if (!correct) { // correct == false
        alert(error); // eerst de alert, dan pas de return false
        return false;
    } else {
        return true;
    }
}
// EINDE functie valideerForm()
// ===========================================


// ===========================================
// ============== EXTRA FUNCTIES =============
// ===========================================

// FUNCTIE valideerEmail(email) met regex
function valideerEmail(emailadres) {
    var patroon = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patroon.test(emailadres);
}


// FUNCTIE valideerWachtwoord(wachtwoord) met regex 
function valideerWachtwoord(wachtwoord) {
    var patroon = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=\.\*_-])(?=\S+$).{8,}$/;
    return patroon.test(wachtwoord);
}
// ====== EINDE extra functies =================
// =============================================



// =======================================================
// ====== EVENT wanneer formbutton wordt aangeklikt ======
document.getElementById("aanmeldform").onsubmit = valideerForm;
