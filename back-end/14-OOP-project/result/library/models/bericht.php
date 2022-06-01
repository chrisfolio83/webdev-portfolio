<?php 

Class BerichtModel extends DatabaseModel {

	// variabelen tbv Dependency Injection
	private $db;
	private $secure;
	private $format;
	private $login;

	// andere variabele(n)
	private $query;


	/**
	 * de constructor: deze wordt aangeroepen bij het aanroepen/instantiëren van een class
	 */
	public function __construct(){
		// databasemodel-instance aanmaken tbv dependency injection
		$this->db 		= new DatabaseModel();
		// securitycontroller-instance aanmaken tbv dependency injection
		$this->secure 	= new SecurityController();
		// formatcontroller-instance aanmaken tbv dependency injection
		$this->format 	= new FormatController();
		// logincontroller-instance aanmaken tbv dependency injection
		$this->login 	= new LoginController();		
	} // einde constructor-functie


	/**
	 * deze functie update 1 nieuwitem na het opslaan vanuit de editfunctie
	 * @return Object  aanpassing in de DB
	 */
	public function updateItem($id, $titel, $content){
		// verbind met de database
		$mysqliObject 	= $this->db->connect_db();		
		// sanitize de titel-input
		$titel_san 		= $this->secure->sanit_input($titel);
		// sanitize de content-input
		$content_san 	= $this->secure->sanit_input($content);
		// query om bericht aan te passen
		$this->query 	= "UPDATE `nieuwsberichten` SET `titel`='$titel_san', `content`='$content_san' WHERE `id` LIKE $id";
		// stel de vraag aan het database object
		$mysqliResult 	= $mysqliObject->query($this->query);
	} // einde functie	


	/**
	 * deze functie update 1 nieuwitem na het opslaan vanuit de editfunctie
	 * @return Object  aanpassing in de DB
	 */
	public function deleteItem($id){		
		// verbind met de database
		$mysqliObject 	= $this->db->connect_db();
		// query om bericht aan te passen
		$this->query 	= "DELETE FROM `nieuwsberichten` WHERE `id` = $id";
		// stel de vraag aan het database object
		$mysqliResult 	= $mysqliObject->query($this->query);
	} // einde functie


	/**
	 * deze functie update 1 nieuwitem na het opslaan vanuit de editfunctie
	 * @return Object  aanpassing in de DB
	 */
	public function nieuwItem($titel, $content){		
		// verbind met de database
		$mysqliObject 	= $this->db->connect_db();
		// sanitize de titel-input
		$titel_san		= $this->secure->sanit_input($titel);
		// sanitize de content-input
		$content_san	= $this->secure->sanit_input($content);
		// formatteer de slug
		$slug 			= $this->format->slugify($titel_san);
		// query om bericht aan te passen
		$this->query 	= "INSERT INTO `nieuwsberichten` (`titel`,`content`,`url`) VALUES ('$titel_san','$content_san', '$slug' )";
		// stel de vraag aan het database object
		$mysqliResult	= $mysqliObject->query($this->query);
	} // einde functie

	public function getTitel($id){
		// verbind met de database
		$mysqliObject 	= $this->db->connect_db();
		// query om alle nieuwsberichten op te halen, gesorteerd op id
		$this->query 	= 'SELECT `titel` FROM `nieuwsberichten` WHERE `id` LIKE ' . $id;
		// stel de vraag aan het database object
		$mysqliResult 	= $mysqliObject->query($this->query);
		// fetch de associatieve array
		$bericht 		= $mysqliResult->fetch_assoc();
		// echo berichttitel
		return $bericht['titel'];
	}

	public function getContent($id){
		// verbind met de database
		$mysqliObject 	= $this->db->connect_db();
		// query om alle nieuwsberichten op te halen, gesorteerd op id
		$this->query 	= 'SELECT `content` FROM `nieuwsberichten` WHERE `id` LIKE ' . $id;
		// stel de vraag aan het database object
		$mysqliResult 	= $mysqliObject->query($this->query);
		// fetch de associatieve array
		$bericht 		= $mysqliResult->fetch_assoc();
		// echo berichttitel
		return $bericht['content'];
	}

	public function getPubDate($id){
		// verbind met de database
		$mysqliObject 	= $this->db->connect_db();
		// query om alle nieuwsberichten op te halen, gesorteerd op id
		$this->query 	= 'SELECT `publicatie_datum` FROM `nieuwsberichten` WHERE `id` LIKE ' . $id;
		// stel de vraag aan het database object
		$mysqliResult 	= $mysqliObject->query($this->query);
		// fetch de associatieve array
		$bericht 		= $mysqliResult->fetch_assoc();
		// echo berichttitel
		return $bericht['publicatie_datum'];
	}

	/**
	 * deze functie laat alle nieuwsitems zien
	 * @return Object  Het resultaat van de query
	 */
	public function getAllItems(){
		// verbind met de database
		$mysqliObject 	= $this->db->connect_db();
		// query om alle nieuwsberichten op te halen, gesorteerd op id
		$this->query 	= 'SELECT * FROM `nieuwsberichten` ORDER BY `id` DESC';
		// stel de vraag aan het database object
		$mysqliResult 	= $mysqliObject->query($this->query);
		// geef resultaat terug
		return $mysqliResult;

	} // einde functie

} // einde class BerichtModel