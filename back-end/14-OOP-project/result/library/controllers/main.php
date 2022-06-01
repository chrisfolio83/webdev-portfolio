<?php

/**
 * Class MainController
 */
class MainController {

	/**
	 * deze functie checkt of er een get-id bestaat en geeft deze
	 * terug in de form-action
	 * @return string  de action die wordt teruggegeven
	 */
	public function phpAction(){
		// wanneer er een waarde aan $_GET['id'] hangt
	    if(isset($_GET['id']) && $_GET['id'] != 999999999){
	        // vul dan de $extra-var met ?id= en daarachter de waarde van het id
	        $extra = '?id=' . $_GET['id'];    
	    } else {
	        // en anders: vul $extra met een lege string
	        $extra = '';
    	}

	    // submit naar dezelfde pagina, eerst sanitizen, voeg waarde in $extra-var toe en giet alles in $phpaction-variabele; deze wordt uitgevoerd on onderstaande formsubmit
	    $phpaction = htmlspecialchars($_SERVER['PHP_SELF']) . $extra;
		
		// geef terug
	    return $phpaction;
	} // einde functie


	/**
	 * Active Menu function
	 *
	 * @param  string   $test   bijvoorbeeld home, about, contact 
	 * @return string			lege string of de active class
	 */
	public function activeMenu($test){
		// haal de waarde van global-var $active op
	    global $active;
	    // check of de waarde van $active gelijk is aan de waarde van de $test-parameter
	    if ($active == $test){
	    	// indien gelijk, geef dan een class active terug
	        return ' class="active"';
	    }
	    // indien niet gelijk, dan niks teruggeven
	    return '';
	} // einde functie

} // einde class MainController