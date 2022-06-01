<?php
/**
 * Verbind met de database
 * @return \mysqli Object
 */
function connectToDB(){
	$_mysqli = new mysqli( DB_HOST, DB_USER, DB_PASS, DB_NAME );
	if ( $_mysqli->connect_errno ) {
		die ('<b style="font-size : 25px;">Failed to connect to database: ERROR ' . $_mysqli->connect_errno . '</b>');
	}
	return $_mysqli;
}

/**
 * Deze functie checkt of er een gebruikersnaam en wachtwoord is ingevoerd
 * @return BOOLEAN geeft true of false terug
 */
function logged_in(){
    // als er een gebruikersnaam is ingevoerd en deze niet leeg is
    if (isset($_POST['gebruikersnaam']) && !empty($_POST['gebruikersnaam'])
    // EN als er een wachtwoord is ingevoerd en deze niet leeg is 
    && isset($_POST['wachtwoord']) && !empty($_POST['wachtwoord'])){
        // geef dan een TRUE terug
        return true;
    }
    // anders: geef FALSE terug
    return false;
}

/**
 * Active Menu function
 *
 * @param  string   $test   bijvoorbeeld home, about, contact 
 * @return string			lege string of de active class
 */
function activeMenu($test){
    global $active;
    if ($active == $test){
        return ' class="active"';
    }
    return '';
}

/**
 * De sanit_input functie maakt een waarde die je niet zelf aangemaakt hebt veiliger
 *
 * @param  string	$value    De te sanitizen waarde
 * @return string
 */
function sanit_input($value){
    if (!empty($_POST)) {
        $value = trim($value);
		$value = htmlspecialchars($value);

        // remove the union, concat and information schema to prevent hacking
        $value = preg_replace(
            '/(union[\s\+]*?select)|(concat(_ws)?\s*?\()|(information_schema)| or /i',
            '',
            $value);

        return stripslashes($value);
    }
}