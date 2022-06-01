<?php

// error-reporting aan
ini_set( 'error_reporting', E_ALL );
ini_set( 'display_errors' , 1	  );

// variabele vullen met string
$myVar 	= 	'zomaar iets';

// variabele vullen met string (een html-break-tag in dit geval)
$br 	= 	'<br />';

?><!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Opdracht 3</title>
	</head>
	<body>
<?php

// oefenen met echo's en concatenate (het puntje)	
echo '<p>De inhoud van mijn variabele is: ' . '<b>' . $myVar 		 . '</b></p>' . "\n";
// break
echo $br . "\n";
// gettype() haalt het datatype op van het argument; in dit geval string
echo '<p>Het type van mijn variabele is: ' . '<b>' . gettype($myVar) . '</b></p>' . "\n";

?>
	</body>
</html>