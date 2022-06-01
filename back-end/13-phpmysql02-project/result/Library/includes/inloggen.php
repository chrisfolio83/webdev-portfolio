<?php
// als er geen sessie-id, dus geen sessie is
if (!session_id()){ 
    // dan een nieuwe sessie starten
    session_start();    
}


// indien er op 'uitloggen' is geklikt
if (isset($_GET['logout'])){
    // vernietig dan de sessie
    session_destroy();
    // gooi 'logout' uit de $_GET-array
    unset($_GET['logout']);
    // haal ?logout weg uit de URL en ga naar de beginpagina
    header( 'Location: '. '/');
}


// wanneer logged_in() true heeft gereturnd
if (logged_in()){
    // pomp dan de gebruikersnaam van de POST-array naar de SESSION-array, zodat deze bewaard blijft totdat de browser gesloten wordt of totdat er op 'uitloggen' wordt geklikt
    $_SESSION['gebruikersnaam'] = $_POST['gebruikersnaam'];
    // en pomp het wachtwoord van de POST-array naar de SESSION-array, zodat deze bewaard blijft totdat de browser gesloten wordt of totdat er op 'uitloggen' wordt geklikt
    $_SESSION['wachtwoord'] = $_POST['wachtwoord'];
    // ingelogd wordt op true gezet zodat we het later kunnen checken
    $_SESSION['ingelogd'] = true;
    // input opschonen om injecties te voorkomen
    $_SESSION['gebruikersnaam'] = sanit_input($_SESSION['gebruikersnaam']);
    $_SESSION['wachtwoord'] = sanit_input($_SESSION['wachtwoord']);
}


// indien $_SESSION['ingelogd'] is true
if (isset($_SESSION['ingelogd'])){
    // laat dan een bericht zien met gebruikersnaam (opgehaald uit SESSION-array) erin; ucfirst maakt de eerste letter uppercase
    echo '<p class="btn btn-info uitlogbtn"> 
            <a href=?logout>uitloggen</a>
        </p>
    <p class="welkomtekst">Welkom ' . ucfirst(trim($_SESSION['gebruikersnaam'])) . '!</p>
        ';
// laat anders het inlogformulier zien
} else {
    // wanneer er een waarde aan $_GET['id'] hangt
    if(isset($_GET['id'])){
        // vul dan de $extra-var met ?id= en daarachter de waarde van het id
        $extra = '?id=' . $_GET['id'];    
    } else {
        // en anders: vul $extra met een lege string
        $extra = '';
    }

    // submit naar dezelfde pagina, eerst sanitizen, voeg waarde in $extra-var toe en giet alles in $phpaction-variabele; deze wordt uitgevoerd on onderstaande formsubmit
    $phpaction = htmlspecialchars($_SERVER['PHP_SELF']) . $extra;
    
    // echo het formulier met daarin $phpaction opgenomen
    echo '<form class="navbar-form navbar-right" method="post" action="'. 
            $phpaction . '"name="inlogform">

            <div class="form-group">
                <input type="text" placeholder="Gebruikersnaam" class="form-control" name="gebruikersnaam" required>
            </div>

            <div class="form-group">
                <input type="password" placeholder="Wachtwoord" class="form-control" name="wachtwoord" required>
            </div>

            <button type="submit" class="btn btn-info">Inloggen</button>
        </form>';
}
?>