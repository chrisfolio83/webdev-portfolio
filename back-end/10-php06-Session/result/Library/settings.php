<?php
// debug aan
$debug = true;
// errors zien AAN
ini_set('display_errors', $debug);
// error_reporting: alles
error_reporting(E_ALL);

// mappaden definiëren en de ware paden gebruiken
define('DOCUMENT_ROOT',	realpath( $_SERVER['DOCUMENT_ROOT'] )	);
define('IMG_ROOT',		realpath( DOCUMENT_ROOT . '/images' ) 	);
define('SITE_ROOT',		realpath( DOCUMENT_ROOT . '/..'  	)	);
define('LIB_ROOT', 		realpath( SITE_ROOT . '/Library' 	)	);
define('INC', 			realpath( LIB_ROOT . '/includes' 	)	);

// web url definiëren en auto-keuze http of https
define('WEB_URL', 	'//' . $_SERVER['HTTP_HOST']	);

// de submap-paden definiëren
define('IMG_URL', 	WEB_URL . '/images'			);
define('CSS_URL', 	WEB_URL . '/css'			);
define('JS_URL', 	WEB_URL . '/js'				);
define('PAGE_URL', 	WEB_URL . '/pages'			);

// de functies laden
require_once 'functions.php';