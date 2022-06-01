// ===============================
// BEGIN functie valideerForm()

// belangrijkste functie voor het valideren van alle input in het formulier
function valideerForm() {

    // initialiseren globale vars
    var correct = true; // houdt bij of er een fout is gemaakt
    var error = "ERRORS:\n"; // houdt eventuele errors bij
    var radioclicked = false; // houdt bij of een radiobutton is aangeklikt

    // haal de inhoud van de velden op...
    var naam = document.getElementById("naam").value;
    var email = document.getElementById("email").value;
    var bericht = document.getElementById("bericht").value;
    


    // valideer de inhoud van naam
    if (naam.length <= 1) {
        correct = false;
        error += "* voer een geldige naam in\n"; // tel deze string op bij de error var
    }

    
    // valideer de inhoud van email
    var resEmail = valideerEmail(email);

    if (!resEmail) {
        correct = false;
        error += "* voer een geldig emailadres in\n"; // tel deze string op bij de error var    
    }
    
    
    // valideer de inhoud van naam
    if (bericht.length < 50 || bericht.length > 1000) {
        correct = false;
        error += "* uw bericht mag 50-1000 tekens bevatten"; 
        // tel deze string op bij de error var
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
// ============== EXTRA FUNCTIE ==============
// ===========================================

// FUNCTIE valideerEmail(email) met regex
function valideerEmail(emailadres) {
    var patroon = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patroon.test(emailadres);
}
// ====== EINDE extra functies =================
// =============================================



// =======================================================
// ====== EVENTS wanneer formbutton wordt aangeklikt ======

document.getElementById("contactform").onsubmit = valideerForm;