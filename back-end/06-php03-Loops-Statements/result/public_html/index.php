<?php

// error-reporting aan
ini_set( 'error_reporting', E_ALL );
ini_set( 'display_errors' , 1	  );

?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Opdracht 6</title>
	<link rel="stylesheet" type="text/css" href="css/default.css">	
</head>
<body>
<h1>Opdracht 6</h1>
<table>
<?php

/* tafel van welk getal tonen? voer getal in.. */
toonTafel(12);

/**
 * Deze functie laat de tafel van een vooraf bepaald getal zien
 * @param  number $tafel geef hier het 'tafel-van-getal' op
 * @return string        het resultaat is een tabel met uitkomsten
 */
function toonTafel($tafel){
	// globale var aanmaken tbv welke tafel wordt getoond	
	global $getoonde_tafel;
	$getoonde_tafel = $tafel;
	// weergeven vanaf welk getal?
	$vanaf = 33;
	// hoeveel rijen maximaal weergeven?
	$rijen_max = 67;
	// bereik 	
	$totenmet = $vanaf + $rijen_max;
	// globale var aanmaken en init van aantal_rijen teller
	global $aantal_rijen;
	$aantal_rijen = 0;

	// init for-loop
	for ($i=$vanaf; $i < ($totenmet); $i++, $aantal_rijen++) {
		// sla over als de uitkomst 420 is OF het maalgetal 41 is
		if($i * $tafel == 420 || $i == 41) {
			// trek voor iedere overgeslagen stap een rij eraf
			$aantal_rijen--;
			// overslaan
			continue;			
		// laat niets meer zien als de uitkomst groter is dan 790
		} elseif ($i * $tafel > 790) {
			// functie afbreken
			break;
		}

		echo '<tr>'.							"\n".	  // BEGIN table row
				"<td>$i</td>".					"\n".	  // de teller/variabele
				'<td>x</td>'.					"\n".	  // het maal-teken [string]
				"<td>$tafel</td>". 				"\n".	  // tafelgetal/constante
				'<td>=</td>'.					"\n".	  // het =-teken [string]
				'<td>'.($i*$tafel).'</td>'. 	"\n".	  // de formule
			'</tr>'. 							"\n";	  // EINDE table row			
		} // einde for-loop
	} // einde function toonTafel()
?>
</table>
<?php
// laat aantal rijen en weergegeven tafel zien
echo "<br>\n<p>Aantal getoonde rijen: <span class='bold'>$aantal_rijen</span></p>
<p>Getoonde tafel van: <span class='bold'>$getoonde_tafel</span></p>";
?>
</body>
</html>