<?php
/**
 * Class NewsController
 */
class NewsController {	

	// variabelen tbv Dependency Injection
	private $logincontroller;
	private $berichtmodel;

	/**
	 * de constructor: deze wordt aangeroepen bij het aanroepen/instantiëren van een class
	 */
	public function __construct(){		
		$this->logincontroller 	= new LoginController();
		$this->berichtmodel 	= new BerichtModel();				
	} // einde contructor-functie


	/**
	 * deze functie laat de juiste view zien obv key/values in de GET-array
	 * @return [string] [de/het juiste include/viewobject laden]
	 */
	public function invoke(){
		// als er geen GET-id is..
		if (! isset($_GET['id']) ){
			// ..toon dan het nieuwsoverzicht
			return require_once VW_URL . '/news-item/news-overview.php';
		}
		// wanneer er geklikt is op de AANPASSEN-knop..
		elseif ( isset($_GET['do']) && $_GET['do']=='edit' ) {
		    // ..laadt dan:
		    return require_once VW_URL . '/news-item/news-item-aanpassen.php';     
		}
		// wanneer er geklikt is op de NIEUW-bericht-knop.. 
		elseif ( isset($_GET['do']) && $_GET['do']=='new' ) {
		    // ..laadt dan:
		    return require_once VW_URL . '/news-item/news-item-nieuw.php';
		}
		// en anders: laat het bericht zien (o.b.v. GET-id)
		else {   
			return require_once VW_URL . '/news-item/news-item-show.php';		
		
		} // einde conditional
	} // einde functie


	/**
	 * deze functie past/post (nieuwe) posts (aan) obv waarden in de POST-array
	 */
	public function CRUD(){
		// als titel of inhoud zijn aangepast, stuur deze dan door naar de updateItem-functie
		if( isset($_POST['titel-aangepast']) && isset($_POST['inhoud-aangepast']) ) {
		    // de updateItem-functie uitvoeren..
		    $this->berichtmodel -> updateItem(
		    	// ..en geef het id, de aangepaste titel en de aangepaste inhoud mee als argumenten 
		        $_POST['id'              ] , 
		        $_POST['titel-aangepast' ] , 
		        $_POST['inhoud-aangepast'] 
		    );		    
			// REFRESH de pagina
			// 
			echo "<meta http-equiv='refresh' content='0'>";
		} // einde if

		// als titel of inhoud zijn toegevoegd, stuur deze dan door naar de nieuwItem-functie en ga naar de rootpagina
		if( isset($_POST['titel-nieuw']) && isset($_POST['inhoud-nieuw']) ) {
		    // de nieuwItem-functie uitvoeren..
		    $this->berichtmodel -> nieuwItem(
		    	// .. en geef de nieuwe titel en de nieuwe inhoud mee als argumenten
		    	$_POST['titel-nieuw' ] , 
		    	$_POST['inhoud-nieuw']
		    );
		    // ga vervolgens naar homepagina (forceert tevens een refresh)
		   	header('Location: ' . '/');
		} // einde if

		// wanneer er geklikt is op de VERWIJDEREN-knop, doe dan het volgende
		if( isset($_GET['do']) && $_GET['do']=='delete' )  {
		    // item verwijderen obv id (geef het id mee als argument)
		    $this->berichtmodel -> deleteItem($_GET['id']);
		    // ga vervolgens naar de homepagina (forceert tevens een refresh)
		    header( 'Location: ' . '/' );
		} // einde if

	} // einde functie
	

	/**
	 * deze functie laadt het editor-buttons viewobject als er is ingelogd
	 * @return string 
	 */
	public function showEditorButtons(){
		// Wanneer er is ingelogd...
		if( $this->logincontroller->isIngelogd() ){
			// ...laat dan de editor-knoppen zien
			return require_once LAY_URL . '/editor-buttons.php';
		// Wanneer er NIET is ingelogd...             
	    } else {	        
	        // ...een lege string teruggeven
	        return '';
	    }
	} // einde functie

} // einde class NewsController