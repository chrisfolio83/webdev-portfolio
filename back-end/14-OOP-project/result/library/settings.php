<?php

##########################
######## DEBUG ###########
##########################
// debug aan
$debug = true;
// errors zien AAN
ini_set('display_errors', $debug);
// error_reporting: alles
error_reporting(E_ALL);


#########################
######## FEED ###########
#########################
// verspringingen
$br = "<br>\n";
$nl = "\n";
$tb = "\t";


#############################
######## DATABASE ###########
#############################
// DATABASE-instellingen
define ('DB_HOST', 'localhost'			);   	// 	server
define ('DB_USER', 'root'				);		// 	gebruikersnaam
define ('DB_PASS', 'root'				);		// 	wachtwoord
define ('DB_NAME', 'nieuwsberichten'	);		// 	database-naam


##################################
######## PADEN - begin ###########
##################################
// de library-root is dezelfde map als dit bestand
define('LIB_ROOT', 		realpath( __DIR__ ) 					);
// de site-root ligt een map hoger dan de library-root
define('SITE_ROOT',		realpath( LIB_ROOT . '/..' ) 			);
// de controllers-map in de library-root
define('CON_URL',		realpath( LIB_ROOT . '/controllers' ) 			);
// de models-map in de library-root
define('MOD_URL',		realpath( LIB_ROOT . '/models' ) 			);
// de views-map in de library-root
define('VW_URL',		realpath( LIB_ROOT . '/views' ) 			);
// de layout-map in de library/views-map
define('LAY_URL',		realpath( LIB_ROOT . '/views/layout' ) 			);


// haal de root-folder op aan de hand van $_SERVER['SCRIPT_FILENAME']
$rootfolder = explode('/', substr($_SERVER['SCRIPT_FILENAME'], strlen(SITE_ROOT)+1))[0];


// document-root is site-root/hoofdmap
define('DOCUMENT_ROOT',	realpath( SITE_ROOT . '/' . $rootfolder )	);

// definier de images-root-folder in document-root
define('IMG_ROOT',		realpath( DOCUMENT_ROOT . '/images' ) 		);

// definieer de includes-folder in de library-root
define('INC', 			realpath( LIB_ROOT . '/includes' ) 			);


// haal de eventuele waarde tbv document-root op en giet in $web_path var
$web_path = '';
if (DOCUMENT_ROOT !== $_SERVER['DOCUMENT_ROOT'])
	$web_path = substr(DOCUMENT_ROOT , strlen($_SERVER['DOCUMENT_ROOT']));

// auto-gebruik http of https
$scheme = (isset($_SERVER['REQUEST_SCHEME'])) ? $_SERVER['REQUEST_SCHEME'] . '://' : '//';

// WEB_URL definiëren obv protocol, link en web_path
define('WEB_URL', 	$scheme . $_SERVER['HTTP_HOST'] . $web_path	);


/////////////////////////////////////////////////////
// de SUBMAP-paden definiëren:
// 
// hier staan de images
define('IMG_URL', 	WEB_URL . '/images'			);

// hier staat de css
define('CSS_URL', 	WEB_URL . '/css'			);

// hier staat de javascript
define('JS_URL', 	WEB_URL . '/js'				);

// hier staan de subpagina's
define('PAGE_URL', 	WEB_URL . '/pages'			);
##################################
######## PADEN - einde ###########
##################################



############################################################
######## MODEL(S) en CONTROLLER(S) laden - begin ###########
############################################################

// laadt het database-model
require_once MOD_URL . 	'/database.php'		;

// laadt het bericht-model
require_once MOD_URL .  '/bericht.php'		;


// laadt de securitycontroller
require_once CON_URL . 	'/security.php'	;

// laadt de formatcontroller
require_once CON_URL . 	'/format.php'		;

// laadt de developer-controller
require_once CON_URL . 	'/dev.php'		;

// laadt de newscontroller
require_once CON_URL . 	'/main.php'		;

// laadt de logincontroller
require_once CON_URL . 	'/login.php'		;

// laadt de newscontroller
require_once CON_URL . 	'/news.php'		;

############################################################
######## MODEL(S) en CONTROLLER(S) laden - einde ###########
############################################################