<?php
// debug aan
$debug = true;
// errors zien AAN
ini_set('display_errors', $debug);
// error_reporting: alles
error_reporting(E_ALL);

// verspringingen
$br = "<br>\n";
$nl = "\n";
$tb = "\t";


// database-instellingen
define ('DB_HOST', 'localhost'			);
define ('DB_USER', 'root'				);
define ('DB_PASS', 'root'				);
define ('DB_NAME', 'cmm_nieuwsberichten');



##################################
######## PADEN - begin ###########
##################################
// de library-root is dezelfde map als dit bestand
define('LIB_ROOT', 		realpath( __DIR__ ) 					);
// de site-root ligt een map hoger dan de library-root
define('SITE_ROOT',		realpath( LIB_ROOT . '/..' ) 			);

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


// de submap-paden definiëren
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


// de functies laden
require_once 'functions.php';