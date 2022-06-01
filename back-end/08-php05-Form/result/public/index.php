<?php
// debug aan
$debug = true;
// errors zien AAN
ini_set('display_errors', $debug);
// error_reporting: alles
error_reporting(E_ALL);

// een array met auto's maken
$autos = ['Audi','Volvo','Fiat'];

// als er gegevens staan in $_POST, dan custom message weergeven, 
// anders standaard tekst weergeven
if ($_POST){
	$var_tekstveld = $_POST['tekstveld'];
	$var_auto = "je hebt gekozen voor een {$_POST['kies_auto']}";
} else {
	$var_tekstveld = 'gast';
	$var_auto = 'je hebt nog geen auto gekozen';
};

/**
 * sanitInput controleert en saniteert de waarde van een formulierveld
 * @param  string $naamVeld naam van het veld
 * @return string           waarde van het veld of lege string
 */
function sanitInput($naamVeld){
	if ( isset($_POST[$naamVeld]) && !empty($_POST[$naamVeld]) ) {
		// haal eventuele spaties weg
		$sanit_out = trim( $_POST[$naamVeld] );
		// haal speciale tekens weg die code kunnen uitvoeren
		$sanit_out = htmlspecialchars($sanit_out);
		
		// haal de union, concat en information schema commando's weg tegen hackers
		$sanit_out = preg_replace(
        '/(union[\s\+]*?select)|(concat(_ws)?\s*?\()|(information_schema)| or /i',
        '', $sanit_out);

    	// slashes eraf strippen
        return stripslashes($sanit_out);
	}
	return '';
}

/**
 * testOption controleert een select option
 * @param  string $naamVeld naam van het veld
 * @param  string $value    waarde van het veld
 * @return string           selected of lege string
 */
function testOption($naamVeld, $value){
	if ( isset($_POST[$naamVeld]) && !empty($_POST[$naamVeld]) && $value == $_POST[$naamVeld] ) {
		return ' selected ';
	}
	return '';
}

?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WDV - Opdracht 8</title>
	<style>
		* {
			font-family: monospace;
		}
	</style>
</head>
<body>
	<!-- eventuele variabelen vullen -->	
	<?="<h1>Hallo $var_tekstveld, $var_auto</h1>"?>
	<!-- beveilig de gegevens tegen misbruik en gebruik POST -->
	<form action="<?= htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" name="myForm" id="myForm">
		<label for="tekstveld">Voer naam in: </label>
		<input type="text" name="tekstveld" id="voornaam" value="<?= sanitInput('tekstveld'); ?>" required placeholder="-- uw naam --">
		
		<label for="kies_auto">Kies auto: </label>
		<select name="kies_auto">
			<!-- vul het menu met opties vanuit de $autos-array -->
			<option value="" disabled selected hidden>-- maak keuze --</option>
			<option value="<?=$autos[0]?>" <?= testOption('kies_auto',$autos[0]) ?>><?=$autos[0]?></option>
			<option value="<?=$autos[1]?>" <?= testOption('kies_auto',$autos[1]) ?>><?=$autos[1]?></option>
			<option value="<?=$autos[2]?>" <?= testOption('kies_auto',$autos[2]) ?>><?=$autos[2]?></option>
		</select>

		<label for="verstuur"></label>
		<input type="submit" name="verstuur" id="verstuur" value="Verstuur"> 
	</form>
</body>
</html>