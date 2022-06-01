<?php

// error-reporting aan
ini_set( 'error_reporting', E_ALL );
ini_set( 'display_errors' , 1	  );

// haal de invoerwaarde/het te vermenigvuldigen getal op
$tafel	=  $_GET['result'];

?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Opdracht 4</title>
	<link rel="stylesheet" type="text/css" href="css/default.css">
</head>
<body>
	<h1>Lekker rekenen...</h1>	
	<form>
		<label for="getal">Voer een getal in: </label>
		<input type="number" name="getal" id="getal" autofocus>
		<input type="button" value="bereken tafel" id="bereken_btn">
	</form>
	<table>	
<?php
// Hieronder schrijf ik een loop die begint bij 1 en die doortelt tot
// 10 (kleiner dan 11). Voor iedere tel wordt er vermenigvuldigd
// met de variabele &tafel (deze komt vanuit het invoerveld op de 
// pagina na het klikken op de 'bereken tafel'-knop).

// begin de teller bij 1, eindig bij 10 en na iedere loop: 
// tel er 1 bij op
for ($i=1; $i < 11; $i++) {
	// pomp de uitkomst gefragmenteerd in tabelcellen voor mooie uitlijning	
	echo 	'<tr>'. 							"\n".		// BEGIN table row
				"<td>$i</td>". 					"\n".		// de teller/variabele
				'<td>x</td>'. 					"\n".		// het maal-teken [string]
				"<td>$tafel</td>". 				"\n".		// tafelgetal/constante
				'<td>=</td>'. 					"\n".		// het =-teken [string]
				'<td>'.($i*$tafel).'</td>'. 	"\n". 		// de formule
			'</tr>'. 							"\n";		// EINDE table row
}	
?>
</table>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>