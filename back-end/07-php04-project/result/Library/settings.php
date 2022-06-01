<?php
// debug aan
$debug = true;
// errors zien AAN
ini_set('display_errors', $debug);
// error_reporting: alles
error_reporting(E_ALL);


// library root is hetzelfde als de map van dit settings-bestand
define('LIB_ROOT'		, 	realpath( __DIR__ ) 						);
// de site root gaat 1 map naar boven t.o.v. de library-root
define('SITE_ROOT'		,	realpath( LIB_ROOT . '/..' ) 				);

// de ware rootfolder-naam ophalen
$rootfolder = explode('/' , substr( $_SERVER['SCRIPT_FILENAME'] , strlen(SITE_ROOT)+1) )[0];

// document root = siteroot + rootfolder-naam
define('DOCUMENT_ROOT'	,	realpath( SITE_ROOT 	. '/' . $rootfolder ));

// pad naar images
define('IMG_URL'		,	realpath( DOCUMENT_ROOT . '/images' ) 		);
// pad naar includes
define('INC'			, 	realpath( LIB_ROOT		. '/includes' ) 	);
// pad naar css bestanden
define('CSS_URL'		, 	WEB_URL . '/css'							);
// pad naar javascript bestanden
define('JS_URL'			, 	WEB_URL . '/js'								);
// pad naar pages
define('PAGES_URL'		, 	WEB_URL . '/pages'							);


// de functies laden
require_once 'functions.php';