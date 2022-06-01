<?php

// de id-waarde resetten
unset($_GET['id']);

// het databaseobject ophalen
$mysqliObject = connectToDB();

// query om alle nieuwsberichten op te halen, gesorteerd op id
$query = 'SELECT * FROM `nieuwsberichten` ORDER BY `id`';

// stel de vraag aan het database object
$mysqliResult = $mysqliObject->query($query);


// bericht.php de waarden laten ontvangen
echo '<form action="bericht.php">' . "\n";
// loop alle rijen van de assocatieve array af
while ($row = $mysqliResult->fetch_assoc() ){
	// en pomp titel, content in de div	
	echo
	'<div class="col-lg-4 bericht">' 													."\n". 
		'<h2>' . $row['titel'] . '</h2>' 												."\n". 
		'<p>' .	substr( $row['content'], 0, 200 ) . '...' . '</p>' 						."\n".
		// de leesmeer-knop bevat een uniek id welke zal worden 
		// toegevoegd aan de URL om later het juiste bericht op te kunnen halen
		'<button type="submit" name="id" value="'. $row['id'] .'">lees meer</button>' 	."\n". 
	'</div>' . "\n";
}
echo '</form>';