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
    // haal ?logout weg uit de URL
    header( 'Location: ' . $_SERVER['PHP_SELF']);
}

/**
 * Deze functie checkt of er een gebruikersnaam en wachtwoord is ingevoerd
 * @return BOOLEAN geeft true of false terug
 */
function logged_in(){
    // als er een gebruikersnaam is ingevoerd en deze niet leeg is
    // EN als er een wachtwoord is ingevoerd en deze niet leeg is
    //  
    if (isset($_POST['gebruikersnaam']) && !empty($_POST['gebruikersnaam'])
        && isset($_POST['wachtwoord']) && !empty($_POST['wachtwoord'])) {
        // geef dan een TRUE terug
        return true;
    }
    // anders: geef FALSE terug
    return false;
}

// wanneer logged_in() true heeft gereturnd
if (logged_in()){
    // pomp dan de gebruikersnaam van de POST-array naar de SESSION-array, 
    // zodat deze bewaard blijft totdat de browser gesloten wordt of totdat 
    // er op 'uitloggen' wordt geklikt
    $_SESSION[  'gebruikersnaam'  ] = $_POST[  'gebruikersnaam' ];

    // en pomp het wachtwoord van de POST-array naar de SESSION-array, 
    // zodat deze bewaard blijft totdat de browser gesloten wordt of 
    // totdat er op 'uitloggen' wordt geklikt
    $_SESSION[  'wachtwoord'      ] = $_POST[  'wachtwoord'     ];

    // ingelogd wordt op true gezet zodat we het later kunnen checken
    $_SESSION[  'ingelogd'        ] = true ;
}

// indien ingelogd waar is
if (isset($_SESSION['ingelogd'])){
    // laat dan een bericht zien met gebruikersnaam (opgehaald uit SESSION-array) erin; ucfirst maakt de eerste letter uppercase
    // 
    echo '<p class="welkomtekst">Welkom ' . ucfirst($_SESSION['gebruikersnaam']) . '!</p>'. "\n" .'
            <p class="btn btn-info uitlogbtn"><a href=?logout>uitloggen</a></p>';

// en laat anders het inlogformulier zien
} else {
    // submit naar dezelfde pagina, eerst ontdoen van kwaadaardige tekens
    // giet daarna in variabele $phpaction
    $phpaction = htmlspecialchars($_SERVER['PHP_SELF']);

    // echo het formulier met daarin $phpaction opgenomen
    echo '<form class="navbar-form navbar-right" method="post" action="' . $phpaction . '" name="inlogform">'      . "\n" . '
                <div class="form-group">'                                                                          . "\n" . '
                    <input type="text" placeholder="Gebruikersnaam" class="form-control" name="gebruikersnaam">'   . "\n" . '
                </div>'                                                                                            . "\n" . '
                <div class="form-group">'                                                                          . "\n" . '
                    <input type="password" placeholder="Wachtwoord" class="form-control" name="wachtwoord">'       . "\n" . '
                </div>'                                                                                            . "\n" . '
                <button type="submit" class="btn btn-info">Inloggen</button>'                                      . "\n" . '
            </form>'                                                                                               . "\n" ;
}
?>