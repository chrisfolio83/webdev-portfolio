<?php
/**
 * Class SecurityController
 */
class SecurityController {

	/**
	 * De sanit_input functie maakt een waarde die je niet 
	 * zelf aangemaakt hebt veiliger
	 *
	 * @param  string	$value    De te sanitizen waarde
	 * @return string
	 */
	public function sanit_input($value){
	    if (!empty($_POST)) {
	    	// spaties weghalen
	        $value = trim($value);
	        // speciale karakters weghalen tvv hacking
			$value = htmlspecialchars($value);

	        // remove the union, concat and information schema to prevent hacking
	        $value = preg_replace(
	            '/(union[\s\+]*?select)|(concat(_ws)?\s*?\()|(information_schema)| or /i',
	            '',
	            $value);

	        // slashes weghalen
	        stripslashes($value);

	        // returen de gesanitised input
	        return $value;
   		}
	} // einde functie

} // einde class SecurityController