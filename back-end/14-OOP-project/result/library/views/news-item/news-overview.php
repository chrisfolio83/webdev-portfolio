<?php
// nieuwe newscontroller laden
$berichtmodel 	= new BerichtModel();
// nieuwe formatcontroller laden
$format 		= new FormatController();

// haal DB-object met alle berichten op
$allitems 	= $berichtmodel -> getAllItems();     

echo 
'<form action="">' . "\n";
// loop alle rijen van de assocatieve array af..
while ( $row 	= 	$allitems -> fetch_assoc() ) {	
	// en pomp voor iedere rij de titel, content en id in de div
	echo
	'<div class="col-lg-4 bericht">'												. "\n" .
		// de titel ophalen en eerste letter naar hoofdletter omzetten   
		'<h2>' 	. ucfirst( $row['titel'] ) 								. '</h2>' 	. "\n" .
		// datum ophalen en aanpassen/anders formatteren
		'<p>' 	. $format -> formatDate( $row['publicatie_datum'] ) 	. '</p>' 	. "\n" .
		// de artikel-inhoud ophalen en hier de eerste 200 tekens van laten zien
		// en de eerste letters wordt een hoofdletter
		'<p>' 	. substr( ucfirst( $row['content'] ), 0, 200 ) . '...' 	. '</p>' 	. "\n" .
		// het unieke id aan de lees-meer-knop hangen
		'<button type="submit" name="id" value="'. $row['id'] .'">lees meer</button>' . "\n" . 
	'</div>' . "\n";
}
echo '</form>';