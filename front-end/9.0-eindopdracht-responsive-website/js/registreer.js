// ===============================
// BEGIN functie valideerForm()

// belangrijkste functie voor het valideren van alle input in het formulier
function valideerForm() {

    // initialiseren globale vars
    var correct = true; // houdt bij of er een fout is gemaakt
    var error = "ERRORS:\n"; // houdt eventuele errors bij
    var radioclicked = false; // houdt bij of een radiobutton is aangeklikt

    // haal de inhoud van de velden op...
    var man = document.getElementById("man");
    var vrouw = document.getElementById("vrouw");
    var voornaam = document.getElementById("voornaam").value;
    var tussenvoegsel = document.getElementById("tussenvoegsel").value;
    var achternaam = document.getElementById("achternaam").value;
    var bedrijfsnaam = document.getElementById("bedrijfsnaam").value;
    var geboortedatum = document.getElementById("geboortedatum").value;
    var straat = document.getElementById("straat").value;
    var huisnummer = document.getElementById("huisnummer").value;
    var postcode = document.getElementById("postcode").value;
    var nederland = document.getElementById("nederland").value;
    var anders = document.getElementById("anders").value;
    var andersveld = document.getElementById("andersveld").value;
    var telefoon = document.getElementById("telefoon").value;
    var email = document.getElementById("email").value;
    var wachtwoord = document.getElementById("wachtwoord").value;
    var wachtwoord2 = document.getElementById("wachtwoord2").value;
    var verstuurbtn = document.getElementById("verstuurbtn").value;
    var geslacht = document.getElementsByName('geslacht');


    // valideer geslacht-selectie    
    if (!$('input[name=geslacht]:checked').length > 0) {
        correct = false;
        error += "* kies een geslacht\n"; // tel deze string op bij de error var
    }

    // valideer de inhoud van voornaam
    if (voornaam.length <= 1) {
        correct = false;
        error += "* voer een geldige voornaam in\n"; // tel deze string op bij de error var
    }


    // valideer de inhoud van tussenvoegsel
    if (tussenvoegsel.length > 10) {
        correct = false;
        error += "* voer een geldig tussenvoegsel in\n"; // tel deze string op bij de error var
    }


    // valideer de inhoud van achternaam
    if (achternaam.length <= 1) {
        correct = false;
        error += "* voer een geldige achternaam in\n"; // tel deze string op bij de error var 
    }


    // valideer de inhoud van bedrijfsnaam
    if (bedrijfsnaam.length > 20) {
        correct = false;
        error += "* voer een geldige bedrijfsnaam in\n"; // tel deze string op bij de error var 
    }


    // valideer de inhoud van geboortedatum
    var resGeboortedatum = valideerGeboortedatum(geboortedatum);

    if (!resGeboortedatum) {
        correct = false;
        error += "* voer een geldige geboortedatum in\n"; // tel deze string op bij de error var   
    }


    // valideer de inhoud van straat
    if (straat.length <= 1) {
        correct = false;
        error += "* voer een geldige straat in\n"; // tel deze string op bij de error var 
    }


    // valideer de inhoud van huisnummer
    if (isNaN(huisnummer) || huisnummer < 1 || huisnummer.length > 5) {
        correct = false;
        error += "* voer een geldig huisnummer in\n"; // tel deze string op bij de error var 
    }


    // valideer de inhoud van postcode
    var resPostcode = valideerPostcode(postcode);

    if (!resPostcode) {
        correct = false;
        error += "* voer een geldige postcode in\n"; // tel deze string op bij de error var    
    }


    // valideer land-selectie    
    if (!$('input[name=land]:checked').length > 0) {
        correct = false;
        error += "* kies een land\n"; // tel deze string op bij de error var
    }


    // valideer het landnaamveld wanneer 'ander' is geselecteerd
    if ($('input[id=anders]:checked').length > 0 && andersveld.length <= 1) {
        correct = false;
        error += "* voer een geldig ander land in\n"; // tel deze string op bij de error var 
    }


    // valideer de inhoud van telefoon
    var resTelefoon = valideerTelefoon(telefoon);

    if (!resTelefoon) {
        correct = false;
        error += "* voer een geldig telefoonnummer in\n"; // tel deze string op bij de error var    
    }


    // valideer de inhoud van email
    var resEmail = valideerEmail(email);

    if (!resEmail) {
        correct = false;
        error += "* voer een geldig emailadres in\n"; // tel deze string op bij de error var    
    }


    // valideer de inhoud van wachtwoord
    var resWachtwoord = valideerWachtwoord(wachtwoord)

    if (!resWachtwoord || wachtwoord !== wachtwoord2) {
        correct = false;
        error += "* voer tweemaal eenzelfde complex wachtwoord in: minimaal 8 tekens, 1 hoofdletter, 1 leesteken, 1 cijfer"; // tel deze string op bij de error var
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

// FUNCTIE valideerGeboortedatum(geboortedatum) met regex 
function valideerGeboortedatum(geboortedatum) {
    var patroon = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    return patroon.test(geboortedatum);
}

// FUNCTIE valideerPostcode(postcode) met regex 
function valideerPostcode(postcode) {
    var patroon = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
    return patroon.test(postcode);
}

// FUNCTIE valideerTelefoon(telefoon) met regex 
function valideerTelefoon(telefoon) {
    var vast_nummer = /^(((0)[1-9]{2}[0-9][-]?[1-9][0-9]{5})|((\\+31|0|0031)[1-9][0-9][-]?[1-9][0-9]{6}))$/;
    var mobiel_nummer = /^(((\\+31|0|0031)6){1}[1-9]{1}[0-9]{7})$/i;
    return (vast_nummer.test(telefoon) || mobiel_nummer.test(telefoon));
}

// FUNCTIE valideerWachtwoord(wachtwoord) met regex 
function valideerWachtwoord(wachtwoord) {
    var patroon = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=\.\*_-])(?=\S+$).{8,}$/;
    return patroon.test(wachtwoord);
}
// ====== EINDE extra functies =================
// =============================================



// =======================================================
// ====== EVENTS wanneer formbutton wordt aangeklikt ======

document.getElementById("registreerform").onsubmit = valideerForm;