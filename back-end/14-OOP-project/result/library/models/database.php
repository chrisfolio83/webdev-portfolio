<?php
/**
 * Class DB - dit is het databasemodel
 */
class DatabaseModel {	
	
	/**
	 * Verbind met de database en geef een mysqli-object terug
	 * @return \mysqli Object
	 */
	protected function connect_db(){

		// maak een mysqli verbinding/object aan
		$mysqli_object = new mysqli(

			// onderstaande constanten zijn aan te passen in /library/settings.php			 
			DB_HOST	,   // database-server/-adres
			DB_USER	, 	// gebruikersnaam
			DB_PASS	, 	// wachtwoord
			DB_NAME		// databasenaam			
			);	

		// indien er een error optreedt:
		if ($mysqli_object->connect_errno) {
			// stoppen met uitvoeren en onderstaande error teruggeven
			die ('<b style="font-size : 25px;">Failed to connect to database: ERROR ' . $_mysqli->connect_errno . '</b>');
		}
		// en anders: het $mysqli_object terugggeven
		return $mysqli_object;

	} // einde functie	

} // einde class DatabaseModel