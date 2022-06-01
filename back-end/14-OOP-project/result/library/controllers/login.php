<?php

/**
 * Class LoginController
 */
class LoginController {

	/**
	 * dit wordt meteen uitgevoerd bij het laden van dit bestand
	 */
	public function __construct(){			
		// het onderstaande wordt uitgevoerd wanneer de newscontroller
		// wordt aangeroepen

		// sessie starten indien deze nog niet bestaat   	
		if (!session_id()){	 session_start(); }			
		
		// roep de volgende methods aan
		$this->inloggen();
		$this->uitloggen();
	
	} // einde contructor-functie


	/**
	 * deze functie checkt of er op uitloggen is geklikt
	 * en stuurt je dan terug naar de home-pagina
	 * @return string   terug naar home-pagina
	 */
	public function uitloggen(){
		
		// indien er op 'uitloggen' is geklikt
		if (isset($_POST['logout'])){
		    
		    // vernietig dan de sessie
		    session_destroy();
		    // refresh pagina
		    echo "<meta http-equiv='refresh' content='0'>"; 			
		}
	} // einde functie


	/**
	 * Deze functie checkt of er een gebruikersnaam en wachtwoord is ingevoerd
	 * en pompt vervolgens de inloggegevens in de sessie	 * 
	 */
	public function inloggen(){
		// maak een nieuwe security-controller instance aan
		$securitycontroller = new SecurityController();

	    // als er een gebruikersnaam is ingevoerd en deze niet leeg is
	    if (isset($_POST['gebruikersnaam']) && !empty($_POST['gebruikersnaam'])
	    // EN als er een wachtwoord is ingevoerd en deze niet leeg is 
	    && isset($_POST['wachtwoord']) && !empty($_POST['wachtwoord'])){       
	    	
	        // pomp dan de gebruikersnaam van de POST-array naar de SESSION-array, zodat deze bewaard blijft totdat de browser gesloten wordt of totdat er op 'uitloggen' wordt geklikt
		    $_SESSION['gebruikersnaam'] = $_POST['gebruikersnaam'];
		    // en pomp het wachtwoord van de POST-array naar de SESSION-array, zodat deze bewaard blijft totdat de browser gesloten wordt of totdat er op 'uitloggen' wordt geklikt
		    $_SESSION['wachtwoord'] = $_POST['wachtwoord'];
		    // input opschonen om injecties te voorkomen
		    $_SESSION['gebruikersnaam'] = $securitycontroller->sanit_input($_SESSION['gebruikersnaam']);
		    $_SESSION['wachtwoord'] = $securitycontroller->sanit_input($_SESSION['wachtwoord']);
		    // ingelogd wordt op true gezet zodat we het later kunnen checken
		    $_SESSION['ingelogd'] = true;
	    }	    
	} // einde functie


	/**
	 * deze functie checkt of er is ingelogd
	 * @return boolean 
	 */
	public function isIngelogd(){
		if (isset($_SESSION['ingelogd'])){
			return true;
		}
		return false;
	} // einde functie

} // einde class LoginController