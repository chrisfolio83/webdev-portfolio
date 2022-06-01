<?php

/**
 * Class FormatController
 */
class FormatController {

	/**
	 * deze functie verandert de format van datum-tijd-weergave
	 * @param  string $input  de datetime-string vanuit de database
	 * @return string         de nieuwe date-time-string
	 */
	public function formatDate($input = ''){
		// volgorde waarin datum-/tijd wordt weergegeven
		$theFormat = 'H:i:s' . ' | ' . 'd-m-Y';
		// als $input niet leeg is
		if (!empty($input)){
			// creëer nieuw datetime-object vanuit $input
			$date = new DateTime($input);
			// formatteer naar gewenste output
			$date = $date->format($theFormat);
			// output teruggeven
			return $date;
		} else {
			// creëer nieuw datetime-object
			$datenow = new DateTime();
			// formatteer naar gewenste output
			$datenow = $datenow->format($theFormat);
			// output teruggeven
			return $datenow;			
		}
	} // einde functie


	/**
	 * zet een door de gebruiker ingevoerde titel om naar een goede slug
	 * @param  string  $text  ingevoerde titel
	 * @return string      	  leesbare slug
	 */
	public static function slugify($text){
		  // vervang niet-letters en cijfers door -
		  $text = preg_replace('~[^\pL\d]+~u', '-', $text);
		  // translitereren
		  $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
		  // bepaalde tekens weghalen
		  $text = preg_replace('~[^-\w]+~', '', $text);
		  // trimmen
		  $text = trim($text, '-');
		  // duplicaten verwijderen
		  $text = preg_replace('~-+~', '-', $text);
		  // naar kleine letters
		  $text = strtolower($text);

		  // als er geen text is
		  if (empty($text)) {
		  	// geef dan 'n-a' (not available) terug
		    return 'n-a';
		  }
		  
		  // de netjes geformatteerde slug teruggeven
		  return $text;
	} // einde functie

} // einde class FormatController