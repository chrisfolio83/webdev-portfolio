<?php

// error-reporting aan
ini_set( 'error_reporting', E_ALL );
ini_set( 'display_errors' , 1	  );

?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Opdracht 5</title>
	<link rel="stylesheet" type="text/css" href="default.css">	
</head>
<body>
<?php
// afronden op hoeveel decimalen?
$decimals = 2;

// de titel weergeven in een HTML-h1
echo '<h1>Opdracht 5</h1>';


#########
##  1. ##
#########
// hoeveel is X?
$x1 = 6;
// uitkomst berekenen
$uitkomst1 = (-2 + 4) * (25 * 9 + 26) + 25 * $x1;
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo "<p>(-2 + 4) * (25 * 9 + 26) + 25 * $x1 = " . $uitkomst1 . '</p>'; 


#########
##  2. ##
#########
// uitkomst berekenen
$uitkomst2 = -2 + 4 * 25 * 9 + 26 + 25 * 6;
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo '<p>-2 + 4 * 25 * 9 + 26 + 25 * 6 = ' . $uitkomst2 . '</p>';


#########
##  3. ##
#########
// negen maal 758 is?
$uitkomst3 = 9 * 758;
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo '<p>9 * 758 = ' . $uitkomst3 . '</p>';


#########
##  4. ##
#########
// 14 gedeeld door 58 is?
$uitkomst4 = 14 / 58;
// de float-notatie aanpassen aan NL en met X decimalen weergeven
$uitkomst4NL = number_format($uitkomst4, $decimals, ',', '');
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo '<p>14 / 58 = ' . $uitkomst4NL . '</p>';


#########
##  5. ##
#########
// 345 maal 2 plus 7, waarbij eerst 2 en 7 opgeteld worden
$uitkomst5 = 345 * (2 + 7);
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo '<p>345 * (2 + 7) = ' . $uitkomst5 . '</p>';


#########
##  6. ##
#########
// 40 minus het resultaat van 3 maal drie
$uitkomst6 = 40 - (3 * 3);
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo '<p>40 - (3 * 3) = ' . $uitkomst6 . '</p>';


#########
##  7. ##
#########
// 2 tot de macht 12
$uitkomst7 = pow(2, 12);
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo '<p>2 ^ 12 = ' . $uitkomst7 . '</p>';


#########
##  8. ##
#########
// De som van het resultaat van 2,4 tot de macht 2 en het resultaat 
// van 5 maal 1,9
$uitkomst8 = pow(2.4, 2) + (5 * 1.9);
// de float-notatie aanpassen aan NL en met X decimalen weergeven
$uitkomst8NL = number_format($uitkomst8, $decimals, ',', '' );
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo '<p>2,4 ^ 2 + 5 * 1,9 = ' . $uitkomst8NL . '</p>';


#########
##  9. ##
#########		
// De som van 100 en het resultaat van negen en een half gedeeld 
// door drieëndertig
$uitkomst9 = 100 + 9.5 / 33;
// de float-notatie aanpassen aan NL en met X decimalen weergeven
$uitkomst9NL = number_format($uitkomst9, $decimals, ',', '');
// de gehele som en uitkomst weergeven in een HTML-paragraph
echo '<p>100 + 9,5 / 33 = ' . $uitkomst9NL . '</p>';
?>
</body>
</html>